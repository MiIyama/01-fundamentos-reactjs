import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/44329442?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ingrid Naomi</strong>{" "}
              <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1 h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button title="Deletar comentário">
            <ThumbsUp size={20} />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
