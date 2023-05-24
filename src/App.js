/* eslint-disable */ 

import './App.css';
import { useState } from 'react';
import Modal from './component/Modal';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [num, setNum] = useState(0);

  let handleClick = () => {
    setNum(num + 1);
  }

  let handleChange = () => {
    let newArray = [...title];
    newArray[0] = '여자 코트 추천';
    setTitle(newArray);
  }

  return (
    <div className="App">
      <header className='black-nav'>
        <div>개발 Blog</div>
        <nav></nav>
      </header>
      <button onClick={handleChange}>변경</button>
      <div className='list'>
        <h3>{title[0]} <span onClick={handleClick}>👍</span> {num} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{title[1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{title[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal/>

    </div>
  );
}



export default App;
