import React from 'react'

const IntroSection = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Pradesh Kumar
          </h1>
          <div className="subheading mb-5">Senior Software Engineer<br/><span className="themeColor">Contact:</span> +91 9566071048
            <br /><a href="mailto:name@email.com">pradeshkumar1@outlook.com</a>
          </div>
          <p className="mb-5">I'm basically gregarious person and a quick learner. My long term goal is to contribute something of greater good to this world. My moto is to LEARN, MASTER and INNOVATE !!.</p>

          {/* Social icons */}
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://twitter.com/iampradesh" target="_blank" rel="noopener">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/pradeshkumar/" target="_blank" rel="noopener">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/pradesh-kumar" target="_blank" rel="noopener">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://bitbucket.org/pradesh_kumar/" target="_blank" rel="noopener">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-bitbucket fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default IntroSection