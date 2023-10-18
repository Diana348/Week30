import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { FcLike } from "react-icons/fc";

const HeaderElements = () => {
  return (
    <div className="headerBlock">
      <div className="headerTitle">
        <Link to="/">
          <h2 className="headerPlatformName">
            <FcLike />
            함께 하자
          </h2>
        </Link>
      </div>
      <div className="headerSubtitle">
        {/* <Link className="headerGame" to="/game-menu">
          <div className="headerGame">Проверит себя</div>
        </Link> */}

        <RxAvatar className="header-icon" />
      </div>
    </div>
  );
};

export default HeaderElements;
