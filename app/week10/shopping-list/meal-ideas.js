"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}

export default function Page({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const randomMealsIdeas = await fetchMealIdeas(ingredient);
        setMeals(randomMealsIdeas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <main>
            <h1>Meal Ideas! For {ingredient}</h1>
    <ul>
        {meals.map((meal) => (
        <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
    </ul>
        </main>
    )

}