/* eslint-disable */

import "./css/App.css";
import "./css/layout.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "커피원두 추천",
    "여자 코트 추천",
  ]);

  let [하트, 하트변경] = useState([0, 0, 0]); // 배열 뒤에 있는 건 state 변경 함수

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* 
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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
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
        {modal == true ? <Modal /> : null}
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>9월 28일 발행</p>
      </div>
      <div className="list">
        <h4
      
        >
          {글제목[2]}
        </h4>
        <p>9월 28일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  {
                    let copy = [...하트];
                    copy[i] = copy[i] + 1;
                    하트변경(copy);
                  }
                }}
              >
                💗
              </span>
              {하트[i]}
            </h4>
            <p>9월 28일 발행</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          setTitle(0);
        }}
      >
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}
      >
        글제목2
      </button>

      {modal == true ? (
        <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} />
      ) : null}
    </div>
  );
}

//컴포넌트의 단점은 state 가져다 쓸 때마다 문제가 생긴다.

// 부모  > 자식 state 전송하는 법
// 1. 자식 컴포넌트 작명 = {state 이름}
// 2. props 파라미터 등록 후 props.ex작명 이후 사용
// props는 state 내려받을 때 웬만하면 옆에 있는 애랑 똑같은 이름으로 작명해줌

// props 전송은 부모 > 자식만 가능하다

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자코트 추천", "남자코트 추천", "커피원두 추천"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
