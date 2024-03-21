/* eslint-disable react/jsx-no-comment-textnodes -- I'm using // for style, not comments. */

import { Link } from "@/components/link";
import { Nav } from "@/components/nav";
import { socials } from "@/lib/socials";
import { defaultMetadata } from "@/lib/utils";
import { type Metadata, type NextPage } from "next";
import styles from "./styles.module.css";
import { ExtraSocials } from "./components";

const About: NextPage<{}> = async () => {
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
        <ExtraSocials />
      </div>
      <Nav />
    </main>
  );
};

export default About;
export const generateMetadata = async (): Promise<Metadata> => {
  let base = await defaultMetadata();
  base.title = "About";
  base.description = "About this gay creature.";

  return base;
};
