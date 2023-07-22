import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/DataFile'



export const PageTree = ({ item }) => {
  const [isToggleDown, setIsToggleDown] = useState(true)
  console.log('item', item)

  function createPageTree(item) {
    if (item.hasOwnProperty('children')) {
      return <>
        <li style={{ listStyleType: "none" }}>
          <span onClick={() => setIsToggleDown(!isToggleDown)}>
            {isToggleDown ? "▼" : "▶"}
          </span> {item.name}
        </li>

        {isToggleDown ? <ul>{
          item.children.length && item.children.map(child => <>
            <PageTree item={child} />
          </>
          )}</ul> : ""}
      </>
    } else {
      return <li>{item.name}</li>
    }
  }

return <>
  <div>
    {createPageTree(item)}
  </div>
</>
}


export const PageTreeParent = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => {
        console.log(res)
        setList(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return <>
    {
      list.map(item => <PageTree item={item} />)
    }

  </>
}