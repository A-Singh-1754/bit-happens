import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data));
  }, []);

  return (
<div className="members-container">
  {members.map(member => (
    <div className="member-card" key={member._id}>
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p> {/* This will be bold via CSS now */}
      <Link to={`/member/${member._id}`}><button>View Details</button></Link>
    </div>
  ))}
</div>


  );
}
