import {
  Pagination as MuiPagination,
  Stack,
  Typography
} from "@mui/material";

function PaginationComponent({
  currentPage,
  setCurrentPage,
  totalDays = 3
}) {

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (

    <Stack spacing={2} alignItems="center" sx={{ mt: 4, mb: 4 }}>

      <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
        Day {currentPage} of {totalDays}
      </Typography>

      <MuiPagination
        count={totalDays}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        size="large"
        sx={{ '& .Mui-selected': { background: 'linear-gradient(90deg,#6d7bf2,#9a73d6)' } }}
      />

    </Stack>

  );

}

export default PaginationComponent;