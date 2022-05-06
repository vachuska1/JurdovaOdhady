import * as React from "react";
import "../General/General.less";

export const Other = () => {
  return (
    <div className="Other">
      <div className="Other__Content">Ceník</div>
      <p>
        Každá nemovitost je jiná, proto je i každý odhad jinak náročný. Přesná
        výše odměny je s klientem vždy sjednána předem a odvíjí se od náročnosti
        zadání, charakteru požadovaného odhadu, od kvality dodaných podkladů a
        také vzdálenosti od mého sídla.
      </p>
      <br />
      <li>
        Byt – <strong>4 000 – 5 000 Kč/odhad</strong>
      </li>
      <li>
        Rodinný dům – <strong>4 500 – 6 500 Kč/odhad</strong>
      </li>
      <li>
        Bytový dům – <strong>8 000 – 11 000 Kč/odhad</strong>
      </li>
      <li>
        Rekreační objekt – <strong>4 500 – 6 500 Kč/odhad</strong>
      </li>
      <li>
        Pozemek – <strong>3 500 – 5 000 Kč/odhad</strong>
      </li>
      <li>
        Kanceláře – <strong>5 000 – 6 500 Kč/odhad</strong>
      </li>
      <br />
      <p>
        Vždy je lepší danou nemovitost před zpracováním odhadu navštívit, aby
        byl odhad co nejpřesnější. Pokud se však s klienty domluvím předem, je
        možné zpracovat i on-line odhad, který by byl levnější.
      </p>
    </div>
  );
};
