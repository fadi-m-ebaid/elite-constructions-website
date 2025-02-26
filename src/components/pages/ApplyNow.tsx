const ApplyNow = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents default form submission

    // Clear the form fields
    const form = event.currentTarget;
    form.reset();

    console.log("Form submitted and cleared!");
  };

  return (
    <div className="apply-container">
      <div className="apply-content">
        <h4 className="highlight">Build Your Career</h4>
        <h1 className="title">Join Elite Future</h1>
        <p className="description">
          Elite Group was founded in 2017 and over the previous seven years, we
          have seen our company develop from a small civil works company into a
          fully-fledged general contracting corporation with a big portfolio, a
          solid financial position, and a major presence across a multitude of
          sectors.
        </p>
        <p className="description">
          We have completed countless projects to date, forming long-term
          partnerships and earning our clients’ trust and loyalty in the
          process. We also presently have several active projects serviced by
          our expert team, each of whom is a specialist in their profession.
        </p>
        <p className="description">
          If you’re willing to join us in one of our currently open positions,
          kindly send your C.V., and cover letter (if applicable) to:
          <b> info@theeliteworks.com</b>
        </p>
      </div>
      <div className="apply-form">
        <h3>Apply Now</h3>

        {/* CV Submission Form */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required />
          <div className="form-row">
            <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <input type="text" name="jobRole" placeholder="Job Role" required />
          <input type="url" name="cvLink" placeholder="Your C.V. Link https://" required />
          <textarea name="details" placeholder="More Details"></textarea>
          <button type="submit" className="submit-btn">SUBMIT YOUR CV</button>
        </form>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required />
          <div className="form-row">
            <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit" className="send-btn">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
