import React from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Users from '../component/Users';

type Props = {};

const UserDetails = (props: Props) => {
  React.useEffect(() => {
    document.title = 'Lendsqr | User details';
  }, []);

  return (
    <div>
      <Navbar />
      <section className="flex">
        <Sidebar />
        <Users />
      </section>
    </div>
  );
};

export default UserDetails;
