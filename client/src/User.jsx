import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const User = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:4000")
        .then((users)=> setUsers(users.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async(id)=>{
        await axios.delete(`http://localhost:4000/deleteUser/${id}`)
        .then(()=>{
            setUsers((prevUser)=> prevUser.filter(user => user._id !== id))
            navigate('/');
        }).catch((err)=> console.log(err.message))
    }

  return (
    <>
    <div className=" bg-slate-600 flex flex-col h-screen w-full items-center justify-center ">
        <div className="flex w-max bg-white rounded ">
            <table className='border-collapse border-black rounded-md  ' >
                <thead >
                    <tr>
                        <th className='border-collapse border-2 py-2 px-3  ' >Name</th>
                        <th className='border-collapse border-2 py-2 px-3  '>Email</th>
                        <th className='border-collapse border-2 py-2 px-3  '>Age</th>
                        <th className='border-collapse border-2 py-2 px-3  ' colSpan={2} >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>{
                        return(
                            <>
                            <tr key={index}>
                        <td className='border-collapse border-2 py-2 font-semibold px-3  ' >{user.name}</td>
                        <td className='border-collapse border-2 py-2 font-semibold px-3  '>{user.email} </td>
                        <td className='border-collapse border-2 py-2 font-semibold px-3  '> {user.age}</td>
                        <td className='border-collapse border-2 py-2 font-semibold px-3   ' colSpan={2}>
                            <Link to={`/updateUser/${user._id}`} >
                            <button className='bg-green-500 px-3 font-semibold py-1 mr-1 rounded ' >Update</button>
                            </Link>
                            <Link  className='bg-orange-500 px-3 font-semibold py-1 rounded ml-1 ' >
                            <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </Link>
                        </td>
                    </tr>
                            </>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
        <Link to='/createUser' className='bg-blue-700 mt-3 px-10 py-2 text-3xl rounded-md text-white
        font-bold hover:bg-blue-800 ' >Add User  </Link>
    </div>
    </>
  )
}

export default User