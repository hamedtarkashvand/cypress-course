import React from 'react'
interface iUserData {
  id: number,
  name:string
}
const UserPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next:{revalidate:50}
  });
  const data: iUserData[] = await response.json();
  

  
  return (
    <>
      <div>UserPage</div>
      <div className='text-red-600'>{new Date().toLocaleString()}</div>
      {
        data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))
      }
    </>
  )
}

export default UserPage
