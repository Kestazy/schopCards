import React, {useState, useEffect } from 'react'

function Posts() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(res => setItems(res))
    }, [resourceType]);

    console.log(items)
  return (
    <div>
        <button onClick={()=>setResourceType('posts')} >POSTS</button>
        <button onClick={()=>setResourceType('users')} >USERS</button>
        <button onClick={()=>setResourceType('comments')} >COMMENTS</button>
        <main>
          
        </main>
    </div>
  )
}

export default Posts