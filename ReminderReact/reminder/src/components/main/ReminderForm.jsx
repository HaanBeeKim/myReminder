// src/components/ReminderForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ReminderForm = ({ selectedList, allLists, onMemoAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  // selectedList 이름 → listId 매핑
  const selectedListId = allLists.find((list) => list.name === selectedList)?.id;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedListId) {
      alert("선택된 목록이 없습니다.");
      return;
    }

    const newMemo = {
      title,
      description,
      dueDate: dueDate ? new Date(dueDate).toISOString() : null,
      memoListId: selectedListId,
      memberId: 1, // TODO: 추후 실제 로그인 사용자로 교체
    };

    axios.post("http://localhost:8080/api/memos", newMemo)
      .then((res) => {
        alert("✅ 메모가 등록되었습니다.");
        setTitle("");
        setDescription("");
        setDueDate("");
        onMemoAdded(); // 등록 후 부모에서 다시 목록 불러오도록
      })
      .catch((err) => {
        console.error("메모 등록 실패", err);
        alert("❌ 등록 중 오류가 발생했습니다.");
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h3>📝 새 미리알림 추가</h3>
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
      </div>
      <div>
        <textarea
          placeholder="설명 (선택)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
      </div>
      <div>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={{ marginBottom: "0.5rem" }}
        />
      </div>
      <button type="submit">등록하기</button>
    </form>
  );
};

export default ReminderForm;
