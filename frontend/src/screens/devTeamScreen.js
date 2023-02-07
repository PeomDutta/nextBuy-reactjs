import React from 'react';

export default function devTeamScreen() {
  return (
    <div className="row top">

      <div className="col-2">
        <img className="mediums" src="/images/p1.jpg" alt="img1"/>
        <div className="mediums">
        <ul>
          <li>
            <h3>Peom Dutta</h3>
            <p>ID: 180104017</p>
            <p>Aust CSE</p>
            <p>Enigma 41</p>
          </li>
        </ul>
        </div>
      </div>

      
      <div className="col-2">
        <img className="mediumss" src="/images/m1.jpg" alt="img2"/>
        <div className="mediumss">
        <ul>
          <li>
            <h3>Mahdi Hassan Khan</h3>
            <p>ID: 180104018</p>
            <p>Aust CSE</p>
            <p>Enigma 41</p>
          </li>
        </ul>
        </div>
      </div>

    </div>
  );
}