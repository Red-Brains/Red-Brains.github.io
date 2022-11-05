import { useState } from 'react'
function App() {

  return (<div>
    {/* <h1 className='text-3xl'>Hello from Red Brains</h1>
    <h2 className='font-semibold text-xl'>Learn, Explore, Grow</h2> */}
    <div className='text-center mx-auto rounded-3xl backdrop-blur-3xl container mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 py-10 drop-shadow-md'>
      <h2 className='text-3xl tracking-tight'>Hello, From&nbsp;
        <span className='text-5xl	ml-1 font-bold text-white tracking-normal hover:tracking-wide transition-all duration-300 ease-in'>
          Red Brains.</span></h2>
      <button className='bg-slate-500 mt-10 py-2 px-5 rounded-full hover:bg-slate-300 ease-out duration-300 delay-150 hover:translate-y-0 translate-y-2 tracking-normal hover:tracking-wider transition-all '>Support Us</button>
    </div>
  </div>)
}

export default App