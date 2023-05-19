const NavigationBarContent = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="docs/resume_v1.pdf" target="_blank" rel="noopener" download="Pradesh Kumar_Resume.pdf">Download Resume</a>
        </li>
      </ul>
    </div>
    )
  }
  
  export default NavigationBarContent;