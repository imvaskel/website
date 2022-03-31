import Error from "next/error";
import styles from "../styles/errors.module.css";

export default function NotFound() {
  return (
    <div className={styles.error_404}>
      <Error statusCode={404} />
    </div>
  );
}
