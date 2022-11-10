import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { InstagramEmbed } from "react-social-media-embed";
import "../css/additional-styles/instagram.css"

function InstagramComp() {
  return (
    
      <div className="m-auto w-fit text-center text-white self-center md:p-0">
        
          <InstagramEmbed
            style={{
              maxWidth: 550,
            }}
            url="https://www.instagram.com/p/CiyHSF2pptl/"
            width="100%"
          />
        
      </div>
    
  );
}

export default InstagramComp;
