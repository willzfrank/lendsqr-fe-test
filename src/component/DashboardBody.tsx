import React from 'react';
import DataTable from './DashboardTable';
import UserCard from './UserCard';
import '../styles/dashboard_body.scss';
import coins_red from '../assets/coins_red.png';
import transactions from '../assets/coin_transaction.png';
import people from '../assets/people.png';
import mixed from '../assets/mixed.png';

type Props = {};

const DashboardBody = (props: Props) => {
  return (
    <div className="dashboard_body_box">
      <h2>Users</h2>
      <div className="flex dashboard_userCard">
        <UserCard
          image={mixed}
          color="#df18ff"
          bgColor="#f2d4f7"
          title="USERS"
          total={2430}
        />
        <UserCard
          image={people}
          color="#5718FF"
          bgColor="#e1d9f8"
          title="ACTIVE USERS"
          total={2430}
        />
        <UserCard
          image={transactions}
          color="#F55F44"
          bgColor="#f6ccc5"
          title="USERS WITH LOANS"
          total={12453}
        />
        <UserCard
          image={coins_red}
          color="#FF3366"
          bgColor="#f6c1ce"
          title="USERS WITH SAVINGS"
          total={102453}
        />
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default DashboardBody;
