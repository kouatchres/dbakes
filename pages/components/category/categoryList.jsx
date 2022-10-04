import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { PrismaClient } from '@prisma/client';
import { useMemo, useState } from 'react';

import safeJsonStringify from 'safe-json-stringify';
import GlassCard from '../utils/GlassCard';
import CategoryEnhancedTable from './categoryEnhancedTable';

const CategoryList = ({ categories }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState({
    isOpen: false,
    id: ''
  });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState({
    isOpen: false,
    id: ''
  });

  console.log({ categories });
  const getCategories = categories?.map(category => ({ ...category }));

  console.log({ getCategories });

  const categoryCols = [
    {
      Header: 'Category Name',
      accessor: 'categoryName',
      width: '70rem'
    },

    {
      Header: 'Phone',
      accessor: 'categoryCode',
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
            <Tooltip title="Update Category">
              <IconButton onClick={() => handleUpdatePopupOpen(rowIdx)}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Category">
              <IconButton onClick={() => handleDeletePopupOpen(rowIdx)}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    }
  ];

  const columns = useMemo(() => categoryCols, []);
  const categoryData = useMemo(() => getCategories, []);

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
        <CategoryEnhancedTable
          columns={columns}
          data={categoryData}
          title="List of Categorys"
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
  const allCategories = await prisma.category.findMany({
    orderBy: [{ categoryName: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allCategories);
  const categories = JSON.parse(stringifiedData);
  return { props: { categories } };
};

export default CategoryList;
