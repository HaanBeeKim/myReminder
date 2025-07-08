import React, { useEffect, useState } from "react";
import axios from "axios";
import ReminderForm from "./ReminderForm"; // 추가

const ReminderList = ({ selectedList, setSelectedList }) => {
  const [allLists, setAllLists] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/lists")
      .then((res) => setAllLists(res.data))
      .catch((err) => console.error("목록 불러오기 실패", err));
  }, []);

  useEffect(() => {
    if (allLists.length > 0 && !selectedList) {
      setSelectedList(allLists[0].name);
    }
  }, [allLists, selectedList, setSelectedList]);

  const selectedListId = allLists.find((list) => list.name === selectedList)?.id;

  const fetchReminders = () => {
    if (!selectedListId) return;
    axios.get(`http://localhost:8080/api/lists/${selectedListId}/memos`)
      .then((res) => setReminders(res.data))
      .catch((err) => console.error("미리알림 불러오기 실패", err));
  };

  useEffect(() => {
    fetchReminders();
  }, [selectedListId]);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* 사이드바: 목록 리스트 */}
      <div style={{ width: "200px" }}>
        <h3>📂 나의 목록</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {allLists.map((list) => (
            <li
              key={list.id}
              onClick={() => setSelectedList(list.name)}
              style={{
                cursor: "pointer",
                padding: "8px 12px",
                backgroundColor: selectedList === list.name ? "#e0f7fa" : "transparent",
                borderRadius: "6px",
                marginBottom: "4px",
              }}
            >
              <span>{list.icon ? `📌 ${list.icon}` : "🗂️"} {list.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 본문: 메모 등록 폼 + 미리알림 리스트 */}
      <div style={{ flex: 1 }}>
        <ReminderForm
          selectedList={selectedList}
          allLists={allLists}
          onMemoAdded={fetchReminders} // 등록 후 목록 다시 불러오기
        />

        <h4>{selectedList}의 미리 알림</h4>
        <ul style={{ paddingLeft: 0 }}>
          {reminders.map((item) => (
            <li key={item.id} style={{ marginBottom: "1rem" }}>
              <div><strong>{item.title}</strong></div>
              {item.description && (
                <div style={{ fontSize: "0.9rem", color: "#666" }}>
                  {item.description}
                </div>
              )}
              {item.dueDate && (
                <div style={{ fontSize: "0.8rem", color: "#aaa" }}>
                  📅 {new Date(item.dueDate).toLocaleString()}
                </div>
              )}
            </li>
          ))}
          {reminders.length === 0 && <p>📭 미리 알림이 없습니다.</p>}
        </ul>
      </div>
    </div>
  );
};

export default ReminderList;
