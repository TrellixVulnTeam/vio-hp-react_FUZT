import React from "react";
import '../../html/css/style.css'
import { Link } from "@reach/router";

const ProfileContactButton:React.FC = () => {
  return (
    <Link to="/contact" className="p-profile-contact__button u-text_center u-py_lg">
      <div  className="p-profile-contact__text">CONTACT</div>
    </Link>
  )
}

export default ProfileContactButton