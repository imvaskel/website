import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/globals.module.css";

const Header = styled.h1`
  font-size: 2em;
  padding-bottom: 2%;
`;

const Paragraph = styled.p`
  font-weight: 400;
  padding-bottom: 2%;
  padding-left: 0.5%;
`;

const LI = styled.li`
  padding-bottom: 2%;
  font-weight: 400;
`;

const About: NextPage = () => {
  return (
    <div className={styles.content} style={{ fontSize: "large" }}>
      <Head>
        <title>About</title>
      </Head>

      <Header>About Me</Header>
      <Paragraph>
        I'm not too sure what to put here, but here we go. Hi, I'm Vaskel. I'm a
        bisexual high schooler from the US, I play video games and program. I
        know, so interesting. The best place to contact me is on discord.
        <br />
      </Paragraph>

      <Header>Social Media</Header>
      <Paragraph>You can find my social media in the footer.</Paragraph>

      <Header>Languages</Header>
      <Paragraph>
        These are my most proficient languages ranked from highest to lowest.
      </Paragraph>
      <Paragraph>
        Python: This is my first language and my most liked one.
      </Paragraph>
      <Paragraph>
        Kotlin: This is a language that I know decently well and like to program
        in if it isn't python.
      </Paragraph>
      <Paragraph>
        Rust: I'm learning this one and enjoy it, though I wouldn't say I know
        it well.
      </Paragraph>
      <Paragraph>
        C#/Java: I know both of these enough to manage, though I do not like
        them that much.{" "}
      </Paragraph>
    </div>
  );
};

export default About;
