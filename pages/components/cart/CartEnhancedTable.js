import { Button, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table';
import { useDeleteACartMutation } from '../../../generated/graphql';
import DisplayError from '../../ErrorMessage';
import RouterLink from '../layout/routerLink';
import CreateOrder from '../order/createOrder';
import TablePaginationActions from '../table/TablePaginationActions';
import TableToolbar from '../table/TableToolbar';
import AddPopup from '../utils/AddPopup';
import ConfirmDialog from '../utils/ConfirmDialog';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import UpdatePopup from '../utils/UpdatePopup';
import UpdateCartItem from './UpdateCartItem';

const useStyles = makeStyles(theme =>
  createStyles({
    roundedHead: {
      '& th': {
        color: SygefexTheme?.palette?.common?.black,
        fontSize: '1.3rem'
      },
      '& th:first-child': {
        borderTopLeftRadius: '0.3rem'
      },
      '& th:last-child': {
        borderTopRightRadius: '0.3rem'
      }
    }
  })
);

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const inputStyle = {
  padding: 0,
  margin: 0,
  border: 0,
  background: 'transparent'
};

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  // If the initialValue is changed externall, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <input style={inputStyle} value={value} onChange={onChange} />;
};

EditableCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any.isRequired
  }),
  row: PropTypes.shape({
    index: PropTypes.number.isRequired
  }),
  column: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  updateMyData: PropTypes.func.isRequired
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell
};

const numberFormatter = Intl.NumberFormat('en-US');
const CartEnhancedTable = ({
  columns,
  data,
  isUpdatePopupOpen,
  isDeletePopupOpen,
  handleUpdatePopupChange,
  handleDeletePopupChange,
  title,
  calcClientTotal,
  totalQttySold,
  annualBranchEmployeeId,
  annualClientId
}) => {
  const classes = useStyles();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter }
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setPageSize(Number(event.target.value));
  };

  const handleAddPopupChange = () => {
    setIsAddPopupOpen(!isAddPopupOpen);
  };

  const [deleteACartMutation, { data: dataCartDelete, loading, error }] =
    useDeleteACartMutation();

  const handleDeleteCartConfirm = () => {
    deleteACartMutation({
      variables: { where: { id: isDeletePopupOpen.id } }
    });

    setNotify({
      isOpen: true,
      message: 'Cart item sucessfully deleted',
      type: 'success'
    });
    handleDeletePopupChange();
  };
  //  const newTitle= `title ${}`
  const printReport = () => {
    const input = document?.getElementById('pdfdiv');
    html2canvas(input).then(canvas => {
      var imgWidth = 200;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      pdf.save();
    });
  };
  return (
    <TableContainer style={{ paddingBottom: '1rem' }}>
      <DisplayError error={error} />

      <TableToolbar
        numSelected={Object.keys(selectedRowIds).length}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        handleAddPopupChange={handleAddPopupChange}
        globalFilter={globalFilter}
        title={title}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          alignItems: 'center'
        }}
      >
        <Typography
          // color="primary"
          gutterBottom
          variant="h5"
          component="h6"
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 'clamp(0.6rem, 3vw + 0.5rem, 1.1rem)'
          }}
        >
          <div>
            <RouterLink
              href={{
                pathname: '/components/cart/moreToCart',
                query: {
                  annualClientId: annualClientId,
                  annualBranchEmployeeId: annualBranchEmployeeId
                }
              }}
              passHref
              size="sm"
            >
              Add to cart
            </RouterLink>
          </div>
        </Typography>
        <Typography
          // color="primary"
          gutterBottom
          variant="h5"
          component="h6"
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 'clamp(0.6rem, 3vw + 0.5rem, 1.1rem)'
          }}
        >
          <div>
            <RouterLink
              href={{
                pathname: '/components/order/createOrder',
                query: {
                  annualClientId: annualClientId,
                  annualBranchEmployeeId: annualBranchEmployeeId
                }
              }}
              passHref
            >
              Confirm order
            </RouterLink>
          </div>
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          component="h6"
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 'clamp(0.6rem, 3vw + 0.5rem, 1.1rem)'
          }}
        >
          Total={numberFormatter.format(calcClientTotal)} XAF
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h6"
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 'clamp(0.6rem, 3vw + 0.5rem, 1.1rem)'
          }}
        >
          Qtty={numberFormatter.format(totalQttySold)} Kg
        </Typography>
      </div>
      <MaUTable {...getTableProps()}>
        <TableHead className={classes.roundedHead}>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
                  {...(column.id === 'selection'
                    ? column.getHeaderProps({
                        style: {
                          fontSize: '0.8rem',
                          width: column?.width
                        }
                      })
                    : column.getHeaderProps(column?.getSortByToggleProps()))}
                >
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell
                      {...cell.getCellProps({
                        style: {
                          fontSize: '0.8rem',
                          width: cell.column.width
                        }
                      })}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                3,
                50,
                85,
                95,
                150,
                200,
                250,
                { label: 'All', value: data.length }
              ]}
              colSpan={5}
              count={data.length}
              rowsPerPage={pageSize}
              page={pageIndex}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
          <Button
            styles={{ backgroundColor: 'primary', color: 'seocondary' }}
            onClick={printReport}
          >
            Generate Pdf
          </Button>
        </TableFooter>

        <ConfirmDialog
          title="Cart Deletion"
          content="Do you realy wanto delete this item from the cart"
          isOpen={isDeletePopupOpen.isOpen}
          onClose={handleDeletePopupChange}
          onConfirm={handleDeleteCartConfirm}
        />
        <AddPopup
          maxWidth="sm"
          title="New Cart"
          isOpen={isAddPopupOpen}
          onClose={handleAddPopupChange}
        >
          <CreateOrder />
        </AddPopup>

        <UpdatePopup
          title="Update cart item"
          isOpen={isUpdatePopupOpen.isOpen}
          onClose={handleUpdatePopupChange}
        >
          <UpdateCartItem id={isUpdatePopupOpen.id} />
        </UpdatePopup>
      </MaUTable>
      <Notification notify={notify} setNotify={setNotify} />
    </TableContainer>
  );
};
export default CartEnhancedTable;
