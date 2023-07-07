import React from 'react'

const ResultData = ({searchData,shoppingList,setList,setSearchResult,setValue}) => {
   
    console.log(searchData)
  return (
    <li>
      {searchData}
      <button onClick={()=>{setList([...shoppingList,searchData])
      setSearchResult([]);
      setValue('')}}>Add</button>
    </li>
  )
}

export default ResultData
