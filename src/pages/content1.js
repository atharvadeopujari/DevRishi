import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image1.jpg"; // Add your side image
import "../styles/content1.css"; // Create a new CSS file for styling

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>KAAYA CHIKITSA:</h1>
        <p>
          Kaaya chikitsa is a branch of Ayurveda which deals with internal
          medicine. The term “kaaya” refers to “body” and “chikitsa” refers to
          “treatment”. Therefore, kaaya chikitsa focuses on the diagnosis,
          treatment, and management of various diseases and disorders that
          affect the internal organs and systems of the body.
        </p>

        <h2>KAAYA CHIKITSA: Brief</h2>
        <p>
          Within the field of Kaayachikitsa (internal medicine) in Ayurveda,
          there are various specialized areas and sub-branches, each focusing on
          specific aspects of internal medicine and health. A brief explanation
          about those sub-branches of Kaayachikitsa is as follows:
        </p>

        <ul>
          <li>
            <strong>Rog Nidana:</strong> This sub-branch focuses on the
            diagnosis of diseases. It involves studying the symptoms, causes,
            and patterns of various illnesses to determine their nature and
            origin. Accurate diagnosis is crucial for effective treatment.
          </li>
          <li>
            <strong>Kriya Sharira:</strong> Kriya Sharira deals with the
            physiological functions of the body, such as digestion, metabolism,
            and circulation. Practitioners in this sub-branch may focus on
            understanding and treating disorders related to these functions.
          </li>
          <li>
            <strong>Manasika Roga (Psychiatry):</strong> Manasika Roga is the
            branch of Ayurveda that deals with mental health and psychological
            disorders. It encompasses the assessment and treatment of conditions
            like anxiety, depression, and stress-related illnesses.
          </li>
          {/* Add more sub-branches here */}
        </ul>

        <p>
          Ayurvedic practitioners who specialize in Kaaya chikitsa are known as
          “Vaidya” or “Ayurvedic Vaidya”.
        </p>
      </div>

      <div className="side-image">
        <img src={ImageSide} alt="Side Image" />
      </div>

      {/* Placeholder for Botpress Web Chat */}
      <div id="botpress-chat-container"></div>
    </div>
  );
}

export default Content1;
