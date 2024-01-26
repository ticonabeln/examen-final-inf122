import Image from "next/image";
import styles from "./page.module.css";
import pokemon from "./components/foto";

export default function pokemon() {
  return (
    <div className={styles.main}>
      <pokemon/>
      <pokemon/>
      <pokemon/>
      <pokemon/>
    </div>
  );
}