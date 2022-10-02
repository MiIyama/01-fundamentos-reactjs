import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Ana" content="Lorem ipsum" />
          <Post author="Bela" content="Lorem ipsum Lorem ipsum" />
        </main>
      </div>
    </>
  );
}
