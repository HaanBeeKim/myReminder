import React, { useState } from "react";
import listDummyData from "../../data/listDummy";
import './SearchBar.css';




const SearchBar = () => {
  const [keyword, setKeyword] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;
    setKeyword(value);

    const filtered = listDummyData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log("검색 결과 : ", filtered);
  }; // const handleSearch

  return (
    <div style={{ marginBottom: "1px" }}>
      <input
        type="text"
        className="search-input"
        placeholder="🔎 검색"
        value={keyword}
        onChange={handleSearch}
      />
    </div>
  ); // return
};

export default SearchBar;
