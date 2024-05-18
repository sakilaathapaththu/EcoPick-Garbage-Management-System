import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const columns = [
  { id: "date", label: "Date", minWidth: 170 },
  { id: "garbageType", label: "Garbage Type", minWidth: 170 },
  {
    id: "totalCapacity",
    label: "Total Capacity",
    minWidth: 170,
    align: "right",
  },
  {
    id: "emptyCapacity",
    label: "Empty Capacity",
    minWidth: 170,
    align: "right",
  },
  {
    id: "filledCapacity",
    label: "Filled Capacity",
    minWidth: 170,
    align: "right",
  },
];

export default function LoadFillingdetails() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [fillingDetails, setFillingDetails] = useState([]);
  const [collectingDetails, setCollectingDetails] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    const fetchFillingDetails = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/Api/GetallfillingdetailsRoutes/alldetails`
        );
        const { fillingDetails } = response.data;
        setFillingDetails(fillingDetails);
      } catch (error) {
        console.error("Error fetching filling details:", error);
      }
    };

    const fetchCollectingDetails = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/Api/GetallcollectingdetailsRoutes/alldetails/collecting`
        );
        const { collectingDetails } = response.data;
        setCollectingDetails(collectingDetails);
      } catch (error) {
        console.error("Error fetching collecting details:", error);
      }
    };

    fetchFillingDetails();
    fetchCollectingDetails();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchDateChange = (event) => {
    setSearchDate(event.target.value);
  };

  const handleSearchByDate = () => {
    const filtered = fillingDetails.filter(record => record.date === searchDate);
    setFilteredRecords(filtered);
  };

  const handleGenerateReport = () => {
    const doc = new jsPDF();
    const pdfColumns = ["Date", "Garbage Type", "Total Capacity", "Empty Capacity", "Filled Capacity"];
    const pdfRows = [];

    let totalFilledCapacityForDay = 0;

    (filteredRecords.length > 0 ? filteredRecords : fillingDetails).forEach((record, index) => {
      pdfRows.push([
        record.date,
        record.garbageType,
        record.totalCapacity,
        record.emptyCapacity,
        record.filledCapacity
      ]);

      totalFilledCapacityForDay += record.filledCapacity;

      const nextRecordDate = (filteredRecords.length > 0 ? filteredRecords : fillingDetails)[index + 1]?.date;
      const currentDate = record.date;

      if (nextRecordDate !== currentDate || index === (filteredRecords.length > 0 ? filteredRecords : fillingDetails).length - 1) {
        pdfRows.push(["Total Filled Capacity", "", "", "", totalFilledCapacityForDay]);
        totalFilledCapacityForDay = 0;
      }
    });

    doc.text("Garbage Filling Report", 10, 10);
    doc.autoTable({
      head: [pdfColumns],
      body: pdfRows,
      startY: 20
    });

    doc.save("garbage_filling_report.pdf");
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{
        mt: 3,
        mb: 2,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by date…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchDate}
            onChange={handleSearchDateChange}
          />
        </Search>
        <Button variant="contained" onClick={handleSearchByDate}  style={{ backgroundColor: '#3EA055', color: '#FFFFFF' }}>Search</Button>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(filteredRecords.length > 0 ? filteredRecords : fillingDetails)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((fillingRow, index) => {
                let totalFilledCapacityForDay = 0; // Initialize total filled capacity for the day here

                const matchingCollectingRow = collectingDetails.find(
                  (collectingRow) => collectingRow.date === fillingRow.date
                );

                return (
                  <React.Fragment key={index}>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      {columns.map((column) => {
                        if (column.id === "garbageType") {
                          const garbageType = matchingCollectingRow && matchingCollectingRow.garbageType
                            ? matchingCollectingRow.garbageType
                            : "";
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {garbageType}
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {fillingRow[column.id]}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                    {(index === (filteredRecords.length > 0 ? filteredRecords : fillingDetails).length - 1 ||
                      fillingRow.date !== (filteredRecords.length > 0 ? filteredRecords : fillingDetails)[index + 1]?.date) && (
                      <TableRow>
                        <TableCell colSpan={columns.length} align="right">
                          Total Filled Capacity: {totalFilledCapacityForDay}
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={(filteredRecords.length > 0 ? filteredRecords : fillingDetails).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleGenerateReport}  style={{ backgroundColor: '#3EA055', color: '#FFFFFF' }}>Generate Report</Button>
      </Box>
    </Paper>
  );
}
