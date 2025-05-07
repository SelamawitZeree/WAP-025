(async () => {
    const res = await fetch('https://dummyjson.com/recipes');
    const { recipes } = await res.json();
    recipes.forEach(recipe => console.log(recipe.name));
})();