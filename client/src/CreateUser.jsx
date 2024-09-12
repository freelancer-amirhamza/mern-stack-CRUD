import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await axios.post("http://localhost:4000/createUser", {name, email, age})
        .then(()=> navigate("/"))
        .catch((err)=> console.log(err))
        }
    
  return (
    <>
    <div className="flex w-full h-screen bg-slate-700 items-center justify-center ">
        <div className="w-max h-auto bg-slate-200 border-collapse border-2 border-slate-800 rounded-md  items-center justify-center flex flex-col ">
            <form action="" className='p-3 rounded-md flex flex-col items-center justify-center w-full h-full '>
                <div className="flex flex-col gap-2 border-collapse border-black p-3 ">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 border-collapse border-black p-3 ">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className=" flex flex-col gap-2 border-collapse border-black p-3">
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit} type="submit" className='font-semibold bg-blue-600 text-white px-3 py-1 rounded m-3 '>Create User</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default CreateUser