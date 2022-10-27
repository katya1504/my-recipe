
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import  image  from './vegetables.jpg';
import  icon  from './icon.png';

function App() {


  const MY_ID = '774737fc';
  const MY_KEY = '1303efdabe97470851d78f971c47acca';

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('vegetables');
  
  useEffect(() =>{
    const fetchData = async() =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();  
    setMyRecipes(data.hits)
    }
    fetchData()
      },[wordSubmitted])
    


  const myRecipeSearch =(e)=>{
setMySearch(e.target.value)
  }

  const finalSearch = (e) =>{
    e.preventDefault();
    setWordSubmitted(mySearch);
  }


  return (
    <div className="App" >

    <div className='container'>
<img src={image} alt='spices' className='spices'></img>
   <div>
  <h1>Recipes for every day</h1>
  </div>

  <div className='container'>
  <div className='container__link'>
<form onSubmit={finalSearch}>
  <h3>Поиск</h3>
  <input className='search' placeholder='Поиск...' onChange={myRecipeSearch} value={mySearch}>
  </input>
  <button><img src={icon} alt='icon' width='60px'></img></button>
  </form>
</div>
</div>

<div>
{myRecipes.map((element,index)=> (
  <Recipe key={index} label={element.recipe.label}
  image={element.recipe.image}
  ingredients={element.recipe.ingredientLines}
  cuisineType={element.recipe.cuisineType}
  mealType={element.recipe.mealType}/>
))} 

</div>
</div>
</div>
  );
}

export default App;
