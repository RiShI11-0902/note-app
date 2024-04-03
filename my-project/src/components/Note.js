import React, { useState } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import { IoMdDoneAll } from "react-icons/io";
export default function Note({id,text,date,handleDeleteNote}) {

  const [completed, setCompleted] = useState(false)

  return (
    <div className='Note mt-3 border-2 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) p-4 md:p-1 bg-white shadow-md shadow-slate-500 rounded-3xl w-60'>
        <p className='text-left  text-xl font-semibold'>{text}</p>
        <div className="note-footer flex flex-row items-center text-xl font-semibold mt-10 justify-between">
            <small>{date}</small>
            <p className={`${completed ? "text-green-600" : "text-red-700"} cursor-pointer`} onClick={()=>setCompleted(!completed)}><IoMdDoneAll/></p>
            <MdDeleteForever className='cursor-pointer' onClick={ ()=> `${completed ? handleDeleteNote(id) : alert("Complete the task first")}` } />
        </div>
    </div>
  )
}
