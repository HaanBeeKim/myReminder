import React, { useEffect, useState } from "react";
import './SidebarTime.css';



const formatDate = (date) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const ampm = hour < 12 ? "오전" : "오후";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = week[date.getDay()];

  return `${month}월 ${day}일 ${weekday}요일 ${ampm} ${hour12}:${minute}`;
};

const SidebarTime = () => {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000 * 60); // 1분마다 갱신

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sidebar-timebox">
      <p className="sidebar-time">{formatDate(now)}</p>
    </div>
  );
};

export default SidebarTime;
