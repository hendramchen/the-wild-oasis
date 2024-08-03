import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Button from "./ui/Button";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as="h1">The Wild Oasis</Heading>
      <Heading as="h2">Description</Heading>
      <Button>Check in</Button>
    </>
  );
}
