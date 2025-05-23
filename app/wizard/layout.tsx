import React from 'react'

function layout({children}: { children: React.ReactNode }) {
  return <div className="relative flex flex-col h-screen w-full justify-center">{children}</div>
}

export default layout