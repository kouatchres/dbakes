import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { PrismaClient } from '@prisma/client';
import React, { useMemo, useState } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import { calcClientTotal, totalQttySold } from '../utils/Functions';
import GlassCard from '../utils/GlassCard';
import CartItemEnhancedTable from './CartEnhancedTable';

const CartItemList = ({ clientCartItems, query }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const annClientItem = clientCartItems?.AnnualClient?.annualClientId;

  const getCartItems = clientCartItems?.map(cartItem => ({
    productName: cartItem?.Product?.pdtName,
    clientName: cartItem?.AnnualClient?.Client?.clientNames,
    ...cartItem
  }));

  console.log({ getCartItems });
  const getClientFullName =
    getCartItems[0] && getCartItems[0]?.AnnualClient?.Client?.clientNames;
  console.log({ getClientFullName });
  const cartItemCols = [
    {
      Header: 'Product',
      accessor: 'productName',
      width: '40rem'
    },

    {
      Header: 'Price',
      accessor: 'salesPrice',
      width: '20rem'
    },
    {
      Header: 'Quantity',
      accessor: 'qtty',
      width: '10rem'
    },

    {
      Header: 'Actions',
      accessor: 'actions',
      width: '30rem',
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
            <Tooltip title="Update Cart">
              <IconButton onClick={() => handleUpdatePopupOpen(rowIdx)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Cart">
              <IconButton onClick={() => handleDeletePopupOpen(rowIdx)}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    }
  ];

  const columns = useMemo(() => cartItemCols, []);
  const clientCartItemData = useMemo(() => getCartItems, []);

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
    calcClientTotal(clientCartItemData);
    totalQttySold(clientCartItemData);
  };

  const handleUpdatePopupOpen = id => {
    setIsUpdatePopupOpen({ id: id, isOpen: true });
    calcClientTotal(clientCartItemData);
    totalQttySold(clientCartItemData);
  };

  const handleDeletePopupOpen = id => {
    setIsDeletePopupOpen({ id: id, isOpen: true });
  };

  return (
    <div>
      <GlassCard blur={3} minWidth="15rem" maxWidth="70rem" id="pdfdiv">
        <CartItemEnhancedTable
          columns={columns}
          data={clientCartItemData}
          title={`${getClientFullName}'s cart`}
          handleUpdatePopupChange={handleUpdatePopupChange}
          isUpdatePopupOpen={isUpdatePopupOpen}
          isDeletePopupOpen={isDeletePopupOpen}
          handleDeletePopupChange={handleDeletePopupChange}
          calcClientTotal={calcClientTotal(clientCartItemData)}
          totalQttySold={totalQttySold(clientCartItemData)}
          annualClientId={getCartItems[0]?.AnnualClient?.id}
          annualBranchEmployeeId={getCartItems[0]?.annualBranchEmployeeId}
        />
      </GlassCard>
    </div>
  );
};

const prisma = new PrismaClient();

export const getServerSideProps = async ({ query }) => {
  const annualClientID = query && query?.annualClientId;
  const annualBranchEmployeeID = query?.annualBranchEmployeeId;

  console.log('this is the query details');
  console.log({ query });
  const getClientCart = await prisma.cart.findMany({
    where: {
      annualClientId: annualClientID,
      annualBranchEmployeeId: annualBranchEmployeeID
    },
    include: {
      Product: true,
      AnnualClient: {
        include: {
          FinancialYear: true,
          Client: true
        }
      }
    }
  });

  const stringifiedData = safeJsonStringify(getClientCart);
  const clientCartItems = JSON.parse(stringifiedData);
  return { props: { clientCartItems } };
};

export default CartItemList;
