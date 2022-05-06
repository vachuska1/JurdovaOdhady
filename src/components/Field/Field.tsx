import * as React from "react";
import { Content } from "./Content/Content";
import "./Field.less";
import { Header } from "./Header/Header";
import { Ledge } from "./Ledge/Ledge";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { General } from "./General/General";
import { Skills } from "./Skills/Skills";
import { Estimates } from "./Estimates/Estimates";
import { Other } from "./Other/Other";
import { Contact } from "./Contact/Contact";

export const Field = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="Field">
          <Content />
          <div className="Field__Cont">
            <Switch>
              <Route path="/" exact component={General} />
              <Route path="/Kvalifikace" component={Skills} />
              <Route path="/Odhady" component={Estimates} />
              <Route path="/Cenik" component={Other} />
              <Route path="/Kontakt" component={Contact} />
            </Switch>
          </div>
          <Ledge />
        </div>
      </div>
    </BrowserRouter>
  );
};
