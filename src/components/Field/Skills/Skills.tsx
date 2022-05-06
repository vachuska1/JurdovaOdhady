import * as React from "react";
import "../General/General.less";

export const Skills = () => {
  return (
    <div className="Skills">
      <div className="Skills__Content">Kvalifikace</div>
      <li>
        {" "}
        <a href="./src/images/resources/DIPLOM.pdf" target="_blank">
          Vysokoškolské vzdělání v oboru „Pozemkové úpravy a převody
          nemovitostí“ na Jihočeské univerzitě v Českých Budějovicích{" "}
        </a>
      </li>
      <li>
        {" "}
        <a href="./src/images/resources/KURZ.pdf" target="_blank">
          Osvědčení „Oceňování nemovitostí“
        </a>
      </li>
      <li>
        {" "}
        <a target="_blank" href="./src/images/resources/ZIVNOST.pdf">
          Živnostenské oprávnění
        </a>
      </li>
    </div>
  );
};
