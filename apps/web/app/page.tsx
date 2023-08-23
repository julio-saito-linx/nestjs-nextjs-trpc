import Clientside from "./Clientside";
import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({
    name: "Julio",
    age: 42,
  });
  return (
    <div>
      <p>Server: {response}</p>
      <Clientside />
    </div>
  );
}
