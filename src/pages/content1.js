import React, { useEffect } from "react";
import Log from "../assets/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import "../styles/Home.css";

function Content1() {
  useEffect(() => {
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

  return (
    <div className="HomeImage" style={{ backgroundImage: `url(${Log})` }}>
      {/* Placeholder for Botpress Web Chat */}
      <div id="botpress-chat-container"></div>
    </div>
  );
}

export default Content1;
