import { PropsWithChildren, useEffect } from "react";
import { NextPage } from "next";
import { Repository, Card } from "../components/card"
import styles from "../styles/projects.module.css"
import axios from "axios";
 
interface Props {
    repos?: Array<Repository>;
    error?: any;
}

const Projects : NextPage<Props> = ({repos, error}) => {
    if (repos === undefined || error !== undefined) {
        return (
            <div>
                <h1>Repositories failed to load. </h1>
                <p>
                    Details of the error, if applicable: {error.toString()}
                </p>
            </div>
        )
    }

    return (
        <div className={styles.grid_container}>
            { repos.map(r => <Card repo={r} key={r.repo} />)}
        </div>
    )
}

Projects.getInitialProps = async ctx => {
    try {
        const res = await axios.get("https://gh-pinned-repos.egoist.sh/?username=ImVaskel")
        const repos = res.data as Array<Repository>;
        return {
            repos
        }
    }
    catch (error) {
        return { error }
    }
}

export default Projects