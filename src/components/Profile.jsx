import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="content">
      <div className="wallpaper">
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div>
        <div className="profile-photo">
          <img src="https://www.factzoo.com/sites/all/img/birds/owls/peeka-boo-boreal.jpg" alt="owl" />
        </div>
        ava + description
      </div>
      <div>posts
        <div>
          new post
        </div>
        <div className="item">post 1</div>
        <div className="item">post 2</div>
      </div>
    </div>
  );
}

export default Profile;
