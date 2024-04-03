import React from 'react'

const Search = ({handleSearchNote}) => {
  return (
    <div className='mx-auto'><input onChange={(event)=>handleSearchNote(event.target.value)} id="inputbox" type="text" placeholder="Search Your Note"
    className=" bg-white placeholder:text-purple-600 placeholder:font-bold placeholder:relative placeholder:left-4 border-2 border-blue-400 lg:w-[38rem] md:w-[35rem] w-60 p-2  rounded-full -mt-11 indent-7 focus:placeholder:text-white focus:outline-white shadow-2xl shadow-blue-300 mx-auto" /></div>
  )
}

export default Search