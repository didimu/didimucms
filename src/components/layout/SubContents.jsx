import React from 'react' 
import SubVisual from './SubVisual'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const SubContents = ({ subContent }) => {
  return (
    <>
      <div id="subWrap">
        <SubVisual />
        <div id="sub_container" role="sub">
            <div className="container_in">
                <LeftColumn />
                <RightColumn content={subContent} /> 
            </div>
        </div>
      </div>
    </>
  )
}


export default SubContents