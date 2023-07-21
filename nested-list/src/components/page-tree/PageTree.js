import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/DataFile'



export const PageTree = ({item}) => {
const [isToggleDown, setIsToggleDown] = useState(true)
 console.log('item', item)
  return <>
  <div>


{ item.hasOwnProperty('children') ? 
    return <> 
    <li style={{listStyleType : "none"}}>
        <span key={`${item.id}-${item.name}`} onClick={() => setIsToggleDown(!isToggleDown)}>
          {isToggleDown ? "▼"  : "▶"}
        </span> {item.name}
    </li>
    {isToggleDown ? <ul key={`${item.id}-${item.name}`} >
      {item.children.length > 0 && item.children.map(child => <li>{child.name}</li>)}
      </ul> : ""}
    
   : return <li>{item.name}</li>
  }

  </div>
  </>
 
}

export const PageTreeParent = () => {
  const [list, setList] = useState([]);
const [isToggleDown, setIsToggleDown] = useState(true)

  useEffect(() => {
   fetchData()
   .then((res) => {
     console.log(res)
     setList([...res])
   })
   .catch((err) => console.log(err))
  }, [])
  
 return <>
 {
   list.map(item => <PageTree item={item}/>)
 }
 
 </>
}