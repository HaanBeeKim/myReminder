import React from "react";
import reminderDummy from "../../data/reminderDummy";

const ReminderList = ({ selectedList, setSelectedList }) => {
  const filtered = reminderDummy.filter((item) => item.list === selectedList);

  return (
    <div>
      <h4>{selectedList}의 미리 알림 목록</h4>
      <ul style={{ paddingLeft: 0 }}>
        {filtered.map((item) => (
          <li
            className={`list-item ${
              selectedList === item.name ? "active" : ""
            }`}
            onClick={() => setSelectedList(item.name)}
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
