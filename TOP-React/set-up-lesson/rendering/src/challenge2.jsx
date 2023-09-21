import { recipes } from "./recipes";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => 
        <div key={recipe.id}>
          <h2>{recipe.name}
          <ul>
            {recipe.ingredients.map(ingredient => 
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
          </h2>
        </div>
      )}
    </div>
  );
}