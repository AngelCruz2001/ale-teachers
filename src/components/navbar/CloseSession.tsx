import Image from "next/image";
import React from "react";

import tigreBlanco from "../../../public/images/tigreBlancoNoText.png";
import styles from "./Navbar.module.scss";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export const CloseSession = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <div className={styles.tigreContainer} onClick={handleLogout}>
      <Image className="tigre" src={tigreBlanco} />
    </div>
  );
};
