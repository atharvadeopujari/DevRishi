import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image5.jpg"; // Import your side image
import "../styles/content1.css"; // Create a new CSS file for styling

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>SHALYA CHIKITSA:</h1>
        <p>
        Agada tantra a part of ayurveda which focuses on toxicology and the treatment of poison-related conditions. 
        The term “Agada” can be roughly translated as “antinode” or “toxicology” and it deals with the identification,
         management and treatment of toxic substances and their effects on the body.
        </p>

        <h2>SHALYA CHIKITSA: Brief</h2>
        <p>
          Within the field of Kaayachikitsa (internal medicine) in Ayurveda, there are various specialized areas
          and sub-branches, each focusing on specific aspects of internal medicine and health. A brief explanation
          about those sub-branches of Kaayachikitsa is as follows:
        </p>

        <p>
          Rog Nidana: This sub-branch focuses on the diagnosis of diseases. It involves studying the symptoms, causes,
          and patterns of various illnesses to determine their nature and origin. Accurate diagnosis is crucial for
          effective treatment.
        </p>
        <p>
          Kriya Sharira: Kriya Sharira deals with the physiological functions of the body, such as digestion,
          metabolism, and circulation. Practitioners in this sub-branch may focus on understanding and treating
          disorders related to these functions.
        </p>
        <p>
          Manasika Roga (Psychiatry): Manasika Roga is the branch of Ayurveda that deals with mental health and
          psychological disorders. It encompasses the assessment and treatment of conditions like anxiety, depression,
          and stress-related illnesses.
        </p>
        <p>
          Jara Chikitsa: Jara Chikitsa focuses on the health concerns of the elderly. It addresses age-related issues
          and offers strategies for maintaining vitality and well-being in older individuals.
        </p>
        <p>
          Vrana Roga: This sub-branch specializes in the treatment of wounds, injuries, and skin disorders. It includes
          both acute wound care and the management of chronic skin conditions.
        </p>
        <p>
          Yakrit Nidana and Pandu Roga (Hepatology and Hematology): These sub-branches deal with liver disorders and
          blood-related diseases, respectively. Practitioners in these areas diagnose and treat conditions affecting
          the liver and blood.
        </p>
        <p>
          Mutra Roga: Mutra Roga focuses on disorders of the urinary system, including the kidneys, bladder, and urinary
          tract. It addresses conditions like urinary tract infections, kidney stones, and related issues.
        </p>
        <p>
          Shvasa Roga: Shvasa Roga specializes in the diagnosis and treatment of respiratory disorders, including
          asthma, bronchitis, and other respiratory conditions.
        </p>
        <p>
          Ayurvedic practitioners who expertise in Kaaya chikitsa is known as “Vaidya” or “Ayurvedic Vaidya”.
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
