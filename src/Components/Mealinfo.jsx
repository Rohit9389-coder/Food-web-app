import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Mealinfo() {
  const { mealid } = useParams(); // Pulls `mealid` from the URL parameter
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const data = await response.json();
        setInfo(data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal info:", error);
      }
    };

    if (mealid) getInfo();
  }, [mealid]);

  if (!info) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Data Not Found
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto my-8 bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={info.strMealThumb}
        alt={info.strMeal}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {info.strMeal}
        </h1>
         <h1 class="text-black text-2xl font-bold">RECIPE DETAILS</h1><br></br>
          <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 text-center rounded-lg cursor-pointer">
          {info.strMeal}
</button><br></br><br></br>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Instructions</h3>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {info.strInstructions}
        </p>
      </div>
    </div>
  );
}
