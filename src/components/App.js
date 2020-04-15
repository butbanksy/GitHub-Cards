import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import GitHubCardsList from "./GitHubCardsList";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";

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

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {
  
    if (!profiles.map(x=>x.id).includes(profileData.id)) {
      setProfiles((profiles) => [...profiles, profileData]);
    } else {
      store.addNotification({
        ...notification,
        title: "Warning",
        message: "This card already exists.",
        type: "warning",
      });
    }
  };
  const deleteProfile = (id) =>
    setProfiles(profiles.filter((item) => item.id !== id));
  return (
    <React.Fragment>
      <ReactNotification />
      <NavigationBar addNewProfile={addNewProfile} />
      {/* <GitHubCard /> */}
      <div className="container" id="cardsList" style={{ margin: 50}}>
      <GitHubCardsList profiles={profiles} deleteProfile={deleteProfile} />
      </div>
    </React.Fragment>
  );
};

export default App;
