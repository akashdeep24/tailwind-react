import React, { useState } from 'react'

function Assignees({assigneeArray}) {
  const [showAll, setShowAll] = useState(false)
  return (
    <div className=''>
    <button className="flex" onClick={()=>setShowAll(!showAll)}>
      {assigneeArray.length > 2 ?
      assigneeArray.map((data)=>{
        return(
          <div className='relative'>
              <img src={data.image} className='rounded-full w-6 h-6 mx-1'/>
          </div>
        )
      })
      :assigneeArray.map((data)=>{
        return(
          <div className="flex relative items-center">
              <img src={data.image} className='rounded-full w-6 h-6 mx-1'/>
              <p className='text-xs'>{data.name}</p>
          </div>
        )
      })
  }
        </button>

  {showAll &&
      <button className='absolute z-50 bg-gray-300 w-48' onClick={()=>setShowAll(!showAll)}>
        {assigneeArray.map((data)=>{
          return(
            <div className="flex">
              <img src={data.image} className='rounded-full w-6 h-6'/>
              <p className='text-xs'>{data.name}</p>
            </div>
          )
        })}
      </button>
  }

    </div>
  )
}

export default Assignees