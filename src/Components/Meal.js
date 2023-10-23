import React,{useState} from 'react';
import Mealiteam from './Mealiteam';

function Meal() {
  const [search,setSearch] = useState("");
  const[Mymeal,setMeal] = useState();
  function searchMeal(){
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4b0faf45dcdc47cca6104f267f52956b&query=${search}`)
    .then(res=>res.json())
    .then(data=>{
      setMeal(data.results)
    })
  }
  return (
    <div className='main'>
        <div className='heading'>
            <h1>Food Recipe App</h1>
        </div>
        <div className='searchBox'>
            <input type='search' className='search-bar'placeholder='Search Food Name...'onChange={(e)=>setSearch(e.target.value)} value={search} onInput={searchMeal}></input>
        </div>
        <div className='container'>
          {
            Mymeal.map((res)=>{
              return(
                <Mealiteam data={res}/>
              )
            })
          }
  
        </div>

    </div>
  )
}

export default Meal;