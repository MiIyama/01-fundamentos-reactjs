import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  // const hasBorder = props.hasBorder != false; usou desestruturação na props no lugar desse

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
}
