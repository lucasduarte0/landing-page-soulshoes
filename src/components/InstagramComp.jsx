import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { InstagramEmbed } from "react-social-media-embed";

function InstagramComp() {
  return (
    <>
      <div className="p-3 pt-5 h3 text-center text-white self-center md:p-0">
        
          <InstagramEmbed
            style={{
              maxWidth: 550,
            }}
            url="https://www.instagram.com/p/CiyHSF2pptl/"
            width="100%"
          />
        
      </div>
    </>
  );
}

export default InstagramComp;
