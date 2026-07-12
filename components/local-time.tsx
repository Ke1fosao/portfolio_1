"use client";

import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("uk-UA", {
  timeZone: "Europe/Kyiv",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

export function LocalTime() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const updateTime = () => setTime(timeFormatter.format(new Date()));

    updateTime();
    const intervalId = window.setInterval(updateTime, 30_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="local-time" aria-label={`Місцевий час у Рівному: ${time}`}>
      <span className="local-time-city">Рівне</span>
      <time dateTime={time}>{time}</time>
    </div>
  );
}
