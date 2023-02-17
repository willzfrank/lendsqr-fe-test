import badge_percent from '../assets/badge-percent 1.png';
import briefcase from '../assets/briefcase 1.png';
import chartbar from '../assets/chart-bar 2.png';
import clipboard from '../assets/clipboard-list 1.png';
import coins from '../assets/coins-solid 1.png';
import galaxy from '../assets/galaxy 1.png';
import cash_at_hand from '../assets/Group 104.png';
import bank from '../assets/Group.png';
import shake from '../assets/handshake-regular 1.png';
import transactions from '../assets/icon.png';
import piggy_bank from '../assets/piggy-bank 1.png';
import sack_bag from '../assets/sack 1.png';
import scroll from '../assets/scroll 1.png';
import sliders from '../assets/sliders-h 1.png';
import user_check from '../assets/user-check 1.png';
import user_cog from '../assets/user-cog 1.png';
import user_friends from '../assets/user-friends 1.png';
import user_times from '../assets/user-times 1.png';
import home from '../assets/home 1.png';
import users from '../assets/users 1.png';
import '../styles/sidebar.scss';

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="sidebar_box">
      <ul>
        <li>
          <img src={briefcase} alt="" />
          Switch Organization <i className="uil uil-angle-down"></i>
        </li>
        <li>
          <img src={home} alt="" />
          Dashboard
        </li>
      </ul>
      <h6>CUSTOMERS</h6>
      <ul>
        <li className="active">
          <img src={user_friends} alt="" />
          Users
        </li>
        <li>
          <img src={users} alt="" />
          Guarantors
        </li>
        <li>
          <img src={sack_bag} alt="" />
          Loans
        </li>
        <li>
          <img src={shake} alt="" />
          Decision Models
        </li>
        <li>
          <img src={piggy_bank} alt="" />
          Savings
        </li>
        <li>
          <img src={cash_at_hand} alt="" />
          Loan Requests
        </li>

        <li>
          <img src={user_check} alt="" />
          Whitelist
        </li>
        <li>
          <img src={user_times} alt="" />
          Karma
        </li>
      </ul>
      <h6>BUSINESSES</h6>
      <ul>
        <li>
          <img src={briefcase} alt="" />
          Organization
        </li>
        <li>
          <img src={cash_at_hand} alt="" />
          Loan Products
        </li>
        <li>
          <img src={bank} alt="" />
          Savings Products
        </li>
        <li>
          <img src={coins} alt="" />
          Fees and Charges
        </li>
        <li>
          <img src={transactions} alt="" />
          Transactions
        </li>
        <li>
          <img src={galaxy} alt="" />
          Services
        </li>
        <li>
          <img src={user_cog} alt="" />
          Service Account
        </li>
        <li>
          <img src={scroll} alt="" />
          Settlements
        </li>
        <li>
          <img src={chartbar} alt="" />
          Reports
        </li>
      </ul>

      <h6>SETTINGS</h6>
      <ul>
        <li>
          <img src={sliders} alt="" />
          Preferences
        </li>
        <li>
          <img src={badge_percent} alt="" />
          Fees and Pricing
        </li>
        <li>
          <img src={clipboard} alt="" />
          Audit Logs
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
