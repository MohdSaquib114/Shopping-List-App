import React from 'react'

const ShoppingList = ({shoppingList,setList}) => {
    const onDelete=(data)=>{
        const newList = shoppingList.filter(item=>item!==data)
        setList(newList)
    }
  return (
   <ul>
    {shoppingList.map((data,i)=><List key={data+i} data={data} onDelete={onDelete}/>)}
   </ul>
  )
}

const List =({data,onDelete})=>{
    return <li>
        {data}
        <button onClick={()=>onDelete(data)}>Delete</button>
    </li>
}

export default ShoppingList
