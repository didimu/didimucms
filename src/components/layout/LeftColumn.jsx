import React from 'react'
import { Link } from 'react-router-dom'

const LeftColumn = ({props}) => {
  return (
    <div id="leftcolumn">

				
        <h2 class="hidden">서브메뉴</h2>
        <div id="snb_tit">
            <p>회사소개</p>
        </div>
        <hr /> 
        <div id="snb">
            <ul>
                <li><Link to="/">CEO인사말</Link></li>
                <li><Link to="/">연혁</Link></li>
                <li><Link to="/">조직도</Link></li>
                <li><Link to="/">찾아오시는길</Link></li>
            </ul>
        </div>    	


    </div>
  )
}

export default LeftColumn