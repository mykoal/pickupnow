import React, { useState } from 'react';

const SettingsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [sport, setSport] = useState('');
  const [skillLevel, setSkillLevel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}, Location: ${location}, Sport: ${sport}, Skill Level: ${skillLevel}`);
    // Here you can handle the user information, e.g., send it to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
      </label>
      <label>
        Sport of Interest:
        <select value={sport} onChange={e => setSport(e.target.value)}>
          <option value="Tennis">Tennis</option>
          <option value="Pickleball">Pickleball</option>
          <option value="Basketball">Basketball</option>
          <option value="Soccer">Soccer</option>
        </select>
      </label>
      <label>
        Skill Level:
        <input type="text" value={skillLevel} onChange={e => setSkillLevel(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default SettingsScreen;