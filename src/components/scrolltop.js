import React from "react";

const ScrollToTop = (props) => {
  setTimeout(window.scrollTo(0, 0), 100);
  return <>{props.children}</>;
};

export default ScrollToTop;