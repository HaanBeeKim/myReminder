import "./Header.css";
import { useEffect, useState } from "react";

function Header() {

    /**
     * 현재시간 표기
     */
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const days = ['일', '월', '화', '수', '목', '금', '토'];
            const now = new Date();

            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const date = now.getDate();
            const day = days[now.getDay()];
            
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours < 12 ? "오전" : "오후";
            const hour12 = hours % 12 || 12;

            const formatted = `${month}월 ${date}일 ${day}요일 | ${ampm} ${hour12}시 ${String(minutes).padStart(2, '0')}분`;
            setCurrentTime(formatted);
        };

        updateTime(); // 최초 호출

        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer); // 클린업
    }, []);







  /**
   * return()
   */  
  return (
    <header className="header">

      <div className="header-left">
        <div className="time">{currentTime}</div>

      
        <button>←</button>
        <button>→</button>

      </div>



      <div className="header-center">
        <button>📅</button> {/* 캘린더 */}
        <button>📍</button> {/* 지도 */}
        <button>#</button> {/* 태그 */}
      </div>




      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="🔎검색" />
        </div>

        <button>⋯</button> {/* 메뉴 */}
      </div>

    </header>
  );
}

export default Header;
