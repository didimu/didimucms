import React from 'react'

const Location = () => {
  return (
    <div className="location">
        <fieldset>
            <legend>페이지 위치</legend>
                <div className="location_tit">
                    <p>CEO인사말</p> 
                </div>								
                <div className="location_txt">
                    <p><span className="home">홈</span> <span>회사소개</span><span>CEO인사말</span></p> 
                </div>												
        </fieldset>
    </div>
  )
}

export default Location