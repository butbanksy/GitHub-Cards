import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import GitHubCardsList from "./GitHubCardsList";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) =>
    setProfiles((profiles) => [...profiles, profileData]);

  const deleteProfile = (id) =>
    setProfiles(profiles.filter((item) => item.id !== id));
  return (
    <React.Fragment>
      <NavigationBar addNewProfile={addNewProfile} />
      {/* <GitHubCard /> */}

      <GitHubCardsList profiles={profiles} deleteProfile={deleteProfile} />
    </React.Fragment>
  );
};

export default App;
