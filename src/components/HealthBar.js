import React from "react";

const HealthBar = ({ health }) => {
    // Determine the progress bar color based on health percentage
    const getHealthColor = (health) => {
        if (health > 70) return 'success';
        if (health > 40) return 'warning';
        return 'danger';
    }
    return (
        <div className = "HealthBar">
            <div className = "progress">
            <div
            className={`progress-bar bg-${getHealthColor(health)}`}
            role="progressbar"
            style={{ width: `${health}%` }}
            aria-valuenow={health}
            aria-valuemin="0"
            aria-valuemax="100"
            >
                {health.toFixed(2)}%;
            </div>
            </div>
        </div>
    )
}

export default HealthBar;