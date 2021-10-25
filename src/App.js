
import './App.css';
import {TShirts,Shirts,Shoes} from './components/data';
import Products from './components/Products';
import {useState} from 'react'
import Header from './components/Header';

function App() {
  const [tshirts] = useState(TShirts)
  const [shirts] = useState(Shirts)
  const [shoes] = useState(Shoes)
  const [sort, setSort] = useState('')


 const sorting =(e)=>{
const sorting=e.target.value;

const sortRes= tshirts.sort((a,b)=>{
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
     <Products tshirts={tshirts} shirts={shirts} shoes={shoes} />
    </>
  );
}

export default App;
