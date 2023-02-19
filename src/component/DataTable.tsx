import { useState, useMemo } from 'react';

import Pagination from './Pagination';
import DashboardModalFilter from './DashboardFilter';
import TableHeaderCell from './TableHeaderCell';
import TableDataRow from './TableDataRow';

import '../styles/dashboard_body.scss';

const PAGE_SIZE = 10;

type DasboardTableProps = {
  users: any[];
};

export default function DataTable({ users }: DasboardTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState<null | number>(null);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  const [modalStates, setModalStates] = useState(
    currentTableData.map(() => false)
  );

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <TableHeaderCell
              onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            >
              organization
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            >
              Username
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            >
              Email
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            >
              Phone number
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            >
              Date joined
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            >
              Status
            </TableHeaderCell>
          </tr>
        </thead>
        <tbody onClick={() => setIsFilterModalOpen(false)}>
          {isFilterModalOpen && <DashboardModalFilter />}
          {currentTableData.map((item, index) => (
            <TableDataRow
              key={item.id}
              item={item}
              index={index}
              modalStates={modalStates}
              activeModalIndex={activeModalIndex}
              setModalStates={setModalStates}
              setActiveModalIndex={setActiveModalIndex}
            />
          ))}
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
