import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image6.jpg"; // Import your side image
import "../styles/content1.css"; // Create a new CSS file for styling

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>Kaumarabhritya:</h1>
        <p>
          Kaumarabhritiya is a part of ayurveda which mainly deals with the healthcare and treatment of children, including infants, toddlers, and adolescents. It focuses on the health and well-being of children, providing guidance on their diet, lifestyle, and specific treatments for various childhood alignments. It encompasses various aspects of child care, including nutrition, growth monitoring, and remedies for common childhood illnesses.
        </p>
        
        <h2>Kaumarabhritya: Brief</h2>
        
        <p>
          Kaumarabhritya, the branch of Ayurveda that focuses on pediatrics and the healthcare of infants, children, and adolescents, within its broader field, practitioners may have areas of specialization or expertise in specific aspects of pediatric care. Some areas of specialization or topics that may be studied within Kaumarabhritya include:
        </p>
        
        <ul>
          <li>
            Balopachara: Practitioners specializing in Balopachara primarily focus on the general care and well-being of children, including nutrition, growth and development monitoring, and preventive healthcare.
          </li>
          <li>
            Bala Graha: This specialization involves the diagnosis and treatment of various pediatric disorders and ailments, such as common childhood illnesses, infections, and developmental disorders.
          </li>
          <li>
            Bala Roga: Bala Roga specialists focus on the management of diseases specific to children, including respiratory infections, digestive disorders, and skin conditions.
          </li>
          <li>
            Swarna Prashana: Some practitioners may specialize in Swarna Prashana, a traditional Ayurvedic practice involving the administration of a medicated gold preparation to enhance immunity and overall health in children.
          </li>
          <li>
            Bala Tantra: Bala Tantra practitioners are skilled in providing Ayurvedic treatments and therapies tailored to children's unique needs and sensitivities.
          </li>
        </ul>
        
        <p>
          Ayurvedic practitioners who expertise in ‘Kaumarabhritiya’ are called as ‘Kaumarabhritiya Vaidya’.
        </p>
      </div>

      <div className="side-image">
        <img src={ImageSide} alt="Side Image" />
      </div>
    </div>
  );
}

export default Content1;
