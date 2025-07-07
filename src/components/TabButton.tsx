import React from 'react'

const TabButton = ({id,active,selectTab,color,children}:{id:string,active:boolean,selectTab: (id: string) => void,color:string,children:React.ReactNode}) => {
    const buttonClasses = active ? `text-white border-b ${color}`:'text-slate-500';
  return (
    <button onClick={()=>selectTab(id)}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton