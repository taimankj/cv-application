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

export default function ResumeDisplay() {
  const firstName = "Keoni",
    lastName = "Taimanglo";
  const email = "taimanglooni@gmail.com",
    phoneNumber = "(940) 704-0606";

  const workExperience = [
    {
      id: crypto.randomUUID(),
      title: "Maintenance Manager",
      company: "USAF",
      start: "04/20/2021",
      end: "08/31/2023",
      descriptions: [
        {
          id: crypto.randomUUID(),
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nesciunt ab cumque sequi, error molestias ratione, dolore veritatis adipisci tempora nulla eligendi reprehenderit saepe corrupti, facilis molestiae fuga asperiores?",
        },
        {
          id: crypto.randomUUID(),
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nesciunt ab cumque sequi, error molestias ratione, dolore veritatis adipisci tempora nulla eligendi reprehenderit saepe corrupti, facilis molestiae fuga asperiores?",
        },
        {
          id: crypto.randomUUID(),
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nesciunt ab cumque sequi, error molestias ratione, dolore veritatis adipisci tempora nulla eligendi reprehenderit saepe corrupti, facilis molestiae fuga asperiores?",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "ISSM",
      company: "USAF",
      start: "09/1/2024",
      end: "11/30/2026",
      descriptions: [
        {
          id: crypto.randomUUID(),
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nesciunt ab cumque sequi, error molestias ratione, dolore veritatis adipisci tempora nulla eligendi reprehenderit saepe corrupti, facilis molestiae fuga asperiores?",
        },
        {
          id: crypto.randomUUID(),
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nesciunt ab cumque sequi, error molestias ratione, dolore veritatis adipisci tempora nulla eligendi reprehenderit saepe corrupti, facilis molestiae fuga asperiores?",
        },
        {
          id: crypto.randomUUID(),
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nesciunt ab cumque sequi, error molestias ratione, dolore veritatis adipisci tempora nulla eligendi reprehenderit saepe corrupti, facilis molestiae fuga asperiores?",
        },
      ],
    },
  ];

  const education = [
    {
      id: crypto.randomUUID(),
      study: "Computer Science",
      schoolName: "Arizona State University",
      incomplete: true,
    },
    {
      id: crypto.randomUUID(),
      study: "Network+",
      schoolName: "CompTIA",
      incomplete: false,
      completionDate: "07/01/2023",
    },
    {
      id: crypto.randomUUID(),
      study: "Security+",
      schoolName: "CompTIA",
      incomplete: false,
      completionDate: "07/01/2023",
    },
  ];

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
