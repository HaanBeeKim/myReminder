import React, { useEffect, useState } from "react";
import axios from "axios";
import ReminderForm from "./ReminderForm";

const MainContent = ({ selectedList }) => {
  const [allLists, setAllLists] = useState([]);
  const [reminders, setReminders] = useState([]);

  // 전체 목록 불러오기
  useEffect(() => {
    axios.get("http://localhost:8080/api/lists")
      .then((res) => setAllLists(res.data));
  }, []);

  // 선택된 이름 → ID로 변환
  const selectedListId = allLists.find(list => list.name === selectedList)?.id;

  // 선택된 목록의 메모들 불러오기
  const fetchReminders = () => {
    if (!selectedListId) return;
    axios.get(`http://localhost:8080/api/lists/${selectedListId}/memos`)
      .then((res) => setReminders(res.data));
  };

  useEffect(() => {
    fetchReminders();
  }, [selectedListId]);

  return (
    <div className="main-content">
      <h2>{selectedList}</h2>

      <ReminderForm
        selectedList={selectedList}
        allLists={allLists}
        onMemoAdded={fetchReminders}
      />

      <ul className="memo-list">
        {reminders.map((memo) => (
          <li key={memo.id} className={`memo-item ${memo.isDone ? 'done' : ''}`}>
            <input type="checkbox" checked={memo.isDone} readOnly />
            <span>{memo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
