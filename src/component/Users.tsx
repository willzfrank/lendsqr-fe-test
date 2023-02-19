import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import UserTab from './UserTab';
import { getUser } from '../api/getUser';

import arrow_back from '../assets/arrow-back.png';
import outline_star from '../assets/outline_star.png';
import filled_star from '../assets/filled_star.png';

import '../styles/user.scss';

interface Tab {
  title: string;
  content: JSX.Element | string;
}

const tabs: Tab[] = [
  {
    title: 'General Details',
    content: <UserTab />,
  },
  {
    title: 'Documents',
    content: 'Documents is currently unavailable',
  },
  {
    title: 'Bank Details',
    content: 'Bank Details is currently unavailable',
  },
  {
    title: 'Loans',
    content: 'Loans is currently unavailable',
  },
  {
    title: 'Savings',
    content: 'Savings is currently unavailable',
  },
  {
    title: 'App and System',
    content: 'App and System is currently unavailable',
  },
];

const handleDeactivate = () => {
  toast.success('User has been blacklisted.', {
    icon: '😢',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
};

const handleActivate = () => {
  toast.success('User has been activated.', {
    icon: '😊',
    style: {
      borderRadius: '10px',
      background: '#E5E5E5',
      color: 'black',
    },
  });
};

const User = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(id);
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleDeactivate = () => {
    toast.success('User has been blacklisted.', {
      icon: '😢',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const handleActivate = () => {
    toast.success('User has been activated.', {
      icon: '😊',
      style: {
        borderRadius: '10px',
        background: '#E5E5E5',
        color: 'black',
      },
    });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="user_container">
      <Toaster />
      <div className="user_back_link">
        <a href="/user">
          <img src={arrow_back} alt="" />
        </a>
        Back to Users
      </div>
      <div className="user_title">
        <h2>User Details</h2>
        <div className="user_switch_box">
          <span
            style={{ color: '#E4033B', border: '1px solid #E4033B' }}
            onClick={handleDeactivate}
          >
            BLACKLIST USER
          </span>
          <span
            style={{ color: '#39CDCC', border: '1px solid #39CDCC' }}
            onClick={handleActivate}
          >
            ACTIVATE USER
          </span>
        </div>
      </div>
      <div className="user_profile_box">
        <div className="profile_top">
          <div className="profile_img" title="Grace Effiom">
            <i className="uil uil-user"></i>
          </div>
          <div className="profile_name">
            <h2>
              {user?.profile.firstName} {user?.profile.lastName}
            </h2>
            <span>LSQFf587g90</span>
          </div>
          <div className="border"></div>

          <div className="user_tier">
            <p>User’s Tier</p>
            <span>
              <img src={filled_star} title="Poor" />
              <img src={outline_star} title="Average" />
              <img src={outline_star} title="Good" />
            </span>
          </div>

          <div className="border"></div>

          <div className="user_amount">
            <h2>₦200,000.00</h2>
            <span>9912345678/Providus Bank</span>
          </div>
        </div>

        <div className="tab-header">
          <div className="overflow">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? 'tabactive' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                <span>{tab.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </section>
  );
};

export default User;
