const Experience = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div>
            <span className="text-primary"><img src="img/zoho.jpg" className="company-icon" alt="ZOHO" /> </span>
          </div>

          <div className="resume-content mr-auto">
            <h3 className="mb-0">Software Developer</h3>
            <div className="subheading mb-3">Zoho Corporation</div>
            <p>{'Working for ZOHO CRM :)'}</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">December 2017 - Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div>
            <span className="text-primary"><img src="img/tcs.jpg" className="company-icon" alt="TCS" /></span>
          </div>
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Java Developer</h3>
              <div className="subheading mb-3">Tata Consultancy Services</div>
              <p>
                The client system, is a Powerbuilder application used by the bank employees to manage and ease the process of Loan Origination for Mortgage Banking. The system maintains the Information about the Employees and their access rights, inflow and outflow of
                loan documents and all the operations and processes that a loan undergoes before finally getting approved or rejected. All these operations include analysis of various financial factors. The web application is expected to replicate the
                behavior of the existing system and have additional functionality wherever desired. This application has been designed to interact with multiple departments (applications). <br /> <br /> Worked with a team of 6 members in creating
              REST web-services for the application. Also worked on JWT Authentication implementation for the same.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2016 - December 2017</span>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience