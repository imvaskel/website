import { PropsWithChildren, useEffect, useState } from "react";
import { NextPage } from "next";
import { Repository, Card } from "../components/card";
import styles from "../styles/projects.module.css";
import axios from "axios";
import { motion } from "framer-motion";
import Layout from "../components/layout";

const containerVariant = {
  visible: {
    transition: {
      when: "beforeChildren",
      delayChildren: 0,
      staggerChildren: 0.5,
    }
  }
}

const Spinner = () => {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.loading_spinner}>

      </div>
    </div>
  )
}

const Projects: NextPage = () => {
  const [repos, setRepos] =
    useState([] as Array<Repository>);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://gh-pinned-repos.egoist.dev/?username=ImVaskel")
      .then((res) => {
        if (res.data.length !== 0) {
          setRepos(res.data)
        }
        else {
          setErr("API did not return anything.")
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setErr(err)
        setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    return <Spinner />
  }

  if (err) {
    return (
      <Layout>
        <div className={styles.error_container}>
          <h1>An Error Occurred:</h1>
          <p>{err || "API did not return anything."}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
       <motion.ul
        className={styles.grid_container}
        variants={containerVariant}
        initial="hidden"
        animate={repos.length > 0 && "visible"}
      >
        {repos.map((r) => (
          <Card repo={r} key={r.repo} />
        ))}
      </motion.ul>
    </Layout>
  );
};

export default Projects;
