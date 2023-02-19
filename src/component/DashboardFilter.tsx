import '../styles/dashboard_modal.scss';

const DashboardModalFilter = () => {
  return (
    <div className="dashboard_filter_box">
      <form>
        <div className="dashboard_form_content">
          <label htmlFor="organization">Organization</label>
          <select id="organization" defaultValue="Select">
            <option disabled>Select</option>
          </select>
        </div>
        <div className="dashboard_form_content">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="User" />
        </div>
        <div className="dashboard_form_content">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="dashboard_form_content">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" placeholder="Date" />
        </div>
        <div className="dashboard_form_content">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Phone Number" />
        </div>
        <div className="dashboard_form_content">
          <label htmlFor="status">Status</label>
          <select id="status" defaultValue="Select">
            <option disabled>Select</option>
          </select>
        </div>
        <div className="dashboard_btn_container">
          <button type="button">Reset</button>
          <button type="submit">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default DashboardModalFilter;
