import * as React from "react";
import "../General/General.less";

export const Estimates = () => {
  return (
    <div className="Estimates">
      <div className="Estimates__Content">Odhady nemovitostí</div>
      <div className="Estimates__Heading">Ocením pro Vás tyto nemovitosti</div>
      <p>
        <strong>Pozemky</strong>
      </p>
      <li>
        Stavební (tj. určené územním plánem jako zastavěné či určené k
        zastavění)
      </li>
      <li>Zemědělské (tj. určené dle BPEJ)</li>
      <li>Ostatní (tj. lesní pozemky, vodní plochy)</li>
      <p>
        <strong>Nemovitosti určené k bydlení</strong>
      </p>
      <li>Rodinné domy</li>
      <li>Rekreační objekty – chaty, chalupy</li>
      <li>Byty</li>
      <p>
        <strong>Komerční objekty</strong>
      </p>
      <li>Kanceláře</li>
      <li>Budovy a haly</li>
      <li>Prostory pro výrobu</li>
      <li>Dílny a sklady</li>
    </div>
  );
};
