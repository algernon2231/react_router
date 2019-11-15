import React, { useEffect, useState } from 'react'
import  { Link } from 'react-router-dom'

function Shop(){
  useEffect( () => {
    fetchItems()
  }, [])

  const [comments, setComments] = useState([])
  const fetchItems = async() => {
    const data= await fetch('https://jsonplaceholder.typicode.com/posts')
    const items = await data.json()
    setComments(items)
  }
  return(
    <div>
        {comments.map( comment => (
          <h5 key = {comment.id}>
          <Link to = {`/shop/${comment.id}`} >{comment.title}</Link>
          </h5>
        )) }
    </div>
  )
}

export default Shop