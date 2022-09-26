import { foods } from "./food";
import Heading from "./shared/Heading";

export default function Menu() {
  return (
    <div className="flex flex-wrap">
      {foods.map((food) => {
        return (
          <div
            key={food.name}
            className="basis-1/5 p-5 w-full flex-auto text-center m-4 shadow-lg bg-indigo-100 rounded"
          >
            <div className="font-bold mb-6">
              <Heading children={food.name} level={4} />
            </div>
            <img
              className="h-72 w-full object-cover"
              src={"./images/" + food.image}
              alt={food.name}
            />
            <p>{food.description}</p>
            <p className="font-bold bg-indigo-200">${food.price}</p>
          </div>
        );
      })}
    </div>
  );
}
