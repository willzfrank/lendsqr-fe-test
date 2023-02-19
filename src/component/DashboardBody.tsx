import { useEffect, useState } from 'react';

import UserCard from './UserCard';

import coinsRedImg from '../assets/coins_red.png';
import transactionsImg from '../assets/coin_transaction.png';
import peopleImg from '../assets/people.png';
import mixedImg from '../assets/mixed.png';

import '../styles/dashboard_body.scss';
import DataTable from './DataTable';

type UserCard = {
  image: string;
  color: string;
  bgColor: string;
  title: string;
  total: number;
};

const userCards: UserCard[] = [
  {
    image: mixedImg,
    color: '#df18ff',
    bgColor: '#f2d4f7',
    title: 'USERS',
    total: 2430,
  },
  {
    image: peopleImg,
    color: '#5718FF',
    bgColor: '#e1d9f8',
    title: 'ACTIVE USERS',
    total: 2430,
  },
  {
    image: transactionsImg,
    color: '#F55F44',
    bgColor: '#f6ccc5',
    title: 'USERS WITH LOANS',
    total: 12453,
  },
  {
    image: coinsRedImg,
    color: '#FF3366',
    bgColor: '#f6c1ce',
    title: 'USERS WITH SAVINGS',
    total: 102453,
  },
];

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch users.');
  }
}

const DashboardBody: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchUserData();
  }, []);

  return (
    <div className="dashboard-body">
      <h2>Users</h2>
      <div className="dashboard-user-cards">
        {userCards.map((card, index) => (
          <UserCard
            key={index}
            image={card.image}
            bgColor={card.bgColor}
            title={card.title}
            total={card.total}
          />
        ))}
      </div>
      {isLoading ? (
        <div className="center">Loading ...</div>
      ) : (
        <DataTable users={users} />
      )}
    </div>
  );
};

export default DashboardBody;
