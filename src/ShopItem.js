import React, { useEffect, useState } from 'react'
import  { useParams } from 'react-router-dom'

function ShopItem(){
  let {postID} = useParams();
  
   const [post, setPost] = useState({})
   useEffect( () => {
    fetchItem()
  }, [])

  const fetchItem = async() => {
    const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    const item= await data.json()
    setPost(item)
    
  }

  return(
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default ShopItem