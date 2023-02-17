import React from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

type Props = {};

const UserDetails = (props: Props) => {
  return (
    <div>
      <Navbar />
      <section className="flex">
        <Sidebar />
      </section>
    </div>
  );
};

export default UserDetails;
