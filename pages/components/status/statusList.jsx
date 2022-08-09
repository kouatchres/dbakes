import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { PrismaClient } from '@prisma/client';
import React, { useMemo, useState } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import GlassCard from '../utils/GlassCard';
import EmployeeStatuseEnhancedTable from './statusEnhancedTable';

const EmployeeStatuseList = ({ employeeStatuses }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState({
    isOpen: false,
    id: ''
  });

  const getEmployeeStatuses = employeeStatuses?.map(employeeStatus => ({
    ...employeeStatus
  }));

  console.log({ getEmployeeStatuses });

  const employeeStatusCols = [
    {
      Header: 'Status',
      accessor: 'status',
      width: '70rem'
    },

    {
      Header: 'Actions',
      accessor: 'actions',
      width: '20rem',
      Cell: props => {
        const rowIdx = props.row.original.id;
        console.log({ props });
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '1rem'
            }}
          >
            <Tooltip title="Update EmployeeStatuse">
              <IconButton onClick={() => handleUpdatePopupOpen(rowIdx)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete EmployeeStatuse">
              <IconButton onClick={() => handleDeletePopupOpen(rowIdx)}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    }
  ];

  const columns = useMemo(() => employeeStatusCols, []);
  const employeeStatusData = useMemo(() => getEmployeeStatuses, []);

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setPageSize(Number(event.target.value));
  };

  const handleAddPopupChange = () => {
    setIsAddPopupOpen(!isAddPopupOpen);
  };

  const handleUpdatePopupChange = () => {
    setIsUpdatePopupOpen(!isUpdatePopupOpen.isOpen);
  };

  const handleDeletePopupChange = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen.isOpen);
  };

  const handleUpdatePopupOpen = id => {
    setIsUpdatePopupOpen({ id: id, isOpen: true });
  };

  const handleDeletePopupOpen = id => {
    setIsDeletePopupOpen({ id: id, isOpen: true });
  };

  return (
    <div>
      <GlassCard blur={3} minWidth="15rem" maxWidth="50rem">
        <EmployeeStatuseEnhancedTable
          columns={columns}
          data={employeeStatusData}
          title="List of EmployeeStatuses"
          handleUpdatePopupChange={handleUpdatePopupChange}
          isUpdatePopupOpen={isUpdatePopupOpen}
          isDeletePopupOpen={isDeletePopupOpen}
          handleDeletePopupChange={handleDeletePopupChange}
        />
      </GlassCard>
    </div>
  );
};

const prisma = new PrismaClient();

export const getStaticProps = async () => {
  const allStatuses = await prisma.employeeStatus.findMany({
    orderBy: [{ status: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allStatuses);
  const employeeStatuses = JSON.parse(stringifiedData);
  return { props: { employeeStatuses } };
};

export default EmployeeStatuseList;
