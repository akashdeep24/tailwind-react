import React from 'react'
import List from '../assets/List.svg';
import Grid from '../assets/Grid.svg';
function SubNav() {
  return (
    <div className="flex items-center justify-start">
        <div className='flex mx-4'>
            <p className='text-sm mx-1'>Processes  /</p>
            <p className='text-sm font-semibold underline mb-2'>New UI/UX Task</p>
        </div>
        <div className='flex'>
            <div className='flex'>
                <img src={List} className="pb-3 px-2 inline-block"/>
                <p className='text-sm mb-2'>List</p>
            </div>
            <div className='flex'>
                <img src={Grid} className="pb-3 px-2 inline-block"/>
                <p className='text-sm mb-2'>Board</p>
            </div>
        </div>
    </div>
  )
}

export default SubNav