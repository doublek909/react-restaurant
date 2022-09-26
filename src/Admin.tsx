import Input from "./shared/Input";
import Heading from "./shared/Heading";
import Button from "./shared/Button";

export default function Admin() {
  return (
    <>
      <Heading children="Admin" level={2} />
      <form>
        <Input id="name" label="Name" />
        <Input id="description" label="description" />
        <Input id="Price" label="price" type="number" />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </>
  );
}
