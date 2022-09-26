import Input from "./shared/Input";
import Heading from "./shared/Heading";

export default function Admin() {
  return (
    <>
      <Heading children="Admin" level={2} />
      <form>
        <Input id="name" label="Name" />
      </form>
    </>
  );
}
