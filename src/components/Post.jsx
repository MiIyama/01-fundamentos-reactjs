import styles from "./Post.module.css";

export function Post(props) {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              src="https://avatars.githubusercontent.com/u/44329442?v=4"
            />
            <div className={styles.authorInfo}>
              <strong>Ingrid Naomi</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galera</p>
          <p>Blanditiis odit ipsum similique illo noex quo beatae nulla?</p>
          <p>Officiis, totam debitis quae aperiam dote dele</p>
          <p>
            <a href="">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rockeatseat</a>{' '}
          </p>
        </div>
      </article>
    </>
  );
}
