import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './components/ui/Heather'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import axios from 'axios'

function App() {
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')
  useEffect(()=>{
    const  fetchItems = async ()=>{
        const result = await axios(
          'https://www.breakingbadapi.com/api/characters?name='+query
        )
        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
    }

    fetchItems()
  },[query])

  return (
    <div className="Container">
     <Header />
     <Search getQuery={(q)=>setQuery(q)}/>
     <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
