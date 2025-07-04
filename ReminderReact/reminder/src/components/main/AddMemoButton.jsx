import React from "react";

const AddMemoButton = ( {selectedList}) => {

  const handleAdd = () => {
    console.log(`'${selectedList}'에 새로운 목록 추가`);
  }


  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button
        onClick={handleAdd}
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        + 새로운 미리 알림
      </button>
    </div>
  );
};

export default AddMemoButton;
