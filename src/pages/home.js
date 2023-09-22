import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Log from "../assets/image9.jpg";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.jpg";
import Image8 from "../assets/image8.jpg";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Your Botpress script initialization code
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src =
        "https://mediafiles.botpress.cloud/36e9b442-5a47-4228-8824-c2d289545bdb/webchat/config.js";
      script2.async = true;

      script2.onload = () => {
        window.botpressWebChat.init({
          botId: 'YOUR_BOT_ID', // Replace with your Bot ID
          clientId: 'YOUR_CLIENT_ID', // Replace with your Client ID
          hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
          messagingUrl: 'https://messaging.botpress.cloud',
          botName: 'TicketBot',
          hideWidget: true,
          disableAnimations: false,
          stylesheet: 'https://style-.....a.vercel.app/bot.css',
        });

        // Add event listeners or custom logic here if needed
        // Example: window.botpressWebChat.onEvent(() => { ... });
      };

      document.body.appendChild(script2);
    };
  }, []);

  const divContents = [
    {
      content: "Kaya Chikitsa",
      image: Image1,
    },
    {
      content: "SHALYA CHIKITSA:",
      image: Image2,
    },
    {
      content: "SHALAKYA TANTRA:",
      image: Image3,
    },
    {
      content: "AGADA TANTRA:",
      image: Image4,
    },
    {
      content: "BHUTA VIDYA",
      image: Image5,
    },
    {
      content: "Kaumarabhritya",
      image: Image6,
    },
    {
      content: "RASAYANA TANTRA",
      image: Image7,
    },
    {
      content: "VAJIKARANA TANTRA",
      image: Image8,
    },
  ];

  const handleLearnMoreClick = (index) => {
    // Create an array of URLs to which you want to navigate
    const urls = [
      "/content1", // Replace with the actual URLs you want to navigate to
      "/content2",
      "/content3",
      "/content4",
      "/content5",
      "/content6",
      "/content7",
      "/content8",
    ];

    // Use navigate to go to the corresponding URL based on the index
    navigate(urls[index]);
  };

  return (
    <div className="HomeImage" style={{ backgroundImage: `url(${Log})` }}>
      <div className="home">
        <div className="buttons-container">
          {divContents.map((item, index) => (
            <div className="button-div" key={index}>
              <img src={item.image} alt={`Image ${index}`} />
              <div className="content">
                <p>{item.content}</p>
                <button
                  className="learn-more-button"
                  onClick={() => handleLearnMoreClick(index)} // Pass the index to the click handler
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="botpress-chat-container"></div>
    </div>
  );
}

export default Home;
