import React, { useEffect, useState } from 'react'
import UseCrud from './hooks/UseCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

const App = () => {

 const [userEdit, setUserEdit] = useState()
 const [formIsClose, setFormIsClose] = useState(true)
  
  const BASEURL = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUsers] = UseCrud(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  },[])

  const handleOpenForm = () => {
    setFormIsClose(false)
  }
 
  return (
    <div className='app'>
      <header className='app__header'>
          <h2 className='app__title'>usecrud</h2>
          <button onClick={handleOpenForm} className='form__btn'>Create new user</button>
      </header>
      
      
        <FormUser
         createUser = {createUser}
         userEdit={userEdit}
         updateUsers={updateUsers}
         setUserEdit={setUserEdit}
         formIsClose={formIsClose}
         setFormIsClose={setFormIsClose}
        />
        <div className='user-container'>
          {
            users?.map(user => (
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setUserEdit={setUserEdit}
                handleOpenForm={handleOpenForm}
              />
            ))
          }
        </div>
     
    </div>
  )
}

export default App