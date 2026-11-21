function ContactForm() {
  return (
    <fieldset className="contact-form">
      <legend>Contact Information</legend>
      <div>
        <label for="firstName">First Name:</label>
        <input id="firstName" name="firstName" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input id="lastName" name="lastName" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" />
      </div>
    </fieldset>
  );
}

function ExperienceForm() {
  return (
    <fieldset className="experience-form">
      <legend>Experience</legend>
      <div>
        <div>
          <label for="title">Job Title:</label>
          <input id="title" name="title" />
        </div>
        <div>
          <label for="company">Company Name:</label>
          <input id="company" name="company" />
        </div>
        <div>
          <label for="start">Start:</label>
          <input type="date" id="start" name="start" />
        </div>
        <div>
          <label for="end">End:</label>
          <input type="date" id="end" name="end" />
        </div>
        <div>
          <div>
            <label for="description">Job Description</label>
            <input id="description" name="description" />
          </div>
          <button disabled>Add</button>
        </div>
      </div>
      <button disabled>Add</button>
    </fieldset>
  );
}

function EducationForm() {
  return (
    <fieldset className="education-form">
      <legend>Education</legend>
      <div>
        <div>
          <label for="study">Degree/Certification Name:</label>
          <input id="study" name="study" />
        </div>
        <div>
          <label for="schoolName">School Name:</label>
          <input id="schoolName" name="schoolName" />
        </div>
        <div>
          <label for="completionDate">Completion Date:</label>
          <input type="date" id="completionDate" name="completionDate" />
        </div>
        <div>
          <input type="checkbox" id="incomplete" name="incomplete" />
          <label for="incomplete">In Progress</label>
        </div>
      </div>
      <button disabled>Add</button>
    </fieldset>
  );
}

export default function ResumeForm() {
  return (
    <form className="resume-form">
      <ContactForm />
      <ExperienceForm />
      <EducationForm />
      <button type="submit" disabled>
        Submit
      </button>
    </form>
  );
}
