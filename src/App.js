
import './App.css';
import {Data} from './components/data';
import Products from './components/Products';
import {useState} from 'react'
import Header from './components/Header';

function App() {
  const [item] = useState(Data)
  const [sort, setSort] = useState('')


 const sorting =(e)=>{
const sorting=e.target.value;

const sortRes= item.sort((a,b)=>{
  if(sorting==='all'){
    return a.id>b.id ?  1: -1
  }
  if(sorting==='low'){
    return a.price>b.price ?  1: -1
  }
  if(sorting==='high'){
    return a.price < b.price?  1: -1
  }
})
setSort({
    sort:sorting,
    tshirts: sortRes
})
}

  return (
    <>
    <Header sort={sort} sorting={sorting} />
     <Products items={item} />
    </>
  );
}

export default App;
