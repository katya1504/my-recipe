function Recipe ({label, image,ingredients, cuisineType,mealType}){


return(<div>
<div>
<h2>{label}</h2>
</div>
<div>
    <img src={image} alt='meal' className="image" width='300px'></img>
    <h3>{cuisineType}</h3>
    <h3>{mealType}</h3>
</div>

<ul>
    {ingredients.map(ingredient=>(
        <li>{ingredient}</li>
    ))}
</ul>

</div>

)
}

export default Recipe;
