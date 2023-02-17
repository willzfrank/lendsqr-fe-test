import logo from '../assets/Group.jpg';
import image4 from '../assets/image 4.png';
import down from '../assets/down.png';

import '../styles/navbar.scss';
import bell from '../assets/Vector.png';

type Props = {};

function Navbar({}: Props) {
  return (
    <nav>
      <img src={logo} alt="logo" loading="lazy" className="navbar_logo" />

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
          <img src={bell} alt="notification" className="cursor_pointer" />
          <div className="navbar_profile_box">
            <img src={image4} alt="profile_pics" loading="lazy" />
            <h6>Adedeji</h6>
            <img
              src={down}
              alt="arrow_down"
              loading="lazy"
              className="cursor_pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
