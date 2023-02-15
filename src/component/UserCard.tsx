import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/dashboard_body.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faChildren,
  faUsers,
  faCoins,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons';

type Props = {};

const UserCard = (props: Props) => {
  return (
    <div className="user_card_box">
      <div className="FontAwesomeIcon">
        <FontAwesomeIcon icon={faChildren as IconProp} />
      </div>

      <p>USERS</p>
      <span>2,453</span>
    </div>
  );
};

export default UserCard;
