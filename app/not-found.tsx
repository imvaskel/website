import styles from "./error.module.css";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <div>
        <h1>404</h1>
        <div />
        <a href="/">
            <h1>
                &rarr; Home
            </h1>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
