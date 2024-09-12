import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import NotFound from './NotFound';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>} />
      <Route path='/createUser' element={<CreateUser/>} />
      <Route path='/updateUser/:id' element={<UpdateUser/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
