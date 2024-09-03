import React from 'react' 
import Location from './Location'

const RightColumn = (props) => {
  return (
    <div id="rightcolumn">
        <h2 className="hidden">본문영역</h2> 

        <div id="content"> 
            <Location />

            <div className="content_in">{props.children}</div> 
        </div>
    </div>
  )
}

export default RightColumn