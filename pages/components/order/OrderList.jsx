import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { PrismaClient } from '@prisma/client';
import React, { useMemo, useState } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import GlassCard from '../utils/GlassCard';
import ProductEnhancedTable from './OrderEnhancedTable';

const ProductList = ({ products }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState({
    isOpen: false,
    id: ''
  });

  console.log({ products });
  const getProducts = products?.map(product => ({ ...product }));

  console.log({ getProducts });

  const pdtCols = [
    {
      Header: 'Pdt Name',
      accessor: 'pdtName',
      width: '40rem'
    },
    {
      Header: 'Pdt Code',
      accessor: 'pdtCode',
      width: '10rem'
    },
    {
      Header: 'Price',
      accessor: 'unitPrice',
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
            <Tooltip title="Update Product">
              <IconButton onClick={() => handleUpdatePopupOpen(rowIdx)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Product">
              <IconButton onClick={() => handleDeletePopupOpen(rowIdx)}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    }
  ];

  const columns = useMemo(() => pdtCols, []);
  const productData = useMemo(() => getProducts, []);

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
        <ProductEnhancedTable
          columns={columns}
          data={productData}
          title="List of Products"
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
  const allProducts = await prisma.product.findMany({
    orderBy: [{ pdtName: 'asc' }, { pdtCode: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allProducts);
  const products = JSON.parse(stringifiedData);
  return { props: { products } };
};

export default ProductList;
