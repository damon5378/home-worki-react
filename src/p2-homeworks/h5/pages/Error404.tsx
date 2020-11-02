import React from "react";
import { Link } from "react-router-dom";
import s from "./Error404.module.css";

function Error404() {
  return (
      <div className={s.container}>
        <div className={s.content}>
          <h2>404</h2>
          <h4>Page not found!</h4>
          <span>—ฅ/ᐠ.̫ .ᐟ\ฅ—</span>
          <Link to="/" className={s.btn__back}>
            Back
          </Link>
        </div>
      </div>
  );
}

export default Error404;
