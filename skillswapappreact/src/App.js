// App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Implement your login logic here
    // For now, just set loggedIn to true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to SwapSkill</h1>
        <ul class="nav-links">
        <li><a href="#about">About Us!</a></li>
          <li><a href="#developer">Meet our Developers!</a></li>
          <li><a href="#login">Log In</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </header>

      <section id="about">
<h1 class="title">About Us!</h1>
<p>
Welcome to SwapSkill, your go-to destination for all things coding and programming! We are passionate about empowering individuals with the knowledge and skills needed to thrive in the dynamic world of technology. Whether you're a seasoned developer looking to stay ahead of the curve or a coding enthusiast taking your first steps into the vast realm of programming, our platform is designed to cater to all levels of expertise.
</p>

<p>
At SwapSkill, we believe that coding is both an art and a science, and our mission is to demystify the complexities of programming languages, frameworks, and technologies. Through our comprehensive and user-friendly resources, we aim to foster a community of learners who share a common passion for turning ideas into functional, elegant, and efficient code.
</p>

<p>
What sets us apart is our commitment to providing not just tutorials, but also real-world insights, best practices, and the latest industry trends. Our team of experienced developers and tech enthusiasts curates content that is not only informative but also engaging, ensuring that your learning journey is both enjoyable and rewarding.
</p>

<p>
Explore our tutorials, articles, and interactive coding exercises to sharpen your skills, stay updated on the latest advancements, and connect with like-minded individuals in our vibrant community forums. Whether you're diving into web development, mastering a new programming language, or exploring the exciting world of artificial intelligence, SwapSkill is your one-stop destination for coding knowledge and inspiration.
</p>

<p>
Join us on this exciting coding adventure, and let's build a future where technology is harnessed to create, innovate, and transform the world!  
</p>   

</section>  

<section id="developer">
<h1 class="title">Meet our Developers!</h1>
<img
                      src="\src\assets\419216009_1811771342604666_2784992572378574594_n.jpg"
                      alt="ronald photo"
                      class="photo"
                    />
<img
                      src="\src\assets\415921162_382447504148964_21095218977257552_n.jpg"
                      alt="gelo photo"
                      class="photo"
                    />
<img
                      src="\src\assets\312956248_1181171262758197_3033049997838503216_n.jpg"
                      alt="pert photo"
                      class="photo"
                    />
<img
                      src="\src\assets\419773287_611072327818708_8381882846701940231_n.jpg"
                      alt="maki photo"
                      class="photo"
                    />
</section>     

      <div className="content">
        {loggedIn ? (
          <HomePage handleLogout={handleLogout} loggedIn={loggedIn} />
        ) : (
          <div className="login-form-container">
            <LoginForm handleLogin={handleLogin} />
          </div>
        )}
      </div>
    </div>
  );
};
export default App;


