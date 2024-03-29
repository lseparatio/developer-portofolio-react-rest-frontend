import React from "react";
import styles from "../styles/Avatar.module.css";

function Avatar({ src, height = 30 }) {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src.replace('http://', 'https://')}
        height={height}
        width={height}
        alt="avatar"
      />
    </span>
  );
}

export default Avatar;
