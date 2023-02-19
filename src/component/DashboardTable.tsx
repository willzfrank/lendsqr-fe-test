import React, { useState, useMemo, useEffect } from 'react';
import Pagination from '../component/Pagination';
import '../styles/dashboard_body.scss';
import ellipse from '../assets/ellipse.png';
import DashboardModalFilter from './DashboardFilter';
import filter_button from '../assets/filter-results-button.png';
import SmallModal from './SmallModal';

const PAGE_SIZE = 10;

async function fetchUsers() {
  try {
    const response = await fetch(
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function DashboardTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUserData() {
      const data = await fetchUsers();
      setUsers(data);
    }

    fetchUserData();
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const [modalStates, setModalStates] = useState(
    currentTableData.map(() => false)
  );

  const toggleModal = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);

    if (activeModalIndex === index) {
      setActiveModalIndex(null);
    } else {
      setActiveModalIndex(index);
    }
  };

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <th>
              organization
              <img
                src={filter_button}
                alt=""
                className="filter_button"
                onClick={() => setIsOpened(!isOpened)}
              />
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
        <tbody onClick={() => setIsOpened(false)}>
          {isOpened && <DashboardModalFilter />}
          {currentTableData.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.orgName?.length > 20
                    ? item.orgName.slice(0, 15) + '...'
                    : item.orgName}
                </td>
                <td>{item.userName}</td>
                <td>
                  {item.email?.length > 20
                    ? item.email.slice(0, 15) + '...'
                    : item.email}
                </td>
                <td>{item.phoneNumber}</td>
                <td>{item.createdAt}</td>
                <td>Active</td>
                <td className="modal_container">
                  {activeModalIndex === index && modalStates[index] && (
                    <SmallModal itemId={item.id} />
                  )}
                  <img
                    src={ellipse}
                    onClick={() => {
                      const newModalStates = [...modalStates];
                      newModalStates[index] = !newModalStates[index];
                      setModalStates(newModalStates);
                      if (activeModalIndex === index) {
                        setActiveModalIndex(null);
                      } else {
                        setActiveModalIndex(index);
                      }
                    }}
                  />
                </td>
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
    </div>
  );
}
