import React, { useState } from 'react';
import '../styles/user.scss';


const UserTab: React.FC = () => {
  return (
    <div className="information_container">
      <h6>Personal Information</h6>

      <div className="personal">
        <div className="personal_box">
          <div className="personal_details">
            <span>FULL NAME</span>
            <h6>Grace Effiom</h6>
          </div>
          <div className="personal_details">
            <span>MARITAL STATUS</span>
            <h6>Single</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>PHONE NUMBER</span>
            <h6>07060780922</h6>
          </div>
          <div className="personal_details">
            <span>Children</span>
            <h6>None</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>Email Address</span>
            <h6>grace@gmail.com</h6>
          </div>
          <div className="personal_details">
            <span>Type of residence</span>
            <h6>Parent’s Apartment</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>Bvn </span>
            <h6>07060780922</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>Gender </span>
            <h6>Female</h6>
          </div>
        </div>
      </div>
      <hr />
      <h6>Education and Employment</h6>
      <div className="employment ">
        <div>
          <div className="personal_details">
            <span>level of education</span>
            <h6>B.Sc </h6>
          </div>
          <div className="personal_details">
            <span> office email</span>
            <h6>grace@lendsqr.com</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span>employment status </span>
            <h6>Employed </h6>
          </div>
          <div className="personal_details">
            <span> Monthly income</span>
            <h6>₦200,000.00- ₦400,000.00</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span> sector of employment </span>
            <h6>FinTech </h6>
          </div>
          <div className="personal_details">
            <span> loan repayment</span>
            <h6>40,000</h6>
          </div>
        </div>

        <div>
          <div className="personal_details">
            <span> Duration of employment</span>
            <h6>2 years </h6>
          </div>
        </div>
      </div>
      <hr />
      <h6>Socials</h6>
      <div className="personal ">
        <div className="personal_details">
          <span>Twitter</span>
          <h6>@grace_effiom</h6>
        </div>

        <div className="personal_details">
          <span> Facebook</span>
          <h6>Grace Effiom</h6>
        </div>

        <div className="personal_details">
          <span> Instagram</span>
          <h6>@grace_effiom</h6>
        </div>
      </div>
      <hr />
      <h6>Guarantor</h6>
      <div className="">
        <div className="personal">
          <div className="personal_details">
            <span>full Name</span>
            <h6>Debby Ogana</h6>
          </div>
          <div className="personal_details">
            <span>Phone Number</span>
            <h6>07060780922</h6>
          </div>
          <div className="personal_details">
            <span>Email Address</span>
            <h6>debby@gmail.com</h6>
          </div>
          <div className="personal_details">
            <span>Relationship</span>
            <h6>Sister</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTab;
