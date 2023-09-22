import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image4.jpg"; // Import your side image
import "../styles/content1.css"; // Create a new CSS file for styling

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>AGADA TANTRA</h1>
        <p>
        Agada tantra a part of ayurveda which focuses on toxicology and the treatment
         of poison-related conditions. The term “Agada” can be roughly translated as “antinode” or 
         “toxicology” and it deals with the identification, management and treatment of toxic substances
          and their effects on the body.
        </p>
        <h2>Agada Tantra Specializations</h2>
        <p>
          Agada Tantra, the branch of Ayurveda dedicated to toxicology and the management of poison-related conditions, does not typically have sub-branches in the same way that other branches of Ayurveda do. However, within the broader scope of Agada Tantra, practitioners may specialize in specific aspects or areas of toxicology. Here are some specialized areas or topics that may be studied within Agada Tantra with a brief explanation:
        </p>
        <ul>
          <li>
            <strong>Visha Chikitsa:</strong> This specialization involves the study and treatment of poisoning cases. It includes the identification of poisonous substances, their effects on the body, and the application of antidotes and detoxification procedures.
          </li>
          <li>
            <strong>Marana:</strong> Marana is a process of purifying toxic substances by burning them to remove their harmful properties. Practitioners specializing in this area may deal with the preparation of medicines containing minerals or metals, which are processed through marana.
          </li>
          <li>
            <strong>Garavisha Chikitsa:</strong> Some Ayurvedic practitioners focus on the treatment of snakebites and envenomation. They may have specialized knowledge of snakebite first aid and remedies for snakebite-related symptoms.
          </li>
          <li>
            <strong>Jangama Visha:</strong> This area involves the study of poisons derived from animals, such as snake venom, scorpion stings, and insect bites. Practitioners may specialize in the treatment of injuries caused by these animal toxins.
          </li>
          <li>
            <strong>Stavara Visha:</strong> Some Ayurvedic toxicologists specialize in plant toxins and their effects on the body. They may study various toxic plants and their antidotes.
          </li>
        </ul>
        <p>
          Ayurvedic practitioners who specialize in Agada tantra are known as "Agadatantra Vaidya."
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
