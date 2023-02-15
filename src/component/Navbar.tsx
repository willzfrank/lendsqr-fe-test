import logo from '../assets/Group.jpg';
import image4 from '../assets/image 4.png';
import '../styles/navbar.scss';

type Props = {};

function Navbar({}: Props) {
  return (
    <nav>
      <img src={logo} alt="logo" loading="lazy" />

      <div className="navbar_right">
        <div className="search_bar_box">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search for anything"
          />
          <div className="uil-search_box">
            <i className="uil uil-search"></i>
          </div>
        </div>

        <div className="navbar_bell_box">
          <span>Docs</span>
          <i className="uil uil-bell"></i>
          <div className="navbar_profile_box">
            <img src={image4} alt="profile_pics" loading="lazy" />
            <h6>Adedeji</h6>
            <i className="uil uil-angle-down"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
