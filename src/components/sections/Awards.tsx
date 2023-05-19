const Awards = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
      <div className="my-auto">
        <h2 className="mb-5">Awards & Certifications</h2>
        <ul className="fa-ul mb-0">
          <li><i className="fa-li fa fa-trophy text-warning"></i> University Rank Holder - Department of EEE - Anna University</li>
          <li><i className="fa-li fa fa-trophy text-warning"></i> On The Spot Award - Tata Consultancy Services</li>
          <li><i className="fa-li fa fa-trophy text-warning"></i> AMCAT Certified Software Developer</li>
          <li><i className="fa-li fa fa-trophy text-warning"></i> Datacamp Certified in Python and R</li>
          <li><i className="fa-li fa fa-trophy text-warning"></i> Ranksheet Certified in Core Java</li>
          <li></li>
        </ul>
      </div>

      <div id="certificates" className="carousel slide text-center" data-ride="carousel">
      {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src="img/Certificates/freeCodeCamp_frontEnd.png" className="certificates-div" />
          </div>
          <div className="carousel-item">
            <img src="img/Certificates/Git.png" className="certificates-div" />
          </div>
          <div className="carousel-item">
            <img src="img/Certificates/Shell.png" className="certificates-div" />
          </div>
          <div className="carousel-item active">
            <img src="img/Certificates/TCS_OnSpotAward.png" className="certificates-div" />
          </div>
          <div className="carousel-item">
            <img src="img/Certificates/java_sololearn" className="certificates-div" />
          </div>
        </div>

        {/* Left and right controls */}
        <div>
          <a className="left carousel-control" href="#certificates" data-slide="prev">
            <span><button className="btn btn-nav">&lt;</button></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#certificates" data-slide="next">
            <span><button className="btn btn-nav">&gt;</button></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Awards;