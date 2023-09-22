import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image5.jpg";
import "../styles/content1.css";

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>BHUTA VIDYA:</h1>
        <p>
          Bhuta vidya is one of the specialized branches of Ayurveda. The term
          “Bhuta” refers to entities or factors that are believed to affect a
          person’s mental health and well-being in Ayurvedic philosophy. This
          focuses on the diagnosis and treatment of psychiatric and
          psychological disorders, including conditions related to mental health
          and disturbances of the mind.
        </p>
        <h2>BHUTA VIDYA: Brief</h2>
        <p>
          Bhuta Vidya, the branch of Ayurveda that deals with psychiatry,
          psychology, and mental health, does not have well-defined sub-branches
          within the Ayurvedic system in the same way that some other branches
          do. However, within the broader scope of Bhuta Vidya, practitioners
          may have areas of specialization or may focus on specific aspects of
          mental health and psychology. Some areas of specialization or topics
          that may be studied within Bhuta Vidya include:
        </p>
        <ul>
          <li>
            Manasa Roga: Practitioners specializing in Manasa Roga primarily
            focus on the diagnosis and treatment of various mental disorders,
            such as anxiety, depression, bipolar disorder, and schizophrenia.
          </li>
          <li>
            Psychological Counseling and therapy: Some Ayurvedic practitioners
            may specialize in providing counseling and psychotherapy services,
            offering emotional and psychological support to individuals facing
            mental health challenges.
          </li>
          <li>
            Stress management: This specialization may involve teaching
            stress-reduction techniques, relaxation methods, and lifestyle
            modifications to help individuals manage stress and improve their
            mental well-being.
          </li>
          <li>
            Meditation and Yoga for mental health: Ayurvedic practitioners may
            specialize in using meditation and yoga practices to promote mental
            health, emotional balance, and stress relief.
          </li>
          <li>
            Behavioral disorders: Some practitioners may focus on the assessment
            and treatment of behavioral disorders, especially in children and
            adolescents.
          </li>
        </ul>
        <p>Ayurvedic practitioners who specialize in ‘Bhuta Vidya’ are called as ‘Bhuta Vidya Vaidya’.</p>
      </div>

      <div className="side-image">
        <img src={ImageSide} alt="Side Image" />
      </div>
    </div>
  );
}

export default Content1;
