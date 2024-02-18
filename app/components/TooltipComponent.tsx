"use client";

import { Tooltip } from "react-tooltip";

const TooltipComponent = () => {
  return (
    <div>
      <a className="my-anchor-element">◕‿‿◕</a>

      <Tooltip anchorSelect=".my-anchor-element" place="top">
        Hello world!
      </Tooltip>
    </div>
  );
};

export default TooltipComponent;
