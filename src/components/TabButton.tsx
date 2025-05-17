import React from 'react'

const TabButton = ({active,selectTab,color,children}:any) => {
    const buttonClasses = active ? `text-white border-b ${color}`:'text-slate-500';
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton