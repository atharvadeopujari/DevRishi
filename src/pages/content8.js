import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import ImageSide from "../assets/image4.jpg";
import "../styles/content1.css";

function Content1() {
  useEffect(() => {
    // Your Botpress script initialization code
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <img
          src={Log}
          alt="Main Image"
          className="main-image"
        />
        <h1>VAJIKARANA TANTRA</h1>
        <p>
          In Ayurveda, "Vajikarana" refers to a branch of therapy or treatment
          focused on enhancing sexual and reproductive health. The term is
          derived from the Sanskrit words 'vaji,' which means 'horse'
          (symbolizing sexual potency and strength), and 'karana,' which means
          the 'process of making.' Therefore, 'vajikarana' can be understood as
          the process of making one as potent as a horse or enhancing sexual
          prowess.
        </p>
        <h2>VAJIKARANA TANTRA: Brief</h2>
        <p>
          Vajikarana Tantra is the branch of Ayurveda dedicated to aphrodisiacs,
          sexual health, and enhancing reproductive vitality. However, within
          the broader scope of Vajikarana Tantra, practitioners have areas of
          specialization or focus on specific aspects of sexual health and
          vitality. Some areas of specialization or topics that may be studied
          within Vajikarana Tantra include:
        </p>
        <ul>
          <li>Herbal Aphrodisiacs</li>
          <li>Diet and Nutrition for sexual health</li>
          <li>Psychological and Emotional aspects of sexual health</li>
          <li>Fertility enhancement</li>
          <li>Reproductive disorders</li>
        </ul>
        <p>
          Ayurvedic practitioners who specialize in 'Vajikarana Tantra' are known
          as 'Vajikarana Tantra Vaidya.'
        </p>
      </div>

      <div className="side-image">
        <img src={ImageSide} alt="Side Image" />
      </div>
    </div>
  );
}

export default Content1;
