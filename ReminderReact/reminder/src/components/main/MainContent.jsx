import React, { useState } from "react";
import './MainContent.css';




/**
 * 메인 콘텐츠: 선택된 목록에 따른 메모 리스트 출력
 */
const MainContent = ({ selectedList }) => {

  /**
   * 더미 메모 상태
   */
  const [memos, setMemos] = useState([
    { id: 1, text: "React 공부하기", done: false },
    { id: 2, text: "친구 생일 선물 사기", done: true },
    { id: 3, text: "운동 30분 하기", done: false }
  ]);




  /**
   * 체크박스 클릭 시 완료 상태 토글
   */
  const toggleMemoDone = (id) => {
    setMemos((prev) =>
      prev.map((memo) =>
        memo.id === id ? { ...memo, done: !memo.done } : memo
      )
    );
  };




  /**
   * return()
   */
  return (
    <main className="main-content">

      {/* 타이틀 */}
      <h2>{selectedList}</h2>

      {/* 메모 목록 */}
      <ul className="memo-list">
        {memos.map((memo) => (
          <li key={memo.id} className="memo-item">
            <input
              type="checkbox"
              checked={memo.done}
              onChange={() => toggleMemoDone(memo.id)}
            />
            <span className={memo.done ? "done" : ""}>{memo.text}</span>
          </li>
        ))}
      </ul>

      {/* 새로운 메모 추가 버튼 */}
      <div className="add-memo-button-wrapper">
        <button className="add-memo-button">+ 새로운 메모</button>
      </div>
    </main>
  );
};

export default MainContent;
