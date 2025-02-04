import "./CustomButton.css";
import * as _ from "lodash";
import React, { Fragment } from "react";

const CustomButton = ({
  type,
  filled,
  primary,
  secondary,
  name,
  navigation,
  disable,
  onClick,
  follow,
  isFollowing,
  greyed,
}) => {
  return (
    <Fragment>
      {type === "Follow" && _.isEmpty(isFollowing) ? (
        <Fragment>
          <button
            disabled={disable}
            type={type}
            onClick={onClick}
            className="buttonfollow"
          >
            {name}
          </button>
        </Fragment>
      ) : type === "Follow" ? (
        <Fragment>
          <button
            disabled={disable}
            type={type}
            onClick={onClick}
            className="buttonunfollow "
          >
            Unfollow
          </button>
        </Fragment>
      ) : filled && primary ? (
        <Fragment>
          <button
            disabled={disable}
            onClick={onClick}
            type={type}
            className=" button1 buttonmain"
          >
            {name}
          </button>{" "}
        </Fragment>
      ) : filled && !primary ? (
        <Fragment>
          <button
            disabled={disable}
            onClick={onClick}
            type={type}
            className=" button2  buttonmain"
          >
            {name}
          </button>
        </Fragment>
      ) : greyed && secondary ? (
        <Fragment>
          <button
            disabled={disable}
            onClick={onClick}
            type={type}
            className=" buttongrey buttonmain"
          >
            {name}
          </button>{" "}
        </Fragment>
      ):(
        <button
          disabled={disable}
          onClick={onClick}
          type={type}
          // variant="primary"
          className=" button3 buttonText2"
        >
          {name}
        </button>
      )}
    </Fragment>
  );
};

export default CustomButton;