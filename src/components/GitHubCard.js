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

const GitHubCard = (props) => {
  return (
    <div className="col-md-3 p-3 bp3-dark w-50">
      <Card interactive={true} elevation={Elevation.FOUR}>
        <img className="w-100 mx-auto d-block" src={props.image}></img>
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
                    onClick={props.deleteProfile}
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
    </div>
  );
};

export default GitHubCard;
