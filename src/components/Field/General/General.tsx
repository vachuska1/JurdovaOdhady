import * as React from "react";
import "./General.less";

export const General = () => {
  return (
    <div className="General">
      <div className="General__Content General__Content__OneParag">
        Oceňování nemovitostí
        <li>
          Prodáváte svou nemovitost vlastními silami bez realitní kanceláře?
        </li>
        <li>Hledáte odhadce nemovitostí?</li>
        <li>Řešíte dědictví, dotace, prodej či chcete koupit nemovitost?</li>
        <li>Zajímá Vás hodnota Vašeho majetku?</li>
        <li>
          Potřebujete stanovit tržní hodnotu svého rodinného domu, bytu či
          pozemku?
        </li>
      </div>
      <div className="General__Content General__Content__TwoParag">
        V oboru odhadů nemovitostí Vám mohu poskytnout tyto služby:
        <li>
          <u>
            <strong>Tržní odhad:</strong>
          </u>
        </li>
        <p>
          <strong>Tržní hodnota</strong> je odhadnutá částka, za kterou by bylo
          možné k datu ocenění majetek koupit nebo prodat v daném čase a místě.
          Zkrátka za kolik by se byt, rodinný dům, pozemek a další nemovitosti
          prodaly/koupily. Tento odhad nemovitosti se využívá při prodeji
          <strong>
            {" "}
            bez realitní kanceláře, při žádosti o různé dotační tituly, při
            dědickém řízení anebo jen při informativním odhadu nemovitosti pro
            majitele dané nemovitosti.
          </strong>
        </p>
        <li>
          <u>
            <strong>Směrná hodnota:</strong>
          </u>
        </li>
        <p>
          Potřebujete vyplnit{" "}
          <strong>daňové přiznání z nabytí nemovitých věcí?</strong> Nevíte si
          rady? Vypočítám Vám směrnou hodnotu nemovitosti, na kterou{" "}
          <strong> finanční úřad nepotřebuje znalecký posudek.</strong>
        </p>
        <li>
          <u>
            <strong>Znalecký posudek:</strong>
          </u>
        </li>
        <p>
          Spolu se soudními znalci pro Vás vypracujeme{" "}
          <strong>
            posudek ceny obvyklé (tj. tržní) i zjištěné (tj. administrativní)
            pro jakýkoliv účel.
          </strong>
        </p>
        <li>
          <u>
            <strong>Stanovení výše nájemného:</strong>
          </u>
        </li>
        <p>
          Vlastníte nemovitost a nevíte, jak stanovit výši nájmu? V případě
          potřeby pro{" "}
          <strong>
            Vás mohu vypočítat nájem daného objektu nebo výnosovou hodnotu spolu
            s čistými příjmy za rok.
          </strong>
        </p>
      </div>
      <div className="General__Content General__Content__ThreeParag">
        Příklady oceňovaných nemovitostí
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
          <strong>Nemovitosti určené k bydlení (rezidenční)</strong>
        </p>
        <li>Rodinné domy</li>
        <li>Rekreační objekty – chaty, chalupy</li>
        <li>Byty</li>
        <p>
          <strong>Komerční objekty</strong>
        </p>
        <li>Kanceláře</li>
        <li>Restaurace</li>
        <li>Prostory pro výrobu</li>
        <li>Dílny a sklady</li>
        <p>
          <strong>Ostatní</strong>
        </p>
        <li>Rybníky</li>
        <li>Garáže</li>
        <li>Inženýrské stavby</li>
      </div>
    </div>
  );
};
