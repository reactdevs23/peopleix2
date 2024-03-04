import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

import { logo, pattern } from "./images";
import Pattern from "./images/Pattern";
import Arrow from "./images/Arrow";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Poppins', sans-serif",
    headingFontFamily: "'League Gothic', sans-serif",
    mainBg: "#fff",
    primaryColor: "#F72585",
    secondaryColor: "#E7E0FA",
    accentColor: "#3A0CA3",
    logo: logo,
    arrow: <Arrow color="#3B0CA2" />,
    pattern: <Pattern />,
    initialPage: {
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",

      heading: "5 Reasons why headcount planning matters",
    },
    data: [
      {
        heading: "BUDGET OPTIMIZATION",
        info: "By meticulously forecasting resource requirements, businesses can effectively allocate budgets, identifying areas for expansion, redistribution, or consolidation, thereby optimizing financial resources.",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
      },
      {
        heading: "ALIGNMENT WITH BUSINESS GOALS",
        info: "Planning headcount ensures that workforce needs are synchronized with the company's growth trajectory, fostering a cohesive and goal-oriented organizational culture.",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
      },
      {
        heading: "COMPLIANCE AND DIVERSITY",
        info: "Headcount planning not only ensures adherence to labor regulations but also provides an avenue to prioritize diversity and inclusion goals, fostering a holistic and inclusive workforce.",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
      },
      {
        heading: "EMPLOYEE RETENTION",
        info: "Understanding staffing requirements is integral to nurturing employee development and career growth, which are pivotal factors in ensuring long-term employee retention and satisfaction.",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
      },
      {
        heading: "TALENT ACQUISITION",
        info: "A well-designed headcount plan facilitates proactive talent acquisition strategies, enabling organizations to identify and secure top-tier candidates efficiently.",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.primaryColor,
          "--primaryColor": allData.primaryColor,
          "--accentColor": allData.accentColor,
          "--secondaryColor": allData.secondaryColor,
          "--headingFontFamily": allData.headingFontFamily,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
