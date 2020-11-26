import React, { useState, useEffect } from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({children, repeat, duration, valueStart, valueEnd, easingFunction}) => {

  const [interval, setCustomInterval] = useState(undefined)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (repeat) {
      setCustomInterval(window.setInterval(() => {
        setIsAnimated(!isAnimated)
      }, duration * 1000))
    } else {
      setIsAnimated(!isAnimated)
    }

    return () => window.clearInterval(interval)
  }, [])  

  return (
    <Animate
      start={() => ({
        value: valueStart
      })}
      update={() => ({
        value: [
          isAnimated ? valueEnd : valueStart
        ],
        timing: {
          duration: duration * 1000,
          ease: easingFunction
        }
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
}

AnimatedProgressProvider.defaultProps = {
  valueStart: 0
}

export default AnimatedProgressProvider;