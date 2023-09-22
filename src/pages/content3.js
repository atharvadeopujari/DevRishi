import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image3.jpg"; // Import your side image
import "../styles/content1.css"; // Create a new CSS file for styling

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>SHALAKYA TANTRA:</h1>
        <p>
          Shalkya tantra is one of the eight branches of Ayurveda which focuses on the diagnosis, treatment, and management of diseases related to the head and neck region. It encompasses various aspects of healthcare, particularly those related to the eyes (Akshi tantra), nose (Nasa tantra), mouth, throat, and head.
        </p>

        <p>
          Within the field of Shalakya Tantra, which is the branch of Ayurveda that focuses on the diagnosis and treatment of diseases related to the eyes, ears, nose, throat, and head (ENT), there are several specialized sub-branches or areas of expertise. Some of these sub-branches in Shalakya Tantra include:
        </p>

        <ul>
          <li>Netra Roga: Netra Roga specialists focus primarily on eye-related disorders. They diagnose and treat various eye conditions, such as cataracts, glaucoma, conjunctivitis, and other vision-related problems.</li>
          <li>Karna Roga: Karna Roga deals with diseases and disorders of the ears. Practitioners in this sub-branch diagnose and treat ear infections, hearing impairments, and other ear-related ailments.</li>
          <li>Nasa Roga: Nasa Roga specialists concentrate on nasal and sinus-related problems. They address conditions like sinusitis, nasal congestion, and disorders affecting the nasal passages.</li>
          <li>Mukha Roga: While not strictly a sub-branch of Shalakya Tantra, Mukha Roga specialists focus on oral health and dental issues. This includes the diagnosis and treatment of oral conditions, such as dental caries, gum diseases, and mouth ulcers.</li>
          <li>Talu Roga: This sub-branch specifically deals with disorders of the palate. Practitioners in this area diagnose and treat conditions affecting the roof of the mouth.</li>
          <li>Kapala Roga: Kapala Roga specialists focus on disorders of the head and skull, which can include conditions like headaches, migraines, and cranial injuries.</li>
          <li>Griva Roga: Griva Roga deals with disorders of the neck, including neck pain, cervical spondylosis, and other conditions affecting the cervical spine.</li>
        </ul>

        <p>
          Ayurvedic practitioners who specialize in Shalakya chikitsa are known as "Shalya Tantra Vaidya" or "Shalakya Tantra Vaidya".
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
