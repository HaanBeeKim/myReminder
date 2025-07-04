import React from "react";
import memoGroupDummy from "../../data/memoGroupDummy";
import './MemoGroup.css';




/**
 * 메모 그룹: 상태별/필터별 메모 분류
 */
const MemoGroup = () => {




  /**
   * return()
   */
  return (
    <div className="memo-group-grid">
      {memoGroupDummy.map((item) => (
        <div
          key={item.id}
          className="group-item"
          onClick={() => console.log(`"${item.label}" 클릭됨`)}
        >
          <span>{item.label}</span>
          <span>{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default MemoGroup;
