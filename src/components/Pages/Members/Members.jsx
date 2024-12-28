import React, { useState, useEffect } from 'react';
import './Members.css';

const Members = () => {
    const [guildData, setGuildData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const guildId = '1322456961899565106';

    useEffect(() => {
        const fetchGuildData = async () => {
            try {
                if (!guildId) {
                    throw new Error("Discord Guild ID not found in environment variables.");
                }

                const response = await fetch(`https://discord.com/api/guilds/${guildId}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`Discord API error: ${response.status} ${response.statusText} - ${errorData?.message || 'No details provided'}`);
                }

                const data = await response.json();
                setGuildData(data);
            } catch (err) {
                setError(err);
                console.error("Error fetching guild data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchGuildData();
    }, []);

    if (loading) {
        return <div className="members-container loading">Loading guild data...</div>;
    }

    if (error) {
        return <div className="members-container error">Error: {error.message}</div>;
    }

    if (!guildData) {
        return <div className="members-container">No guild data available.</div>;
    }

    return (
        <div className="members-container">
            <h1>{guildData.name}</h1> {/* Display the server name */}
            <img src={`https://cdn.discordapp.com/icons/${guildId}/${guildData.icon}.png`} alt={`${guildData.name} icon`} className='guild-icon' onError={(e) => { e.target.onerror = null; e.target.src="/default-guild-icon.png"}}/>
            <p>Member Count: {guildData.approximate_member_count || 'Not available'}</p> {/* Display approximate member count */}
            {guildData.description && <p>Description: {guildData.description}</p>}
            {/* You can display other guild information here (e.g., features) */}
        </div>
    );
};

export default Members;