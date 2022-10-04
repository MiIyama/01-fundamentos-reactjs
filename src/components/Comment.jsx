import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/44329442?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorInfo}>
              <strong>Ingrid Naomi</strong>{" "}
              <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1 h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button title="Deletar comentário">
            <ThumbsUp size={20} />
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
