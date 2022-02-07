import React from 'react';
import styled from 'styled-components';

const CircularProgressBar = (props) => {
  const squareSize = props.squareSize;
  const radius = (squareSize - props.strokeWidth) / 2;
  const viewBox = `0 0 ${squareSize} ${squareSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.percentage) / 100;

  return (
    <div>
      <svg width={squareSize} height={squareSize} viewBox={viewBox}>
        <CircleBackground
          cx={squareSize / 2}
          cy={squareSize / 2}
          r={radius}
          strokeWidth={props.strokeWidth}
        />
        <CircleProgress
          cx={squareSize / 2}
          cy={squareSize / 2}
          r={radius}
          strokeWidth={props.strokeWidth}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${squareSize / 2} ${squareSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <CircleText x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${props.time}`}
        </CircleText>
      </svg>
    </div>
  );
};

export default CircularProgressBar;

const CircleText = styled.text`
  font-size: 4em;
  font-weight: bold;
  fill: red;
`;

const CircleBackground = styled.circle`
  stroke: #ddd;
  fill: none;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: red;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
