import React from 'react'
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="member_wrap">
      <div className="member_inner">

      <form className="loginForm">
        <div className='member_title_wrap'>
              <h1 className='member_title'>로그인</h1>
          </div>
          <div>
            <div className="input">
                <input type="text" className="userId" id="userId" placeholder="아이디" autoFocus></input>
                <input type="password" className="password" id="password" placeholder="비밀번호"></input>
                <button id="loginBut">Login</button>
            </div>
          </div>
      </form>

      <div className="link">
          <NavLink to="/findId">아이디 찾기</NavLink>
          <span>&nbsp;|&nbsp;</span>
          <NavLink to="/findPw">비밀번호 찾기</NavLink>
          <span>&nbsp;|&nbsp;</span>
          <NavLink to="/signup">회원가입</NavLink>
      </div>

      </div>
    </div>
  )
}

export default Login