import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
export function App() {
  return (
    <>
      <Header />
      <Post author="Ana" content="Lorem ipsum" />
      <Post author="Bela" content="Lorem ipsum Lorem ipsum" />
      <Post />
      <Post />
      <Post />
    </>
  );
}
