import React, { ReactElement } from "react";
import { Link } from "gatsby";

import * as styles from "./Navbar.module.scss";
import { isLoggedIn, logOut } from "@gFirebase/authHelpers";

function LoggedIn(): ReactElement {
  return (
    <>
      <Link to="/app/profile">Profile</Link>
      <Link to="/" onClick={() => logOut()}>
        Logout
      </Link>
    </>
  );
}
function LoggedOut(): ReactElement {
  return (
    <>
      <Link to="/app/login">Login</Link>
      <Link to="/app/register">Register</Link>
    </>
  );
}

export default function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <span>{isLoggedIn() ? "Welcome" : "You are not logged in"}</span>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        {isLoggedIn() ? <LoggedIn /> : <LoggedOut />}
      </nav>
    </div>
  );
}
