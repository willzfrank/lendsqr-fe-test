import React from 'react';

type UserCardProps = {
  image: string;
  title: string;
  total: number;
  bgColor: string;
};

const UserCard: React.FC<UserCardProps> = ({
  image,
  title,
  total,
  bgColor,
}) => {
  const formattedTotal = total.toLocaleString();

  return (
    <div className="user-card-box">
      <div className="font-awesome-icon" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <h6>{formattedTotal}</h6>
    </div>
  );
};

export default UserCard;
