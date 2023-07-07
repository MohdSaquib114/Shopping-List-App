import React from 'react'
import ResultData from './resultData'

const SearchResult = ({searchData,shoppingList, setList,setSearchResult,setValue}) => {
  return (
    <ul>
     { searchData.map(data=><ResultData key={data} shoppingList={shoppingList} setList={setList} searchData={data} setSearchResult={setSearchResult} setValue={setValue}/>)}
    </ul>
  )
}

export default SearchResult
