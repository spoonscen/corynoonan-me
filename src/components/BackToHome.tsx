import * as React from "react";
import { Link } from 'react-router'

interface BackToHome {

}

export default function BackToHome(props: BackToHome) {
  return (
    <div>
      <Link className="back-to-home" to="main">
        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
        back to home
      </Link>
    </div>
  )


}