import { foods } from "./food";
export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">React Restaurant</h1>
      <div className="flex flex-wrap">
        {foods.map((food) => {
          return (
            <div className="basis-1/4 p-5 text-center m-5 shadow-lg bg-indigo-100 max-w-sm rounded">
              <h2 className="p-4 font-bold underline"> {food.name}</h2>
              <img
                className="h-52"
                src={"./images/" + food.image}
                alt={food.name}
              />
              <p>{food.description}</p>
              <p className="font-bold">${food.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
