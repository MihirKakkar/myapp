import React from 'react';
import './App.css';


function App() {
  return (
    
    <div className="App">
      {/* <div class="topnav">
      <a href="#section03"></a>
      <a href="#section03">I like dark mode</a>
      </div>   */}
      <script src="https://kit.fontawesome.com/959728ec6b.js" crossorigin="anonymous"></script>
      <heading className="App-header">

        <h1 >Mihir Kakkar</h1>
        <p>Nanotechnology Engineering @ UWaterloo</p>

        <div id="part_with_icons">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

          <a href='https://github.com/MihirKakkar' target="_blank">
            <i class="fa fa-github"></i>
          </a>
          <a href='https://www.linkedin.com/in/mihir-kakkar/' target="_blank">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="mailto:m4kakkar@uwaterloo.ca" target="_blank">
            <i class="fa fa-envelope"></i>
          </a>
          <a href="https://drive.google.com/file/d/1fCkEyMzYRtlDCK4RbnuSm9RDs3QWXkYV/view?usp=sharing" target="_blank" >
            <i class="fa fa-file"></i>
          </a>
        </div>
      </heading>
      
        <section id="section02"  class="demo">
        <a href="#section03"><span></span>:D</a></section>
      
      <body className="App-body">
        <div class="star star1"></div>
        <div class="star star2"></div>
        <div class="star star3"></div>
        <h2>Hey there, I'm Mihir 👋</h2>
        <p2>I'm an engineering student with a passion for making new things.</p2>
        <p2>Currently a Data Engineer for Cuberg.</p2>
        <p2>Looking for 4-month or 8-month internship opportunities starting January 2022.</p2>
        <p2>Feel free to reach out!</p2>
      </body>
      
      <p3 id="section03">Made with 💖 by Mihir || Last Updated April 2021</p3>
    </div>
  );
}

export default App;
