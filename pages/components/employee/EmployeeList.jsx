import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { PrismaEmployee } from '@prisma/employee';
import { useMemo, useState } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import GlassCard from '../utils/GlassCard';
import EmployeeEnhancedTable from './EmployeeEnhancedTable';

const EmployeeList = ({ employees }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState({
    isOpen: false,
    id: ''
  });

  console.log({ employees });
  const getEmployees = employees?.map(employee => ({ ...employee }));

  console.log({ getEmployees });

  const employeeCols = [
    {
      Header: 'Employee Name',
      accessor: 'employeeNames',
      width: '70rem'
    },

    {
      Header: 'Phone',
      accessor: 'employeePhoneNumb',
      width: '10rem'
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
            <Tooltip title="Update Employee">
              <IconButton onClick={() => handleUpdatePopupOpen(rowIdx)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Employee">
              <IconButton onClick={() => handleDeletePopupOpen(rowIdx)}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    }
  ];

  const columns = useMemo(() => employeeCols, []);
  const employeeData = useMemo(() => getEmployees, []);

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
        <EmployeeEnhancedTable
          columns={columns}
          data={employeeData}
          title="List of Employees"
          handleUpdatePopupChange={handleUpdatePopupChange}
          isUpdatePopupOpen={isUpdatePopupOpen}
          isDeletePopupOpen={isDeletePopupOpen}
          handleDeletePopupChange={handleDeletePopupChange}
        />
      </GlassCard>
    </div>
  );
};

const prisma = new PrismaEmployee();

export const getStaticProps = async () => {
  const allEmployees = await prisma.employee.findMany({
    orderBy: [{ employeeNames: 'asc' }, { employeePhoneNumb: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allEmployees);
  const employees = JSON.parse(stringifiedData);
  return { props: { employees } };
};

export default EmployeeList;
