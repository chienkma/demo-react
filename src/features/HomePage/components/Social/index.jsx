import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Social() {
  return (
    <div className='social'>
      <div className='social--title'>
        <h3>Kết nối ngay</h3>
      </div>
      <div className='social-icon'>
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Social;
