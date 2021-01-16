import React from "react";
import { Link } from "gatsby";

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret Sauce
        </Link>
        <Link to="/dashboard/base" activeClassName="active">
          Secret Base
        </Link>
      </nav>
      <span>TODO: show login status</span>
    </div>
  );
};

export default Profile;
