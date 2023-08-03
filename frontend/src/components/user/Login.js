import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/user/Login.css";
import Background from "../layout/Background.js";
import { api } from "../../services/httpService";

function Login({ userInfo, addUserInfo, setIsLogin }) {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPw, setInputPw] = useState("");
	const handleInputEmail = (e) => {
		setInputEmail(e.target.value);
	};
	const handleInputPw = (e) => {
		setInputPw(e.target.value);
	};
	// axios 인스턴스 생성
	const apiInstance = api();
	// 페이지 이동을 위한 useNavigate를 사용하기 위한 변수 선언
	const navigate = useNavigate();

	const getUserInfo = async function () {
		const accessToken = sessionStorage.getItem("accessToken");
		console.log(accessToken);
		try {
			const res = await apiInstance.get(`/user/${1}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`, // Bearer 토큰 포함
				},
			});
			console.log(res);
			addUserInfo({
				nickname: res.data.nickname,
				userImg: res.data.userImg,
				userId: res.data.userId,
			});
			console.log(userInfo.nickname);
		} catch (error) {
			console.log("getUserInfo 실패");
		}
	};

	const onClickLogin = async function login() {
		try {
			const res = await apiInstance.post("/auth/login", {
				email: inputEmail,
				password: inputPw,
			});
			// 서버 응답으로 받은 accessToken과 refreshToken을 sessionStorage에 저장
			sessionStorage.setItem("accessToken", res.data.accessToken);
			sessionStorage.setItem("refreshToken", res.data.refreshToken);
			setIsLogin();
			console.log("getUserInfo 진입직전");
			getUserInfo();
			// 로그인 성공 시 메인 페이지로 이동
			navigate("/");
			alert("로그인 성공");
		} catch (error) {
			console.error("로그인 실패:", error);
			alert("로그인 실패");
		}
	};

	return (
		<div className="LoginWrap">
			<h1>LOGIN</h1>
			<div className="inputbox">
				<label htmlFor="input_email">Email</label>
				<input
					type="text"
					name="input_email"
					value={inputEmail}
					onChange={handleInputEmail}
					className="IdInput"
				/>
			</div>
			<div className="inputbox b2">
				<label htmlFor="input_pw">PWD</label>
				<input
					type="password"
					name="input_pw"
					value={inputPw}
					onChange={handleInputPw}
					className="PwdInput"
				/>
			</div>
			<div>
				<button type="button" onClick={onClickLogin} className="loginBtn">
					Login
				</button>
				<div className="register">
					<span className="registerQ">회원이 아니십니까?</span>
					<Link to="/register">
						<span className="registerLink">회원가입</span>
					</Link>
				</div>
			</div>
			<div className="background-wrapper">
				<Background />
			</div>
		</div>
	);
}

export default Login;
