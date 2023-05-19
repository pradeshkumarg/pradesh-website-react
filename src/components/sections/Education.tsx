const EducationSection = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div>
            <span className="text-primary"><img src="img/sairam.png" className="company-icon" alt="Sairam" /> </span>
          </div>
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Sri Sairam Engineering College</h3>
            <div className="subheading mb-3">Bachelor of Engineering</div>
            <div>Department of Electrical and Electronics Engineering</div>
            <p>CGPA: 9.07 (University Rank #10)</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2012 - April 2016</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row">
          <div>
            <span className="text-primary"><img src="img/school.png" className="company-icon" alt="RPC" /> </span>
          </div>
          <div className="resume-content mr-auto">
            <h3 className="mb-0">RPC Matric Higher Secondary School</h3>
            <div className="subheading mb-3">Computer Science</div>
            <p>Percentage: 95.66</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">June 2010 - April 2012</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection