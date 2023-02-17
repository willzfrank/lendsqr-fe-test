import '../styles/user.scss';
import arrow_back from '../assets/arrow-back.png';
import outline_star from '../assets/outline_star.png';
import filled_star from '../assets/filled_star.png';
import toast, { Toaster } from 'react-hot-toast';

type Props = {};

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

const Users = (props: Props) => {
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
            <h2>Grace Effiom</h2>
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
        <div className="profie_tab">
          <span>General Details</span>
          <span>Documents</span>
          <span>Bank Details</span>
          <span>Loans</span>
          <span>Savings</span>
          <span>App and System</span>
        </div>
      </div>

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
        <div className="employment guarantor_container">
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
        <div className="personal guarantor_container">
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
        <div className="guarantor_container">
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
    </section>
  );
};

export default Users;
function saveSettings(settings: any): Promise<unknown> {
  throw new Error('Function not implemented.');
}
