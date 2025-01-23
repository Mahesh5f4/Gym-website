import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css'; // Import CSS for styling

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>AU Gym Amadalavalsa - Your Fitness Destination</title>
                <meta name="description" content="Join AU Gym Amadalavalsa for the best fitness experience." />
            </Helmet>
            <h1>Welcome to AU Gym Amadalavalsa</h1>
            {/* Other content */}
            <p>Address: One Way Junction, Amadalavalsa</p>
            <p>Contact Numbers: 8096650681</p>

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
    );
};

export default HomePage; // Make sure to export the correct component name