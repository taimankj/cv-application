function WorkExperience({ title, company, start, end, descriptions }) {
  return (
    <article>
      <h2>{title + " | " + company}</h2>
      <p>{start + " - " + end}</p>
      <ul>
        {descriptions.map((description) => (
          <li key={description.id}>{description.info}</li>
        ))}
      </ul>
    </article>
  );
}

function Education({ study, school, completionDate }) {
  return (
    <article>
      <h2>
        {study} | {school}
      </h2>
      <p>{completionDate}</p>
    </article>
  );
}

export default function ResumeDisplay({
  firstName,
  lastName,
  email,
  phoneNumber,
  workExperience,
  education,
}) {
  return (
    <div className="resume-display">
      <header className="contact-info-display">
        <h1>{firstName + " " + lastName}</h1>
        <h4>
          {email} | {phoneNumber}
        </h4>
      </header>
      <main>
        <section className="work-experience-display">
          {workExperience.map((exp) => (
            <WorkExperience
              key={exp.id}
              title={exp.title}
              company={exp.company}
              start={exp.start}
              end={exp.end}
              descriptions={exp.descriptions}
            />
          ))}
        </section>
        <section className="education-display">
          {education.map((edu) => (
            <Education
              key={edu.id}
              study={edu.study}
              school={edu.schoolName}
              completionDate={
                !edu.incomplete ? edu.completionDate : "In Progress"
              }
            />
          ))}
        </section>
      </main>
    </div>
  );
}
