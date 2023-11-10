import React, { useState } from 'react';
import "./style.css";

const SettingsScreen = () => {
  const [distance, setDistance] = useState('1 Mile');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [sport, setSport] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  return (
    <div className="index">
      <div className="div">
        <div className="overlap">
          <p className="element">
            <span className="text-wrapper">20</span>
          </p>
          <img
            className="frame"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-58@2x.png"
          />
        </div>
        <div className="overlap-group">
          <img
            className="img"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-59@2x.png"
          />
          <p className="english">
            <span className="text-wrapper">English</span>
          </p>
        </div>
        <div className="frame-wrapper">
          <img
            className="frame-2"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-63@2x.png"
          />
        </div>
        <div className="overlap-2">
          <p className="university-city">
            <span className="text-wrapper">University City</span>
          </p>
          <img
            className="frame-3"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-61@2x.png"
          />
        </div>
        <div className="overlap-3">
          <img
            className="frame-4"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-60@2x.png"
          />
          <p className="prefers-within">
        <span className="text-wrapper">Prefers within {distance}
        <select value={distance} onChange={e => setDistance(e.target.value)}>
        <option value="1 Mile">1 Mile</option>
        <option value="5 Miles">5 Miles</option>
        <option value="10 Miles">10 Miles</option>
      </select>
      </span>
      </p>
        </div>
        <div className="overlap-4">
          <img
            className="frame-5"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-54@2x.png"
          />
          <div className="smartphone-signal" />
          <p className="novice">
            <span className="text-wrapper">Novice</span>
          </p>
        </div>
        <div className="group-wrapper">
          <div className="group">
            <div className="overlap-group-2">
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/vector-13@2x.png"
              />
              <p className="basketball-tennis">
                <span className="text-wrapper">Basketball, Tennis, Pickleball</span>
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <p className="michael-li">
            <span className="span">Michael Li</span>
          </p>
          <img
            className="frame-6"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-62@2x.png"
          />
        </div>
        <div className="logo-long-wrapper">
          <img
            className="logo-long"
            alt="Logo long"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcd39bb999b9d6dfbb389/img/logo-long-1-1@2x.png"
          />
        </div>
        <div className="overlap-6">
          <img
            className="frame-7"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-1@2x.png"
          />
          <img
            className="frame-8"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-50@2x.png"
          />
          <img
            className="frame-9"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcd39bb999b9d6dfbb389/img/frame-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  // const [location, setLocation] = useState('');
  // const [sport, setSport] = useState('');
  // const [skillLevel, setSkillLevel] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Name: ${name}, Email: ${email}, Age: ${age}, Location: ${location}, Sport: ${sport}, Skill Level: ${skillLevel}`);
  //   // Here you can handle the user information, e.g., send it to a server
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Name:
  //       <input type="text" value={name} onChange={e => setName(e.target.value)} />
  //     </label>
  //     <label>
  //       Email:
  //       <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
  //     </label>
  //     <label>
  //       Age:
  //       <input type="number" value={age} onChange={e => setAge(e.target.value)} />
  //     </label>
  //     <label>
  //       Location:
  //       <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
  //     </label>
  //     <label>
  //       Sport of Interest:
  //       <select value={sport} onChange={e => setSport(e.target.value)}>
  //         <option value="Tennis">Tennis</option>
  //         <option value="Pickleball">Pickleball</option>
  //         <option value="Basketball">Basketball</option>
  //         <option value="Soccer">Soccer</option>
  //       </select>
  //     </label>
  //     <label>
  //       Skill Level:
  //       <input type="text" value={skillLevel} onChange={e => setSkillLevel(e.target.value)} />
  //     </label>
  //     <input type="submit" value="Submit" />
  //   </form>
  // );
};
export default SettingsScreen;