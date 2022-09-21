import React from "react";

function Links(props) {
  const {links} = props.user
  return (
    <div>
      <h3>Links</h3>
      <a href={links.linkedin}>GitHub</a>
      <a href={links.linkedin}>LinkedIn</a>
    </div>
  );
}

export default  Links;
