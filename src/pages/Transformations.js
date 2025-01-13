// src/pages/Transformations.js
import React from 'react';
import './Transformations.css'; // Import your CSS for styling

const Transformations = () => {
  return (
    <div className="transformations">
      <h1>Client Transformations</h1>
      <p>Witness the incredible journeys of our clients through images and videos!</p>

      {/* Transformation Images Section */}
      <section className="transformation-images">
        <h2>Transformation Photos</h2>
        <div className="transformation-gallery">
          <div className="transformation-item">
            <img src="/Transform1.jpg" alt="Transformation 1" />
          </div>
          <div className="transformation-item">
            <img src="/Transform2.jpg" alt="Transformation 2" />
          </div>
          <div className="transformation-item">
            <img src="/Transform3.jpg" alt="Transformation 3" />
          </div>
          <div className="transformation-item">
            <img src="/Transform7.jpg" alt="Transformation 4" />
          </div>
          <div className="transformation-item">
            <img src="/Transform8.jpg" alt="Transformation 5" />
          </div>
          <div className="transformation-item">
            <img src="/Transform9.jpg" alt="Transformation 6" />
          </div>
          <div className="transformation-item">
            <img src="/Transform10.jpg" alt="Transformation 7" />
          </div>
          <div className="transformation-item">
            <img src="/transform12.jpg" alt="Transformation 8" />
          </div>
          <div className="transformation-item">
            <img src="/transform13.jpg" alt="Transformation 9" />
          </div>
          <div className="transformation-item">
            <img src="/transform14.jpg" alt="Transformation 10" />
          </div>
          <div className="transformation-item">
            <img src="/transfrom15.jpg" alt="Transformation 11" />
          </div>
        </div>
      </section>

      {/* Transformation Videos Section */}
      <section className="transformation-videos">
        <h2>Transformation Videos</h2>
        <div className="transformation-gallery">
          <div className="transformation-video">
            <video controls>
              <source src="/transform11.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="transformation-video">
            <video controls>
              <source src="/Transform6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="transformation-video">
            <video controls>
              <source src="/Transform5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transformations;
