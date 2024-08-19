//https://withdiary.net/react%EC%97%90%EC%84%9C-multilevel-dropdown-menu-%EB%A7%8C%EB%93%A4%EA%B8%B0/ 


import React, { useState } from "react"; 
import {Link} from 'react-router-dom'
import imgLogo from '../../assets/img/common/img_logo.png'  
import Navbar from "./Navbar ";



const Header = (props) => {
  

  return (
    <header id="header" role="heading" aria-level="1">
      <div className="header_inner_etc">	
        <div className="etc clearFix">
          <div id="gnb">
            <h2 className="hidden">사용자메뉴</h2> 
            <div className="global pc">
              <ul className="global_list clearFix">
                <li><Link to="/">홈</Link></li> 
                <li><Link to="/">지점안내</Link></li>

                <li>
                  <em className="login_box">
                    <strong>
                      <Link to="/">로그인</Link>
                      <Link to="/">회원가입</Link>
                    </strong>
                  </em>
                </li>   
              </ul> 
              
            </div>
          </div>
        </div>
      </div>


      <div className="header_inner">
        <div className="header_logo score9">
          <Link to="/">
            <img src={imgLogo} />
          </Link>
        </div>

        <Navbar />
       

      </div>
    </header>
  );
};

export default Header;

/*
 
        <div className="nav" role="navigation">
          <ul className="navContainer">
            <li className="depth01">
              <Link to="/intro">테니스</Link>
            </li>
            <li>
              <Link to="/port">선수소개</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link to="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </div>


*/