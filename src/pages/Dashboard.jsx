import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenApi } from "../utils/fetchAPI";
import BackButton from "../components/backButton";
import { useAuth } from "../hooks/auth";

const Dashboard = () => {
  const router = useNavigate();
  const {user}= useAuth({middleware:'auth'})
  const {logout} = useAuth()
  if (!user){
    return(
      <>
      로딩중...
      </>
    )
  }
  
  return (
    <>
    <BackButton/>
    <div>{user?.name}</div>
    <button onClick={logout}>logout</button>
    <button onClick={()=>{router('/answer-test')}}>answer 작성</button>
    <button onClick={()=>{router('/image-test')}}>이미지 테스트</button>
    </>
  )
};

export default Dashboard;
