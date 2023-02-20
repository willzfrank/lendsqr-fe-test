import React, { useState } from 'react';

import '../styles/user.scss';

type UserProps = {
  user: User | null;
};

const relationships = [
  'Brother',
  'Sister',
  'Father',
  'Mother',
  'Aunty',
  'Mother',
];

const UserTab: React.FC<UserProps> = ({ user }) => {
  const [relationship, setRelationship] = useState(getRandomRelationship());

  function getRandomRelationship() {
    const randomIndex = Math.floor(Math.random() * relationships.length);
    return relationships[randomIndex];
  }

  return (
    <div className="information_container">
      <h6>Personal Information</h6>

      <div className="personal">
        <div className="personal_box">
          <div className="personal_details">
            <span>FULL NAME</span>
            <h6>
              {user?.profile.firstName} {user?.profile.lastName}
            </h6>
          </div>
          <div className="personal_details">
            <span>MARITAL STATUS</span>
            <h6>Single</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>PHONE NUMBER</span>
            <h6>{user?.phoneNumber}</h6>
          </div>
          <div className="personal_details">
            <span>Children</span>
            <h6>None</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>Email Address</span>
            <h6>{user?.email}</h6>
          </div>
          <div className="personal_details">
            <span>Type of residence</span>
            <h6>{user?.profile.address}</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>Bvn </span>
            <h6>{user?.profile.bvn}</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>Gender </span>
            <h6>{user?.profile.gender}</h6>
          </div>
        </div>
      </div>
      <hr />
      <h6>Education and Employment</h6>
      <div className="employment ">
        <div>
          <div className="personal_details">
            <span>level of education</span>
            <h6>{user?.education.level} </h6>
          </div>
          <div className="personal_details">
            <span> office email</span>
            <h6>grace@lendsqr.com</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>employment status </span>
            <h6>{user?.education.employmentStatus} </h6>
          </div>
          <div className="personal_details">
            <span> Monthly income</span>
            <h6>
              ₦{user?.education.monthlyIncome[0]}- ₦
              {user?.education.monthlyIncome[1]}
            </h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span> sector of employment </span>
            <h6>{user?.education.sector} </h6>
          </div>
          <div className="personal_details">
            <span> loan repayment</span>
            <h6>{user?.education.loanRepayment}</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span> Duration of employment</span>
            <h6>{user?.education.duration} years </h6>
          </div>
        </div>
      </div>
      <hr />
      <h6>Socials</h6>
      <div className="personal ">
        <div className="personal_details">
          <span>Twitter</span>
          <h6>{user?.socials.twitter}</h6>
        </div>

        <div className="personal_details">
          <span> Facebook</span>
          <h6>{user?.socials.facebook}</h6>
        </div>

        <div className="personal_details">
          <span> Instagram</span>
          <h6>{user?.socials.instagram}</h6>
        </div>
      </div>
      <hr />
      <h6>Guarantor</h6>
      <div className="">
        <div className="personal">
          <div className="personal_details">
            <span>Full Name</span>
            <h6>
              {user?.guarantor.firstName}
              {user?.guarantor.lastName}
            </h6>
          </div>
          <div className="personal_details">
            <span>Phone Number</span>
            <h6>{user?.guarantor.phoneNumber}</h6>
          </div>
          <div className="personal_details">
            <span>Email Address</span>
            <h6>{user?.guarantor.firstName}@gmail.com</h6>
          </div>
          <div className="personal_details">
            <span>Relationship</span>
            <h6>{relationship}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTab;
