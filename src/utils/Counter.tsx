"use client";

import {useEffect, useState} from "react";

type CounterProps = {
  target: number; // final number to reach
  suffix?: string; // optional suffix like "%" or "+"
  duration?: number; // animation duration in ms
};

const Counter: React.FC<CounterProps> = ({target, suffix = "", duration = 2000}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const incrementTime = 30; // ms
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        
        setCount(end);
      } else setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
