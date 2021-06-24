import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import AddContact from "./components/AddContact";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const route = () => {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/addcontact" exact component={AddContact} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default route;
