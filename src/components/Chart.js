import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";

import AnimatedProgressProvider from './AnimatedProgressProvider'

const Chart = ({title, value}) => {
  return (
    <div className="bar" data-percent={value}>
      <h3>{title}</h3>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={value}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {() => {
          return (
            <CircularProgressbar
              value={value}
              strokeWidth={2}
              minValue={0}
              maxValue={100}
              text={`${value}%`}
              background
              backgroundPadding={0}
              styles={buildStyles({
                backgroundColor: "transparent",
                textColor: "#fff",
                pathColor: "#77ffe9",
                trailColor: "transparent",
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  )
}

export default Chart
