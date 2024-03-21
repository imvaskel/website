/* eslint-disable react/jsx-no-comment-textnodes -- I'm using // for style, not comments. */

import { Link } from "@/components/link";
import styles from "./styles.module.css";
import { socials } from "@/lib/socials";
import { Nav } from "@/components/nav";
import { readFile } from "fs/promises";
import path from "path";
import { type NextPage } from "next";
import { UserData } from "@/lib/utils";

const About: NextPage<{}> = async () => {
  let extraSocials: Array<UserData> | undefined;
  try {
    extraSocials = JSON.parse(
      await readFile(path.join(process.cwd(), "user.json"), {
        encoding: "utf-8",
      })
    );
  } catch {
    extraSocials = undefined;
  }

  return (
    <main>
      <div className={styles.about}>
        <div>
          <h1>
            <i>/* About */</i>
          </h1>
          <p>
            I'm Vaskel. <strong>(they/them)</strong> Or Skylar, I don't mind
            either of them. I'm a programmer from the United States, studying at
            college for computer science (there's probably a joke to be made
            here). I'm a{" "}
            <strong>
              <i>bit</i>
            </strong>{" "}
            of a fruity person (another joke here probably) but enjoy
            programming. As you can tell, web design is definitely not my
            passion. Other than programming, I dabble in the occasional video
            game (though not much anymore).
          </p>
        </div>
        <div>
          <h1>
            <i>/* About this site */</i>
          </h1>
          <p>
            As you can probably see, this site is custom made. It's made with
            NextJS (react) and good ole css. I'm not much of a web designer, but
            I try my best. For anyone curious, the color scheme is{" "}
            <Link
              href="https://github.com/sainnhe/gruvbox-material"
              title="Gruvbox Material"
            >
              gruvbox material medium
            </Link>{" "}
            (both light and dark). My website is also{" "}
            <Link href="https://github.com/imvaskel/website" title="Source">
              open source!
            </Link>{" "}
            (don't bully my webdev skills please)
          </p>
        </div>

        <div>
          <h1>
            <i>/* Languages */</i>
          </h1>
          <ul>
            <li>Python (my favorite language)</li>
            <li>Rust (when I need performance)</li>
            <li>TS/CSS (React, a bit)</li>
          </ul>
        </div>

        <div>
          <h1>
            <i>/* Contact */</i>
          </h1>
          <p>
            If you would like to contact me, my socials are on the home page,
            but there's also some on this page:
          </p>
          <ul>
            {Object.entries(socials).map(([name, link]) => {
              const social = name.charAt(0).toUpperCase() + name.substring(1);

              return (
                <li key={social}>
                  <Link href={link} title={social} content={social} />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p>
            And some extras: (these are fetched from discord whenever I feel
            like it, may also contain some of the above.)
          </p>
          <ul>
            {extraSocials &&
              extraSocials.map((v) => {
                if (v.visibility !== 1 || v.type === "domain") {
                  return null;
                }
                const social =
                  v.type.charAt(0).toUpperCase() + v.type.substring(1);

                return (
                  <li key={v.type}>
                    <span data-first={true}>{social}:</span>{" "}
                    <span data-second={true}>{v.name}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <Nav />
    </main>
  );
};

export default About;
