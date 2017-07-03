import React from "react";
import "./Toolbar.css";

class Toolbar extends React.Component {
  render() {
    return (
      <aside className="panel sideToolbar">
        <a className="panel-block">
          <span className="icon">
            <i className="fa fa-plus"></i>
          </span>
          <span className="toolTitle is-hidden">Add Note</span>
        </a>
        <a className="panel-block">
          <span className="icon">
            <i className="fa fa-book"></i>
          </span>
          <span className="toolTitle is-hidden">Notebooks</span>
        </a>
        <a className="panel-block">
          <span className="icon">
            <i className="fa fa-tags"></i>
          </span>
          <span className="toolTitle is-hidden">Tags</span>
        </a>
        <a className="panel-block">
          <span className="icon">
            <i className="fa fa-lightbulb-o"></i>
          </span>
          <span className="toolTitle is-hidden">Daily Gyaan</span>
        </a>
        <a className="panel-block">
          <span className="icon">
            <i className="fa fa-users"></i>
          </span>
          <span className="toolTitle is-hidden">Shared</span>
        </a>
        <a className="panel-block">
          <span className="icon">
            <i className="fa fa-trash-o"></i>
          </span>
          <span className="toolTitle is-hidden">Trash</span>
        </a>
      </aside>
    );
  }
}

export default Toolbar;