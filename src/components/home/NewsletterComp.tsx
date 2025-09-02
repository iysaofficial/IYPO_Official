"use client";
import React, { useEffect } from "react";


const NewsletterComp: React.FC = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

    const form = document.forms.namedItem("regist-form");

    if (form) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault();
        try {
          await fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
          });
          alert("Data sent successfully!");
          form.reset();
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to send data.");
        }
      };

      form.addEventListener("submit", handleSubmit);

      // cleanup listener
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return(
        <>
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-box">
                    <h2>Subscribe to <br /> Our Newsletter</h2>
                    <form action="" method="POST" name="regist-form">
                        <input type="email" placeholder="Enter Email Address" name="Email"/>
                        <button type="submit" className="submit-button">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
};

export default NewsletterComp;