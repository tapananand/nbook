import React from "react";
import "./AccountSection.css";

class AccountSection extends React.Component {
  render() {
    return (
      <a className="button is-primary is-inverted is-outlined">
          <span className="userName">tapananand</span>
          <span className="icon is-small">
            <i className="fa fa-chevron-down"></i>
          </span>
      </a>
    );
  }
}

export default AccountSection;