import { useState } from 'react';

import SmallModal from './SmallModal';
import ellipse from '../assets/ellipse.png';

type TableDataRowProps = {
  item: {
    id: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
  };
  index: number;
  modalStates: boolean[];
  setModalStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  activeModalIndex: number | null;
  setActiveModalIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const TableDataRow = ({
  item,
  index,
  modalStates,
  activeModalIndex,
  setModalStates,
  setActiveModalIndex,
}: TableDataRowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleModal = () => {
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);
    setActiveModalIndex(activeModalIndex === index ? null : index);
  };

  const statusOptions = ['Active', 'Inactive', 'Pending', 'Blacklisted'];
  const randomStatus =
    statusOptions[Math.floor(Math.random() * statusOptions.length)];

  let backgroundColor,
    color = '';
  switch (randomStatus) {
    case 'Active':
      backgroundColor = '#f2faf4';
      color = '#39CD62';
      break;
    case 'Inactive':
      backgroundColor = '#c6c8d0';
      color = '#545F7D';
      break;
    case 'Pending':
      backgroundColor = '#f6eed5';
      color = '#E9B200';
      break;
    case 'Blacklisted':
      backgroundColor = '#efcdd5';
      color = '#E4033B';
      break;
    default:
      backgroundColor = 'white';
  }

  return (
    <tr key={item.id}>
      <td>
        {item.orgName.length > 20
          ? `${item.orgName.slice(0, 15)}...`
          : item.orgName}
      </td>
      <td>{item.userName}</td>
      <td>
        {item.email.length > 20 ? `${item.email.slice(0, 15)}...` : item.email}
      </td>
      <td>{item.phoneNumber}</td>
      <td>{item.createdAt}</td>
      <td className="table-status">
        <p style={{ backgroundColor, color }}>{randomStatus}</p>
      </td>
      <td
        className="modal_container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {(activeModalIndex === index && modalStates[index]) || isHovered ? (
          <SmallModal itemId={item.id} />
        ) : null}
        <img src={ellipse} alt="Ellipse" onClick={handleToggleModal} />
      </td>
    </tr>
  );
};

export default TableDataRow;
