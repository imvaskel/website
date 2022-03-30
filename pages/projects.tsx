import { PropsWithChildren, useEffect, useState } from "react";
import { NextPage } from "next";
import { Repository, Card } from "../components/card"
import styles from "../styles/projects.module.css"
import axios from "axios";

const Projects : NextPage = () => {
    const [repos, setRepos]: [Repository[], (posts: Repository[]) => void] = useState([] as Array<Repository>)

    useEffect(() => {
        axios.get<Repository[]>("https://gh-pinned-repos.egoist.sh/?username=ImVaskel").then(res => {
          setRepos(res.data);
        }).catch(err => {
          console.log(err.message);
        });
    }, [])

    return (
        <div className={styles.grid_container}>
            { repos.map(r => <Card repo={r} key={r.repo} />)}
        </div>
    )
}

export default Projects