import DrinksProducts from "./DrinksProducts";
import FoodProducts from "./FoodProducts";

export default function Shop() {
  return (
    <div className="row justify-content-center">
      <DrinksProducts />
      <hr className="dividing-border"></hr>
      <FoodProducts />
    </div>
  );
}
