import * as React from "react";
import "./General.less";

export const General = () => {
  return (
    <div className="General">
      <div className="General__Content General__Content__OneParag">
        Ing. Natálie Jurdová - Odhadce nemovitostí
        <div className="General__Heading">Kdy mě budete potřebovat?</div>
        <li>Chcete prodat Vaši nemovitost bez realitní kanceláře?</li>
        <li>Řešíte dědictví, dotace, nebo chcete nějakou nemovitost koupit?</li>
        <li>Zajímá Vás, jakou hodnotu má Váš majetek?</li>
      </div>
      <div className="General__Content General__Content__TwoParag">
        <div className="General__Heading">
          V oboru odhadů nemovitostí Vám mohu poskytnout tyto služby:
        </div>
        <li>
          <u>
            <strong>Tržní odhad:</strong>
          </u>
        </li>
        <p>
          Díky odhadu ceny nemovitosti budete vědět, za jakou částku by bylo
          možné k datu ocenění daný a v daném místě a čase majetek kopit nebo
          prodat. Tržní odhad využijete při prodeji bez realitní kanceláře, při
          žádostech o dotace, při dědickém řízení nebo pokud budete mít zájem
          zjistit, jakou hodnotu má Vaše nemovitost.
        </p>
        <li>
          <u>
            <strong>Stanovení zjištěné ceny</strong>
          </u>
        </li>
        <p>
          Cenu zjištěnou budete potřebovat pro daň z převodu nemovitosti, daň
          darovací, pro dědické řízení nebo například pro potřeby rozvodového
          řízení.
        </p>
        <li>
          <u>
            <strong>Stanovení výše nájemného:</strong>
          </u>
        </li>
        <p>
          Chcete začít pronajímat nemovitost a nevíte, jak vysoké nájemné
          stanovit? Obraťte se na mě a vypočítám pro Vás výši nájemného daného
          objektu. Samozřejmostí je také stanovení výnosové hodnoty dané
          nemovitosti.
        </p>
      </div>
      {/* <div className="General__Content General__Content__ThreeParag">
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
      </div> */}
    </div>
  );
};
