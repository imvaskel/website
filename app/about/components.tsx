"use client";

import { UserData } from "@/lib/utils";
import { useEffect, useState } from "react";

const getSocials = async (): Promise<Array<UserData>> => {
  const res = await fetch("/api/socials");
  const json = await res.json();
  return json;
};

export const ExtraSocials = () => {
  const [extraSocials, setExtraSocials] = useState<Array<UserData>>([]);

  useEffect(() => {
    getSocials()
      .then((val) => setExtraSocials(val));
  }, []);

  if (extraSocials.length === 0) {
    return null;
  }

  return (
    <div>
      <p>
        And some extras: (these are fetched from discord whenever I feel like
        it, may also contain some of the above.)
      </p>
      <ul>
        {extraSocials.map((v) => {
          const social = v.type.charAt(0).toUpperCase() + v.type.substring(1);

          return (
            <li key={v.type}>
              <span data-first={true}>{social}:</span>{" "}
              <span data-second={true}>{v.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
