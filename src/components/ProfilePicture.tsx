import React from 'react'

const ProfilePicture = () => {
  return (
    <a className="navbar-brand js-scroll-trigger" href="#about">
      <span className="d-none d-lg-block">
      <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpeg" alt="" />
      </span>
    </a>
  )
}
  
export default ProfilePicture;