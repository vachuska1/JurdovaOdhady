import * as React from "react";
import "./Header.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Head">
      <div className="Header">
        <NavLink to="/" activeClassName="Header__Name--active">
          <div className="Header__Name">
            Ing. Natálie Jurdová <br />
            Odhady nemovitostí
          </div>
        </NavLink>
        <div className="Header__Menu">
          <NavLink to="/Kvalifikace" activeClassName="Header__ItemOne--active">
            <div className="Header__ItemOne">Kvalifikace</div>
          </NavLink>
          <NavLink to="/Odhady" activeClassName="Header__ItemTwo--active">
            <div className="Header__ItemTwo">Odhady nemovitostí</div>
          </NavLink>
          <NavLink
            to="/DalsiCinnost"
            activeClassName="Header__ItemThree--active"
          >
            <div className="Header__ItemThree">Další činnost</div>
          </NavLink>
          <NavLink to="/Kontakt" activeClassName="Header__ItemFour--active">
            <div className="Header__ItemFour">Kontakt</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
