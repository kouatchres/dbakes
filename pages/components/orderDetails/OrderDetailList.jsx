import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { PrismaClient } from '@prisma/client';
import React, { useMemo, useState } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import GlassCard from '../utils/GlassCard';
import ClientEnhancedTable from './OrderDetailEnhancedTable';

const ClientList = ({ clients }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState({
    isOpen: false,
    id: ''
  });

  console.log({ clients });
  const getClients = clients?.map(client => ({ ...client }));

  console.log({ getClients });

  const clientCols = [
    {
      Header: 'Client Name',
      accessor: 'clientNames',
      width: '70rem'
    },

    {
      Header: 'Phone',
      accessor: 'clientPhoneNumb',
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
            <Tooltip title="Update Client">
              <IconButton onClick={() => handleUpdatePopupOpen(rowIdx)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Client">
              <IconButton onClick={() => handleDeletePopupOpen(rowIdx)}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    }
  ];

  const columns = useMemo(() => clientCols, []);
  const clientData = useMemo(() => getClients, []);

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
        <ClientEnhancedTable
          columns={columns}
          data={clientData}
          title="List of Clients"
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
  const allClients = await prisma.client.findMany({
    orderBy: [{ clientNames: 'asc' }, { clientPhoneNumb: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allClients);
  const clients = JSON.parse(stringifiedData);
  return { props: { clients } };
};

export default ClientList;
