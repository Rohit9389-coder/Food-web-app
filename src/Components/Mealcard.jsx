import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Mealcard({ detail }) {
  if (!detail || detail.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 text-gray-500">
        Data Not Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {detail.map((curItem) => (
        <div
          key={curItem.idMeal}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={curItem.strMealThumb}
              alt={curItem.strMeal}
              className="w-full h-full object-cover"
            />
            {/* Bottom overlay: hidden by default, shown on hover */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center py-4">
            <NavLink to={`/${curItem.idMeal}`}>
              <button className="mt-2 py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                View Recipe
              </button>
            </NavLink>
              
            </div>
          </div>
          {/* Optional: Keep or remove if duplicate text appears */}
          <div className="p-4 text-center">
            <p className="text-lg font-semibold text-gray-800">{curItem.strMeal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
