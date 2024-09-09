import React, { ReactNode } from 'react'

function Templete({children}: {children:React.ReactNode}) {
  return (
    <div>
      <div id="1" className='min-h-screen bg-neutral-950 z-20 fixed top-0 left-0 w-full'></div>
      {children}
    </div>
  )
}

export default Templete
