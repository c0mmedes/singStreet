import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import myImage from "../assets/sample1.png";
import myImage2 from "../assets/chart2.PNG";

const Home = () => {
  return (
    <div>
      <Link to="/chat">
        <div>상우기의 채팅상담@@@@@@@@@@@@@@@@@@@@@@</div>
      </Link>
      <Link to="/studio">
        <div>studio</div>
      </Link>
      <ul className="cards">
        <li>
          <a href="" class="card">
            <img src={myImage} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">B110 엔터</h3>
                  <span class="card__status">
                    # KPOP # 뉴진스 # 10대 # 화이팅
                  </span>
                </div>
              </div>
              <p class="card__description">
                안녕하세요 주로 뉴진스 노래를 커버하는 가상엔터 B110엔터입니다!
                모두 자유롭게
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img src={myImage2} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">푸른 엔터테인먼트</h3>
                  <span class="card__status">#푸른 #04 #05 #반모</span>
                </div>
              </div>
              <p class="card__description">
                안녕하세요 주로 아이돌 커버를하는 푸른 엔터테인먼트입니다 !
                여러분의 지원을 기다립니다!
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>{" "}
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>{" "}
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>{" "}
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>{" "}
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>{" "}
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
