import React from "react";
import GitHubCard from "./GitHubCard";
import { Animated } from "react-animated-css";

const GitHubCardsList = (props) => {

  return (
    <div className="p-4">
      {props.profiles.map((profile) => (
        <Animated
        key={profile.id}
          animationIn="rollIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <GitHubCard
            key={profile.id}
            id={profile.id}
            name={profile.name}
            bio={profile.bio}
            image={profile.avatar_url}
            login={profile.login}
            url={profile.html_url}
            deleteProfile={props.deleteProfile}
          />
        </Animated>
      ))}
    </div>
  );
};

export default GitHubCardsList;

//   <div>
//     {props.profiles.map((profile) => (
//       <GitHubCard
//         key={profile.id}
//         name={profile.name}
//         bio={profile.bio}
//         picture={profile.avatar_url}
//       />
//     ))}
//   </div>
