import React from "react";
import GitHubCard from "./GitHubCard";

const GitHubCardsList = (props) => {
  return (
    <div className="d-flex container-fluid">
      {props.profiles.map((profile) => (
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
      ))}
    </div>
  );
};

export default GitHubCardsList;
