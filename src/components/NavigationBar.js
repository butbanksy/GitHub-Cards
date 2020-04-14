import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Navbar,
  Icon,
  Intent,
  InputGroup,
  Alignment,
} from "@blueprintjs/core";

const NavigationBar = (props) => {

  const [input, setInput] = useState("");


  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = async () => {
    const resp = await axios.get(`https://api.github.com/users/${input}`);
    props.addNewProfile(resp.data);
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
