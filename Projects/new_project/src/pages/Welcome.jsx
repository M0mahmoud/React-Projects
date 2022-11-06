import React from "react";
import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Link to='newuser'>TO New User</Link>
      <Outlet /> 
    </section>
  );
};

export default Welcome;
