import Image from "next/image";
import styles from "./screen.module.css";

export default function Screen() {
  return (
    <main className={styles.main}>
      <div className={styles.screen}>
        <source
          src="../../../../public/videos/mainScreen.mp4"
          type="video/mp4"
        />
      </div>
    </main>
  );
}
