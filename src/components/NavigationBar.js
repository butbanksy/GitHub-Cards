import React, { useState } from "react";
import axios from "axios";
import { Button, Navbar, InputGroup, Alignment } from "@blueprintjs/core";
import { store } from "react-notifications-component";

const NavigationBar = (props) => {
  const [input, setInput] = useState("");

  const notification = {
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  };
  const handleInput = (event) => setInput(event.target.value);

  const handleClick = async () => {
    const resp = await axios
      .get(`https://api.github.com/users/${input}`)
      .catch((err) => {
        if (err.message === "Network Error") {
          store.addNotification({
            ...notification,
            title: "Error",
            message:
              "Can't contact GitHub's API. Make sure you're connected to Internet",
            type: "danger",
          });
        } else {
          store.addNotification({
            title: "Error",
            message: "The username entered does not match any user.",
            type: "danger",
            ...notification,
          });
        }
      });

    if (resp.status == 200) {
      console.log("wassup");
      props.addNewProfile(resp.data);
    }
  };

  return (
    <div className="bp3-dark">
      <Navbar fixedToTop={true} className="bp3-dark container-fluid">
        <Navbar.Group align={"left"}>
          <Navbar.Heading>GitHub Cards</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group className="col-md-3" align={Alignment.CENTER}>
          <InputGroup
            className="bp3-fill"
            onChange={handleInput}
            type="search"
            placeholder="Enter a Github username..."
            leftIcon="search"
            round="true"
            rightElement={
              <Button onClick={handleClick} icon="arrow-right"></Button>
            }
          />
        </Navbar.Group>
        <Navbar.Group align={"right"}></Navbar.Group>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
