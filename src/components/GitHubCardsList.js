import React from "react";
import GitHubCard from "./GitHubCard";

const GitHubCardsList = (props) => {

  const a = [1, 2, 3, 4] ;


  return (
    <div className="p-4">
      {props.profiles.map((profile) => (
        <GitHubCard
          key={profile.id}
          name={profile.name}
          bio={profile.bio}
          image={profile.avatar_url}
          login={profile.login}
          url={profile.html_url}
          deleteProfile={props.deleteProfile}
        />
      ))}
      ;
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
