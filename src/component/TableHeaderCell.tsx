import React from 'react';
import filter_button from '../assets/filter-results-button.png';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const TableHeaderCell = ({ children, onClick }: Props) => {
  return (
    <th onClick={onClick}>
      {children}
      <img src={filter_button} alt="" className="filter_button" />
    </th>
  );
};

export default TableHeaderCell;
