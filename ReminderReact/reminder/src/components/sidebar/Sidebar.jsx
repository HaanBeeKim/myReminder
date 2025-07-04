import React from "react";
import MemoGroup from "./MemoGroup";
import MyList from "./MyList";
import AddListButton from "./AddListButton";
import './Sidebar.css';




/**
 * 사이드바: 메모 그룹 + 나의 목록 + 목록 추가 버튼
 */
const Sidebar = ({ selectedList, setSelectedList }) => {




  /**
   * return()
   */
  return (
    <div className="sidebar">

      {/* 메모 그룹 */}
      <MemoGroup />

      {/* 나의 목록 */}
      <MyList
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />

      {/* 목록 추가 버튼 */}
      <AddListButton />
    </div>
  );
};

export default Sidebar;
