import React from 'react'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].name}: ₦${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
}
export default CustomTooltip