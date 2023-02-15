import React from 'react';
import DataTable from './DashboardTable';
import UserCard from './UserCard';
import '../styles/dashboard_body.scss';

type Props = {};

const DashboardBody = (props: Props) => {
  return (
    <div className="dashboard_body_box">
      <h2>Users</h2>
      <div className="flex dashboard_userCard">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default DashboardBody;
