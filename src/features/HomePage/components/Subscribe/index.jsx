import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

function Subscribe() {
  return (
    <div className='subscribe'>
      <div className='subscribe--title'>
        <h3>Đăng Kí Nhận Bảng Tin</h3>
      </div>
      <div className='subscribe--input'>
        <input type='text' placeholder='Nhập email của bạn'></input>
        <FontAwesomeIcon className='icon--send' icon={faPaperPlane} />
      </div>
    </div>
  );
}

export default Subscribe;
