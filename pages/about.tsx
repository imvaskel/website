import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/layout";
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
    <Layout>
      <div className={styles.content} style={{ fontSize: "large", flexGrow: 1 }}>
        <Head>
          <title>About</title>
        </Head>
        <Header>About Me</Header>
        <Paragraph>
          Hi, I'm Vaskel. I go by he/him but I'm not bothered by they/them either. (and no, I do not care how my name is
          pronounced as long as it's somewhat correct sounding)
          <br /> <br/>
          I'm one of those gay creatures from the US (and not one of the good states sadly). I "program", but mostly hang
          around and talk to friends and play some video games, feel free to dm me on discord and I may reply (i'm anxious so might not)
        </Paragraph>

        <Header>Hobbies or something, idk</Header>
        <ul>
          <LI>Video Games. I may not be that good but I can have a fun time fucking around.</LI>
          <LI>"Programming". I program occasionally, but I'm creatively void and usually don't program for long periods of time.</LI>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
