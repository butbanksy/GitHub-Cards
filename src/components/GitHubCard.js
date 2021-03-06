import React from "react";
import {
  Card,
  Button,
  Elevation,
  Popover,
  Menu,
  Position,
  MenuItem,
  MenuDivider,
} from "@blueprintjs/core";
import { Animated } from "react-animated-css";


const GitHubCard = (props) => {
  return (
    <div
      className="col-md-3 p-3 bp3-dark w-50"
      style={{ width: "100%", height: "100%" }}
    >
       <Animated
          key={props.id}
          animationIn="bounceInRight"
          animationOut="fadeOut"
          isVisible={true}
        >
      <Card className="bounceInRight" interactive={true} elevation={Elevation.FOUR}>
        <img
          className="w-100 mx-auto d-block bp3-skeleton"
          tabIndex="-1"
          src={props.image}
        ></img>
        <h5 className="text-center p-3">
          <a target="_blank" href={props.url}>
            {props.name == null ? props.login : props.name}
          </a>
        </h5>
        <p className="text-justify">
          {props.bio == null ? "This user has no bio." : props.bio}
        </p>
        <div className="text-center">
          <Popover
            content={
              <Menu>
                <MenuItem
                  icon="person"
                  text="Open profile in GitHub"
                  target="_blank"
                  href={props.url}
                />
                <MenuItem
                  icon="git-repo"
                  text="See repositories"
                  target="_blank"
                  href={`${props.url + "?tab=repositories"}`}
                />
                <MenuDivider />
                <MenuItem icon="cog" text="Settings...">
                  <MenuItem
                    icon="remove"
                    text="Remove card"
                    onClick={() => props.deleteProfile(props.id)}
                  />
                </MenuItem>
              </Menu>
            }
            position={Position.RIGHT_BOTTOM}
          >
            <Button icon="share" text="Options" />
          </Popover>
        </div>
      </Card>
      </Animated>
    </div>
  );
};

export default GitHubCard;
