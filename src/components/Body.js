import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State variable - super powerful.
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  /*
Same!!!!
Array Destructuring...
  const arr= useState(resList);
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
*/

  // normal JS variable
  //   let listOfRestaurantsJS = [
  //     {
  //       type: "restaurant",
  //       data: {
  //         id: "74453",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         costForTwo: 40000,
  //         deliveryTime: 45,
  //         avgRating: "4.2",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         id: "74454",
  //         name: "KFC",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Burger"],
  //         costForTwo: 40000,
  //         deliveryTime: 45,
  //         avgRating: "3.8",
  //       },
  //     },
  //   ];
  return (
    <div className="Body">
      <div className="fiter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here.
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
