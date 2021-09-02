import React from "react";
import propTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>{fullName}</h1>
        <h2>{bio}</h2>
        <h3>{profession}</h3>
        <div className="img-slider">{children}</div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  fullNAme: propTypes.string,
  profession: propTypes.string,
  bio: propTypes.string,
};

export default Profile;
