import React, { useEffect, useState } from "react";

export default function App() {

  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      console.log(otplessUser);
    };
  }, []);

  return (
    <></>
  );
}

