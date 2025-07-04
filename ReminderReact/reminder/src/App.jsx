import './App.css'

import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/main/MainContent";
import Header from './components/common/Header';

import { useState } from 'react';






//////////////////////////////////////////////////
function App() {

  /**
   * 현재 선택 목록
   */
  const [selectedList, setSelectedList] = useState('Reminder');




  /**
   * return()
   */
  return (

   <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
        <MainContent 
          selectedList={selectedList}
        />
      </div>
    </div>
   
  ) 
}//App()



export default App
