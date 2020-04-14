import React from "react";
import {
  Button,
  Drawer,
} from "@blueprintjs/core";

function handleClick(){
    console.log("Hello XD")
    return <Drawer title="Hello" isOpen={true}/>
}

const PopverExample = () => {
  return (
    <div className="bp3-dark">
      <Button className="" text="Hello World" onClick={handleClick} />
    </div>
  );
};
export default PopverExample;
