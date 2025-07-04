import React, { useEffect, useState } from "react";
import axios from "axios";

const ReminderList = ({ selectedList, setSelectedList }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/reminders")
      .then((res) => {
        setReminders(res.data);
      })
      .catch((err) => {
        console.error("미리알림 불러오기 실패", err);
      });
  }, []);

  const filtered = reminders.filter((item) => item.list === selectedList); 
  // ↑ 백엔드에서 받아온 항목에 `list`(또는 categoryName 등) 필드가 있어야 함

  return (
    <div>
      <h4>{selectedList}의 미리 알림 목록</h4>
      <ul style={{ paddingLeft: 0 }}>
        {filtered.map((item) => (
          <li
            key={item.id}
            className={`list-item ${selectedList === item.name ? "active" : ""}`}
            onClick={() => setSelectedList(item.name)} // 클릭 방식은 추후 수정 가능
          >
            {item.name}
          </li>
        ))}
        {filtered.length === 0 && <p>미리 알림이 없습니다.</p>}
      </ul>
    </div>
  );
};

export default ReminderList;
