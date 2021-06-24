import "./App.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/addcontact" exact component={AddContact} />
          <Route path="/EditContact" exact component={EditContact} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
