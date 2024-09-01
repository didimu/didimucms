import React, { useState } from 'react'

const MoviePage = () => { 
  const [itme, setItem] = useState(1);
  const addItem = () => setItem(itme + 1);
  const minusItem = () => setItem(itme - 1);
  return (
    <div className='ctn_sample_wrap'> 
         <h1>number{itme}</h1>
         <button onClick={addItem}>add</button>
         <button onClick={minusItem}>minus</button>
         <p>2024.08.28</p>
         <p>2024.09.01</p>
         <p>2024.09.01또 수저ㅗㅇ</p>
    </div>
  )
}

export default MoviePage