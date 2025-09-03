import React, { useState } from 'react';
import Mealcards from './Mealcard';

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Please Enter Something");
    } else {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await get.json();
      setData(jsonData.meals);
      setMsg("");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r/decreasing from-indigo-500 to-teal-400 py-10 px-4">


      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10
                     text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        FOOD RECIPE APP 🍔
      </h1>


      <div className="flex flex-col items-center mb-8">
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-2">
          <input
            type="text"
            placeholder="Enter Dish"
            onChange={handleInput}
            className="flex-1 px-4 py-2 rounded-full border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <button
            onClick={myFun}
            className="px-6 py-2 mt-2 sm:mt-0 bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 transition duration-300 cursor-pointer"
          >
            Search
          </button>
        </div>
        {msg && (
          <h4 className="text-red-500 mt-3 text-center items-center  font-medium  ">{msg}</h4>
        )}
      </div>


      <div className=" ">
        <Mealcards detail={data} />
      </div>
    </div>
  );
};

export default Mainpage;
