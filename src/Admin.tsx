import Input from "./shared/Input";
import Heading from "./shared/Heading";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./shared/CheckboxList";
import { Food, foodTags } from "./food";
import React, { useState } from "react";

let emptyFood: Food = {
  name: "",
  description: "",
  image: "",
  price: 0,
  tags: [],
};

export default function Admin() {
  const [food, setFood] = useState(emptyFood);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    //React injects the current state value when a function is passed to setState
    setFood((curFood) => ({ ...curFood, [id]: value }));
  }

  return (
    <>
      <Heading children="Admin" level={2} />
      <form>
        <Input
          id="name"
          label="Name"
          className="m-4"
          onChange={handleInputChange}
          value={food.name}
        />
        <Input
          id="description"
          label="Description"
          className="m-4"
          onChange={handleInputChange}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          className="m-4"
          onChange={handleInputChange}
          value={food.price.toString()}
        />
        <Input
          id="image"
          label="Image filename"
          className="m-4"
          onChange={handleInputChange}
          value={food.image}
        />
        <CheckboxList label="Tags">
          {foodTags.map((tag) => (
            <Checkbox
              key={tag}
              id={tag}
              label={tag}
              checked={food.tags.includes(tag)}
              onChange={(event) => {
                setFood((curFood) => {
                  const { checked } = event.target;
                  const tags = checked
                    ? [...curFood.tags, tag]
                    : curFood.tags.filter((t) => t !== tag);
                  return { ...curFood, tags };
                });
              }}
            />
          ))}
        </CheckboxList>
        <Button className="block mt-4 mb-4" type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </>
  );
}
