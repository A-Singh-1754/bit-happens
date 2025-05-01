import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Bit Happens Portal</h2>
      <div className="button-container">
        <Link to="/add"><button>Add Member</button></Link>
        <Link to="/view"><button>View Members</button></Link>
      </div>
    </div>
  );
}
