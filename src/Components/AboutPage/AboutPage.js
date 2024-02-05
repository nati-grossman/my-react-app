import React from 'react';

const AboutPage = () => {
  return (
    <div className="container my-5 text-white">
      <h1>אודות</h1>
      <p>
        
        </p>            
      
      <h2>FAQ</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>What topics do you cover?</strong>
          <p>We cover a wide range of topics related to programming, including languages like JavaScript, Python, C#, HTML, CSS, and more. We also provide resources for data structures, algorithms, and interview preparation.</p>
        </li>
        <li className="list-group-item">
          <strong>How can I contribute?</strong>
          <p>If you have valuable insights, tutorials, or tips that you'd like to share with our community, you can contribute by submitting your content through our submission form. Our team will review it and publish it if it meets our standards.</p>
        </li>
        <li className="list-group-item">
          <strong>Is your content free?</strong>
          <p>Yes, all the content on our site is free to access. We believe in providing equal opportunities for learning to everyone.</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
