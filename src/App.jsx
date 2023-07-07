import {useState, useEffect} from 'react'
import SearchResult from './Component/searchResult';
import ShoppingList from './Component/ShoppingList';

const debounce=(cb,time=3000)=>{
  let timeout;
 
  return function(...args){
    
    clearTimeout(timeout);
   timeout=setTimeout(cb(...args),time);
  }

}


const App = () => {
const [inputValue, setValue]= useState('');
const [searchResult, setSearchResult]= useState([])
const [shoppingList, setList]=useState([])
const dataFetch= async (value)=>{
  if(value==='') return
  try{const res = await fetch(`https://api.frontendeval.com/fake/food/${value}`)
  const data = await res.json()
  setSearchResult(data)
}
  catch(err){
    console.log(err.message)
  }
 
}

const debounceFunc =debounce(function(){dataFetch(inputValue)},5000)
useEffect(()=>{

debounceFunc(inputValue)

},[inputValue])



  return (
    <main>
      <input type="text" value={inputValue} onChange={(e)=>setValue(e.target.value)} placeholder='Type something like milk'></input>
      <SearchResult searchData={searchResult} shoppingList={shoppingList} setList={setList} setSearchResult={setSearchResult} setValue={setValue}/>
      <ShoppingList shoppingList={shoppingList} setList={setList}/>
    </main>
  )
}

export default App
