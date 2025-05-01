import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data));
  }, [id]);

  return (
    <div className="details-card">
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
      <p><strong>DOB:</strong> {member.dob}</p>
      <p><strong>Phone:</strong> {member.phone}</p>
      <p><strong>Address:</strong> {member.address}</p>
      <p><strong>Gender:</strong> {member.gender}</p>
      <p><strong>College:</strong> {member.college}</p>
      <p><strong>Degree:</strong> {member.degree}</p>
      <p><strong>Department:</strong> {member.department}</p>
    </div>
  );
}
