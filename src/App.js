import React from "react";
import Profile from "./components/profile/Profile";
import profil from "./components/profile/profile.jpeg";
import HandleAlert from "./components/profile/HandleAlert";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    const styleObject = { color: "blue" };
    const styleObject2 = { color: "red" };
    const imgStyle = { height: "400px", width: "400px" };
    return (
      <div className="container">
        <div className="row" style={styleObject2}>
          <div className="col-md-6 offset-3 mt-5" style={styleObject}>
            <Profile
              bio="I'm in love with JS"
              profession="javaScript software developer"
              name="Ousmane Fall"
            >
              <img style={imgStyle} src={profil} alt="first" />
            </Profile>
            <HandleAlert name="Ousmane Fall" alertMyInput={alertMyInput} />
          </div>
        </div>
      </div>
    );
  }
}

const alertMyInput = (name) => {
  alert(name);
  return (
    <div>
      <HandleAlert name="Ousmane Fall" alertMyInput={alertMyInput} />
    </div>
  );
};
