import React from "react";

export default function BannerSecondary({ children }) {

  return(
    <section className="banner banner__secondary banner--blog">
      <div className="banner__content">
        {children}
      </div>
    </section>
  )
} 
