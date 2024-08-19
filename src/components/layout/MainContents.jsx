import React from 'react'

const MainContents = ({children}) => {
  return (
    <div id="main_container" role="main">
        <div className="container_in">
             {children}
        </div>
    </div>
  )
}

export default MainContents