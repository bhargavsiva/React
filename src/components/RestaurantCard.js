import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} FOR TWO</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
