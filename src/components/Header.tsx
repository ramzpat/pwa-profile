import React from "react";
import "./Header.css"

interface profile_t {
  first_name:string;
  last_name:string;
  position:string;
}

const Header:React.FC<{profile:profile_t}> = ({profile}) => {
  return (
    <div id="header_section">
      <div id="title_section">
        <div id='name_section'>
          {profile.first_name} {profile.last_name}
        </div>
        <div id='position_section' className="small_hide">
          {profile.position}
        </div>
      </div>

      <div id="link_section">
        <div className="small_hide" style={{whiteSpace:"nowrap"}}>Location: Tokyo, Japan</div>
        <div style={{whiteSpace:"nowrap"}}>E-mail: pattaravut.m@gmail.com</div>
        <div className="small_hide" style={{whiteSpace:"nowrap"}}>LinkedIn: LinkedIn.com/in/pattaravutM</div>
        <div className="small_hide" style={{whiteSpace:"nowrap"}}>Github: Github.com/ramzpat</div>
        <div className="small_hide" style={{whiteSpace:"nowrap"}}>Leetcode: Leetcode.com/pattarav</div>
      </div>
    </div>
  )
}
export default Header