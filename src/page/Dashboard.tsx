import { useEffect } from 'react';
import DashboardBody from '../component/DashboardBody';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard';

    toast('You are logged in!', {
      icon: '👏',
    });
  }, []);

  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar />
      <section className="flex">
        <Sidebar />
        <DashboardBody />
      </section>
    </>
  );
};

export default Dashboard;
