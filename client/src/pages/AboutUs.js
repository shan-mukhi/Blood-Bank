import React from 'react';
import '../styles/AboutUs.css'; // Import the CSS file for styling

export default function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h1 className="about-us-heading">About Us</h1>
                <p className="about-us-text">
                    RedReserve is dedicated to making blood donation simple and impactful. Our mission is to connect donors with those in need and to ensure that every drop of blood can save lives. We work closely with hospitals and blood banks to streamline the donation process and make it as efficient as possible.
                </p>
                <p className="about-us-text">
                    Our team is comprised of passionate individuals committed to improving healthcare and supporting the community. We believe in the power of giving and strive to create a platform that fosters a spirit of generosity and support.
                </p>
                <p className="about-us-text">
                    One of the key areas we focus on is helping patients with thalassemia. Thalassemia is a genetic blood disorder that requires regular blood transfusions to manage. By facilitating a smooth and efficient donation process, RedReserve plays a crucial role in ensuring that these patients receive the timely and life-saving blood transfusions they need. Our platform helps match donors with thalassemia patients and ensures a consistent supply of compatible blood, making a significant difference in their quality of life and treatment outcomes.
                </p>
            </div>
        </div>
    );
}

