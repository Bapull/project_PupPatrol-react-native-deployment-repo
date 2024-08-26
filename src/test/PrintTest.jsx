import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Image from '../components/Image';
import CommentTest from './CommentTest';

const PrintTest = () => {
  const {state} = useLocation();
  const navigator = useNavigate();
  const [post, setPost] = useState([])
  useEffect(()=>{
    setPost(JSON.parse(state.postContent))
  },[])  
  
  return (
    <div>
      <h1>{state.postTitle}</h1>
      {post.map((item)=>{
        if(item.substr(0,7) === '(IMAGE)'){
          return <Image folder={'board'} fileName={item.substr(7)} style={{width:"200px"}}/>
        }else{
          return <p>{item}</p>
        }
      })}
      <button onClick={()=>{navigator('/board-update-test', {
        state : state
      })}}>수정</button>
      <CommentTest postId={state.id}/>
    </div>
  )
}

export default PrintTest