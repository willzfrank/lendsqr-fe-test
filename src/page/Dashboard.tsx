import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import DashboardBody from '../component/DashboardBody';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <section className="flex">
        <Sidebar />
        <DashboardBody />
      </section>
    </>
  );
};

export default Dashboard;
