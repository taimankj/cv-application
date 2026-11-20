import { useState } from "react";
import ResumeDisplay from "./ResumeDisplay";
import "./App.css";

function App() {
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
    <div className="app">
      <div className="resume-form">
        <h1>Form input will go here</h1>
      </div>
      <ResumeDisplay
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        workExperience={workExperience}
        education={education}
      />
    </div>
  );
}

export default App;
