import React from 'react';
// import '../styles/user_card.scss';

type UserCardProps = {
  image: string;
  title: string;
  total: number;
  color: string;
  bgColor: string;
};

const UserCard = (props: UserCardProps) => {
  return (
    <div className="user_card_box">
      <div
        className="FontAwesomeIcon"
        style={{ backgroundColor: props.bgColor }}
      >
        <img src={props.image} alt="" />
      </div>
      <p>{props.title}</p>
      <h6>{props.total.toLocaleString()}</h6>
    </div>
  );
};

export default UserCard;
