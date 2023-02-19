import React, { useEffect, useState } from 'react';
import activate from './../assets/activate.png';
import eye from './../assets/eye.png';
import blacklist from './../assets/blacklist.png';
import '../styles/dashboard_modal.scss';
import { Link } from 'react-router-dom';

type User = {
  itemId: string;
};

const SmallModal: React.FC<User> = ({ itemId }) => {
  return (
    <div className="small_modal_container">
      <div>
        <img src={eye} alt="View details icon" />
        <Link to={`/user/${itemId}`} className="link">
          <span>View Details</span>
        </Link>
      </div>
      <div>
        <img src={blacklist} alt="Blacklist user icon" />
        <span>Blacklist User</span>
      </div>
      <div>
        <img src={activate} alt="Activate user icon" />
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default SmallModal;
