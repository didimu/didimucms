import React from 'react';
import PostList from './PostList'; 

const PostMain = props => {
  return (
    <>
      <h2 align="center">게시판</h2>
      <PostList />
    </>
  )
}

export default PostMain;



        
//<Route exact path='/postView/:no' component={PostView} />
//<Route exact path='/post' component={PostMain} />