import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // document.querySelector('h4').innerHTML = post;

  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [logo, setLogo] = useState('ReactBlog');
  // a는 옆에 쓴 변수

  // Destructuring 문법

  // let a = num[0];
  // let c = num[1];

  let num = [1, 2]; 
  let [a, c] = [1, 2];

 
  return (
    <div className="App">
      <div className="black-nav">
        <h4> {logo} </h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4> 
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
