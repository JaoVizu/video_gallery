import React from 'react'

const Search = () => {

  const onSubmitForm = (event) => {
    event.preventDefault();
  }

  return(
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmitForm} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-purple-400 py-2">
          <input 
            type="text"
            placeholder="Dogs" 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/
          >
          <button 
            className="bg-purple-400 hover:bg-purple-700 border-purple-400 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit">
            Search
          </button>
        </div>
        
          
      </form>
    </div>
  )
}

export default Search