import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { PrismaClient } from '@prisma/client';
import { useMemo, useState } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import GlassCard from '../utils/GlassCard';
import BranchEnhancedTable from './BranchEnhancedTable';

const BranchList = ({ branches }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState({
    isOpen: false,
    id: ''
  });

  // console.log({ branches });
  // const getBranches = branches?.map(branch => ({ ...branch }));

  // console.log({ getBranches });

  const branchCols = [
    {
      Header: 'Branch Name',
      accessor: 'branchName',
      width: '70rem'
    },

    {
      Header: 'Branch Code',
      accessor: 'branchCode',
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
            <Tooltip title="Update Branch">
              <IconButton onClick={() => handleUpdatePopupOpen(rowIdx)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Branch">
              <IconButton onClick={() => handleDeletePopupOpen(rowIdx)}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    }
  ];

  const columns = useMemo(() => branchCols, []);
  const branchData = useMemo(() => branches, []);

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
        <BranchEnhancedTable
          columns={columns}
          data={branchData}
          title="List of Branches"
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
  //  const apolloClient = initializeApollo();
  // const getAllBranches = await apolloClient.query({
  //   query: AllBranchesDocument
  // });
  // console.log({ getAllBranches });
  const allBranches = await prisma.branch.findMany({
    orderBy: [{ branchName: 'asc' }, {branchCode: 'asc'}]
  });

  const stringifiedData = safeJsonStringify(allBranches);
  const branches = JSON.parse(stringifiedData);
  return { props: { branches } };
};

export default BranchList;
