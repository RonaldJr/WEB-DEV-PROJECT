// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = ({ handleAboutUsClick }) => {
  return (
    <div className="AboutUs">
      
      <div className="content">
        <p>
          Your go-to destination for all things coding and programming! We are passionate about empowering individuals with the knowledge and skills needed to thrive in the dynamic world of technology.
        </p>
        <p>
          Whether you're a seasoned developer looking to stay ahead of the curve or a coding enthusiast taking your first steps into the vast realm of programming, our platform is designed to cater to all levels of expertise.
        </p>
        <p>
          At SwapSkill, we believe that coding is both an art and a science, and our mission is to demystify the complexities of programming languages, frameworks, and technologies.
        </p>
        <p>
          Through our comprehensive and user-friendly resources, we aim to foster a community of learners who share a common passion for turning ideas into functional, elegant, and efficient code.
        </p>
        <p>
          What sets us apart is our commitment to providing not just tutorials, but also real-world insights, best practices, and the latest industry trends.
        </p>
        <p>
          Our team of experienced developers and tech enthusiasts curates content that is not only informative but also engaging, ensuring that your learning journey is both enjoyable and rewarding.
        </p>
        <p>
          Explore our tutorials, articles, and interactive coding exercises to sharpen your skills, stay updated on the latest advancements, and connect with like-minded individuals in our vibrant community forums.
        </p>
        <p>
          Whether you're diving into web development, mastering a new programming language, or exploring the exciting world of artificial intelligence, SwapSkill is your one-stop destination for coding knowledge and inspiration.
        </p>
        <p>
          Join us on this exciting coding adventure, and let's build a future where technology is harnessed to create, innovate, and transform the world!
        </p>
      </div>
      <button className="closeButton" onClick={handleAboutUsClick}>Close</button>
    </div>
  );
};

export default AboutUs;
