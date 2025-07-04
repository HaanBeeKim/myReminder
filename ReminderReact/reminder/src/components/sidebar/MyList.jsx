import React from "react";
import listDummyData from "../../data/listDummy";
import './MyList.css';




/**
 * 나의 목록: 사용자 정의 리스트 목록
 */
const MyList = ({ selectedList, setSelectedList }) => {




  /**
   * return()
   */
  return (
    <div>
      <h3 className="mylist-title">나의 목록</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listDummyData.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedList(item.name)}
            className={`list-item ${
              selectedList === item.name ? "active" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
