import React, { useState } from 'react';
import axios from 'axios';

export default function AddMember() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    email: '',
    dob: '',
    phone: '',
    address: '',
    gender: '',
    college: '',
    degree: '',
    department: '',
    image: null
  });
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
  
    for (let key in form) {
      data.append(key, form[key]);
    }
  
    await axios.post('http://localhost:5000/api/members', data);
    alert("Member Added!");
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="role" placeholder="Role" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="date" name="dob" placeholder="DOB" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="text" name="college" placeholder="College" onChange={handleChange} required />
      <input type="text" name="degree" placeholder="Degree" onChange={handleChange} required />
      <input type="text" name="department" placeholder="Department" onChange={handleChange} required />
      <input type="file" name="image" onChange={handleChange} required />
      <button type="submit">Add Member</button>
    </form>
  );
}
