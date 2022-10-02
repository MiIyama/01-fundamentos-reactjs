import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ86kDhi2KH9HPN3Dk1fh0Kwbh2POfiYtMZw&usqp=CAU"></img>

      <div className={styles.profile}>
        <strong>Naomi Iyama</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
