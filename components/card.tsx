import { PropsWithChildren } from "react";
import { FaRegStar } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri"
import styled from "styled-components";
import styles from "./card.module.css"

export interface Repository {
    owner: string;
    repo: string;
    link: string;
    image: string;
    language: string;
    languageColor: string;
    stars: string;
    forks: number;
    description?: string;
}

const RepoLangColor = styled.span<{ color: string }>`
    width: 16px;
    height: 16px;
    border: 1px;
    border-radius: 50%;
    border-width: 1px;
    border-color: ${props => props.color};
    background-color: ${props => props.color};
    margin-left: 10px;
`

export const Card = ({ repo }: PropsWithChildren<{ repo: Repository }>) => {
    return (
        <div className={styles.card_container}>
            <header className={styles.card_header}>
                <RiGitRepositoryLine />
                <a href={repo.link}> <h2>{repo.repo}</h2> </a>
            </header>

            <p>{repo.description}</p>

            <footer className={styles.card_footer}>
                <RepoLangColor color={repo.languageColor} /> <p>{repo.language}</p>
                <FaRegStar
                    style={{
                        paddingLeft: "5px",
                        width: "16px",
                        height: "16px",
                    }}
                />
                <p>{repo.stars}</p>
            </footer>
        </div>
    )
}

