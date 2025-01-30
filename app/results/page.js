import React from 'react'
import './Results.css'
const Results = () => {
    return (
        <div className='h-screen flex w-full gap-4 pt-20 pb-12 font-makalo text-[#fefefe] flex-col bg-[url("leaderbg.png")] bg-opacity-60 bg-black bg-cover'>
          <div className='list'>
          <p className='game-name'>Tug of War</p>
          <div className='cards'>
            <div>2nd</div>
            <div>1st</div>
            <div>3rd</div>
          </div>
          <p className='game-name'>Cricket</p>
          <div className='cards'>
            <div>2nd</div>
            <div>1st</div>
            <div>3rd</div>
          </div>
      </div>
        </div>
    )
}

export default Results
