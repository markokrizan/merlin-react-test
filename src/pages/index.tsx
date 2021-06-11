import Head from "next/head";

import KanbanBoard from "../components/KanbanBoard/KanbanBoard";

import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import useKanban from "../hooks/useKanban/useKanban";

export default function Home() {
  const kanban = useKanban();

  return (
    <div className={styles.container}>
      <Head>
        <title>Merlin - Kanban Code Test</title>
        <meta name="description" content="React code test for Merlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar>
        <h1>Merlin - Kanban Code Test</h1>
      </Navbar>

      <div className={styles["scroll-container"]}>
        <div className={styles.centered}>
          <KanbanBoard {...kanban} />
        </div>
      </div>

      <div id="portal"></div>
    </div>
  );
}
