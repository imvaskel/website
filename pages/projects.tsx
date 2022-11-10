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

const Projects: NextPage = () => {
  const [repos, setRepos] =
    useState([] as Array<Repository>);

  useEffect(() => {
    axios
      .get("https://gh-pinned-repos.egoist.dev/?username=ImVaskel")
      .then((res) => {
        setRepos(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
