import styles from "./Avatar.module.css";
import {ImgHTMLAttributes} from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?:  boolean;
}

export function Avatar({ hasBorder = true,...props }:AvatarProps ) {
  // const hasBorder = props.hasBorder != false; usou desestruturação na props no lugar desse

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
