import React from "react";
import "./Searchbar.css";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field has-addons">
        <p className="control is-expanded">
          <input className="input searchInput" type="text" placeholder="Search Your Notes"/>
        </p>
        <p className="control">
          <a className="button is-primary is-inverted">
            <span className="icon is-small">
              <i className="fa fa-search"></i>
            </span>
          </a>
        </p>
      </div>
    );
  }
}

export default Searchbar;