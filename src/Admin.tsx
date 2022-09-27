import Input from "./shared/Input";
import Heading from "./shared/Heading";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./CheckboxList";
import { foodTags } from "./food";

export default function Admin() {
  return (
    <>
      <Heading children="Admin" level={2} />
      <form>
        <Input id="name" label="Name" className="m-4" />
        <Input id="description" label="Description" className="m-4" />
        <Input id="Price" label="Price" type="number" className="m-4" />
        <CheckboxList>
          {foodTags.map((tag) => (
            <Checkbox key={tag} id={tag} label={tag} />
          ))}
        </CheckboxList>
        <Button className="block mt-4 mb-4" type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </>
  );
}
