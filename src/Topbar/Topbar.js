import React from "react";
import "./Topbar.css";
import AccountSection from "./AccountSection/AccountSection";
import Searchbar from "./Searchbar/Searchbar";

class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav has-shadow topBar">
        <div className="container is-fluid">
          <div className="nav-left">
              <div className="title is-3 nav-item appTitle">{this.props.appName}</div>
          </div>
          <div className="nav-center">
            <div className="nav-item is-hidden-mobile">
              <Searchbar />
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-item">
              <AccountSection />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Topbar;