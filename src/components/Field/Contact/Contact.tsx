import * as React from "react";
import "./Contact.less";
import { MapWindow } from "./MapWindow/MapWindow";

export const Contact = () => {
  return (
    <>
      <div className="Contact">Kontakt</div>
      <div className="Contact__ContentCont">
        <img
          className="Contact__Logo Contact__Logo1"
          src="./src/images/icons/User.svg"
        />
        <div className="Contact__Item Contact__Item1">Ing. Natálie Jurdová</div>
        <img
          className="Contact__Logo Contact__Logo2"
          src="./src/images/icons/IC.svg"
        />
        <div className="Contact__Item Contact__Item2">14325764 (IČ)</div>
        <img
          className="Contact__Logo Contact__Logo3"
          src="./src/images/icons/Phone.svg"
        />
        <div className="Contact__Item Contact__Item3">+420 727 838 131</div>
        <img
          className="Contact__Logo Contact__Logo4"
          src="./src/images/icons/Email.svg"
        />
        <div className="Contact__Item Contact__Item4">
          info@odhadyjurdova.cz
        </div>
      </div>
      <div className="Contact">Adresa sídla</div>
      <div className="Contact__AdressCont">
        <img
          className="Contact__Logo Contact__Logo5"
          src="./src/images/icons/Street.svg"
        />
        <div className="Contact__Item Contact__Item5">Klučov 78</div>
        <img
          className="Contact__Logo Contact__Logo6"
          src="./src/images/icons/Residence.svg"
        />
        <div className="Contact__Item Contact__Item6">675 52 Klučov</div>
      </div>
      <div className="Contact">Adresa pobočky</div>
      <div className="Contact__AdressCont2">
        <img
          className="Contact__Logo Contact__Logo7"
          src="./src/images/icons/Street.svg"
        />
        <div className="Contact__Item Contact__Item7">Krajinská 244/17</div>
        <img
          className="Contact__Logo Contact__Logo8"
          src="./src/images/icons/Town.svg"
        />
        <div className="Contact__Item Contact__Item8">
          370 01 České Budějovice
        </div>
      </div>
      <MapWindow />
    </>
  );
};
