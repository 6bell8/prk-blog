/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "커피원두 추천",
    "여자 코트 추천",
  ]);

  let [하트, 하트변경] = useState(0); // 배열 뒤에 있는 건 state 변경 함수
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}

        // 글 변경 할 떄 자의적으로 하는 것이 아닌 전체 배열을 참고해서 바꿔야한다.

        // 리액트로 글을 수정할 때는 원본을 항상 보존하는 습관을 들여한다.

        //[...] 흩뿌리는 작업을 하는 이유는 기존 state에서 벗어나  신규 state로 넘어가는 작업을 위한 기능이다
      >
        글 수정
      </button>

      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              {
                하트변경(하트 + 1);
              }
            }}
          >
            💗
          </span>
          {하트}
        </h4>
        <p>9월 28일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>9월 28일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>9월 28일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
