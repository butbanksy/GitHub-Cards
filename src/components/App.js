import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import GitHubCard from "./GitHubCard";
import PopoverExample from "./PopoverExample";
import GitHubCardsList from "./GitHubCardsList";

const App = () => {
  const [profiles, setProfiles] = useState([]);



  const addNewProfile = profileData =>
    setProfiles(profiles => [...profiles, profileData]);

  const deleteProfile = (profileData) => {
    profileData = "Mahmoud Rhazzoul"
    console.log(profileData);
    setProfiles(profiles.filter((item) => item.name !== profileData));
  };
  return (
    <React.Fragment>
      <NavigationBar addNewProfile={addNewProfile} />
      {/* <GitHubCard /> */}

      <GitHubCardsList profiles={profiles} deleteProfile={deleteProfile} />
    </React.Fragment>
  );
};

export default App;
