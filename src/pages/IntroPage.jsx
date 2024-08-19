import React from 'react'
import SubContents from '../components/layout/SubContents'  
/*
import SubVisual from '../components/layout/SubVisual';
import LeftColumn from '../components/layout/LeftColumn';
import RightColumn from '../components/layout/RightColumn';
*/

const IntroPage = () => {

  const htmlContent = `
    <div className="intro_wrap"> 
      intro
      <div>asdfasfdasfdsdf</div>
    </div>
  `;

  return (
    <>
      <SubContents subContent={htmlContent} />
    </>
  )
}
/*
      <div id="subWrap">
        <SubVisual />
        <div id="sub_container" role="sub">
            <div className="container_in">
                <LeftColumn />
                <RightColumn content={htmlContent} /> 
            </div>
        </div>
      </div>
*/
export default IntroPage