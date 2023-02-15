import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHandshake,
  faSackDollar,
  faPiggyBank,
  faHandHoldingDollar,
  faUserCheck,
  faUserXmark,
  faBriefcase,
  faBuildingColumns,
  faCoins,
  faCashRegister,
  faFan,
  faUserGear,
  faScroll,
  faChartColumn,
  faSliders,
  faPercent,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/sidebar.scss';

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="sidebar_box">
      <ul>
        <li>
          <i className="uil uil-suitcase-alt"></i>Switch Organization{' '}
          <i className="uil uil-angle-down"></i>
        </li>
        <li>
          <i className="uil uil-estate"></i> Dashboard
        </li>
      </ul>
      <h6>CUSTOMERS</h6>
      <ul>
        <li>
          <i className="uil uil-user"></i>Users
        </li>
        <li>
          <i className="uil uil-users-alt"></i>Guarantors
        </li>
        <li>
          <FontAwesomeIcon icon={faSackDollar as IconProp} />
          Loans
        </li>
        <li>
          <FontAwesomeIcon icon={faHandshake as IconProp} />
          Decision Models
        </li>
        <li>
          <FontAwesomeIcon icon={faPiggyBank as IconProp} />
          Savings
        </li>
        <li>
          <FontAwesomeIcon icon={faHandHoldingDollar as IconProp} />
          Loan Requests
        </li>

        <li>
          <FontAwesomeIcon icon={faUserCheck as IconProp} />
          Whitelist
        </li>
        <li>
          <FontAwesomeIcon icon={faUserXmark as IconProp} />
          Karma
        </li>
      </ul>
      <h6>BUSINESSES</h6>
      <ul>
        <li>
          <FontAwesomeIcon icon={faBriefcase as IconProp} />
          Organization
        </li>
        <li>
          <FontAwesomeIcon icon={faHandHoldingDollar as IconProp} />
          Loan Products
        </li>
        <li>
          <FontAwesomeIcon icon={faBuildingColumns as IconProp} />
          Savings Products
        </li>
        <li>
          <FontAwesomeIcon icon={faCoins as IconProp} />
          Fees and Charges
        </li>
        <li>
          <FontAwesomeIcon icon={faCashRegister as IconProp} />
          Transactions
        </li>
        <li>
          <FontAwesomeIcon icon={faFan as IconProp} />
          Services
        </li>
        <li>
          <FontAwesomeIcon icon={faUserGear as IconProp} />
          Service Account
        </li>
        <li>
          <FontAwesomeIcon icon={faScroll as IconProp} />
          Settlements
        </li>
        <li>
          <FontAwesomeIcon icon={faChartColumn as IconProp} />
          Reports
        </li>
      </ul>

      <h6>SETTINGS</h6>
      <ul>
        <li>
          <FontAwesomeIcon icon={faSliders as IconProp} />
          Preferences
        </li>
        <li>
          <FontAwesomeIcon icon={faPercent as IconProp} />
          Fees and Pricing
        </li>
        <li>
          <FontAwesomeIcon icon={faClipboardList as IconProp} />
          Audit Logs
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
