import React, { useEffect, useState } from 'react'
import { imageDownloadApi } from '../utils/fetchAPI'

const Image = ({folder, fileName, style}) => {
  const url = 'http://localhost:8000/api/imageDownload'
  const [src, setSrc] = useState('')
  useEffect( () => {
    async function fetchData() {
      const response = await imageDownloadApi(url,folder, fileName);
      setSrc(response)
    }
    fetchData();
  }
  ,[])
  return (
    <img style={{...style}} src={src} alt="not found" />
  )
}

export default Image