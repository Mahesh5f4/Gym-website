import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div>
      {/* The Header includes the Navbar */}
      <div className="home">
        <div className="gym-info">
          <h1>Welcome to AU Gym</h1>
          <p>
            At AU Gym (Aayan Universal), we believe in empowering individuals to achieve their fitness goals. 
            Our state-of-the-art facilities and expert trainers are here to support you every step of the way.
          </p>
          <p>
            Address: One Way Junction, Amadalavalsa
          </p>
          <p>Contact Numbers: 8096650681</p>
        </div>

        <div className="coach-info">
          <h2>Meet Our Coach</h2>
          <div className="coach">
            <div className="coach-details">
              <h3>Gowri Shankar</h3>
              <p>Expertise: Personal Training, Nutrition</p>
              <img src="/Home1.jpg" alt="Gym 1" />
              <img src="/Home2.jpg" alt="Gym 2" />
              <video src="/transform11.mp4" controls></video>
              <img src="/Home4.jpg" alt="Gym 4" />
            </div>
          </div>
        </div>

        {/* New Section for Gym Photos */}
        <div className="gym-photos">
          <h2>Gym Photos</h2>
          <div className="photo-gallery">
            <img src="/gym1.jpg" alt="Gym Photo 1" />
            <img src="/gym2.jpg" alt="Gym Photo 2" />
            <img src="/gym3.jpg" alt="Gym Photo 3" />
            <img src="/gym4.jpg" alt="Gym Photo 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
