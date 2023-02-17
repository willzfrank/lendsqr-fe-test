import React, { useState, useMemo, useEffect } from 'react';
import Pagination from '../component/Pagination';
import '../styles/dashboard_body.scss';
import filter_button from '../assets/filter-results-button.png';

type User = {
  id: number;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    avatar: string;
    gender: string;
    bvn: number;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: number;
  accountNumber: number;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: ['128.57', '118.07'];
    loanRepayment: string;
  };
};

const PAGE_SIZE = 10;

export default function DashboardTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              organization
              <img src={filter_button} alt="" className="filter_button" />
            </th>
            <th>
              Username
              <img src={filter_button} alt="" className="filter_button" />
            </th>
            <th>
              {' '}
              Email
              <img src={filter_button} alt="" className="filter_button" />
            </th>
            <th>
              Phone number
              <img src={filter_button} alt="" className="filter_button" />
            </th>
            <th>
              Date joined
              <img src={filter_button} alt="" className="filter_button" />
            </th>
            <th>
              Status
              <img src={filter_button} alt="" className="filter_button" />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.orgName.length > 20
                    ? item.orgName.slice(0, 15) + '...'
                    : item.orgName}
                </td>
                <td>{item.userName}</td>
                <td>
                  {item.email.length > 20
                    ? item.email.slice(0, 15) + '...'
                    : item.email}
                </td>

                <td>{item.phoneNumber}</td>
                <td>{item.createdAt}</td>
                <td>Active</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
