import React from 'react'
import PostList from './board/PostList';
import SubContents from '../components/layout/SubContents'   


const YoutubePage = () => {
  const htmlContent = `
    <div className="intro_wrap"> 
     게시판
     <PostList />
    </div>
  `;

return (
  <>
      <SubContents subContent={htmlContent} />
  </>
)
}

export default YoutubePage

