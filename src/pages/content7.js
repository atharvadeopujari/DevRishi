import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image7.jpg"; // Import your side image
import "../styles/content1.css"; // Create a new CSS file for styling

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>RASAYANA TANTRA:</h1>
        <p>
          In Ayurveda, “Rasayana” refers to a branch of therapy or a treatment that is focused on rejuvenation, revitalization, and the enhancement of overall health and longevity. The word ‘rasayana’ is derived from two Sanskrit words ‘rasa’ which means ‘essence’ and ‘ayana’ which means path or vehicle. Therefore, rasayana can be understood as “the path to essence” or “the path to the vital fluids”.
        </p>

        <h2>RASAYANA TANTRA: Brief</h2>
        <p>
          Rasayana Tantra is the branch of Ayurveda that deals with rejuvenation, longevity, and the enhancement of overall vitality. It encompasses various areas of specialization, including:
        </p>
        
        <ul>
          <li>Rasayana Herbs and Formulations: Some practitioners specialize in the study of specific rasayana herbs and formulations, such as Chyawanprash or Ashwagandha, and their rejuvenating effects on the body.</li>
          <li>Anti-aging practices: This specialization may involve the study and application of practices that slow down the aging process, both internally and externally. It may include dietary and lifestyle recommendations, as well as herbal preparations.</li>
          <li>Mind-body Rejuvenation: Practitioners specializing in mind-body rejuvenation focus on techniques such as meditation, yoga, and mindfulness to promote mental and emotional well-being in addition to physical vitality.</li>
          <li>Geriatrics: While not strictly a sub-branch of Rasayana Tantra, some Ayurvedic practitioners may specialize in the care of elderly individuals, applying rasayana principles to promote health and vitality in older age.</li>
        </ul>
        
        <p>
          Ayurvedic practitioners who specialize in ‘Rasayana Tantra’ are called as ‘Rasayana Tantra specialists’ or ‘Rasayana Tantra Vaidya’.
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
