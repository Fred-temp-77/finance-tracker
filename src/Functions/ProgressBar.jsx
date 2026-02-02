import React from 'react'

const ProgressBar = ({ percentage }) => {
    return (
        <div
          style={{
            background: "#eee",
            height: "10px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
            <div
                style={{
                width: `${percentage}%`,
                height: "100%",
                background:
                    percentage >= 100
                    ? "red"
                    : percentage >= 80
                    ? "orange"
                    : "green",
                transition: "width 0.3s",
                }}
            />
        </div>
    );
};

export default ProgressBar