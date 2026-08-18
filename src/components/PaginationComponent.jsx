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

    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        mt: 4,
        mb: 4
      }}
    >

      <Typography variant="h6">
        Day {currentPage} of {totalDays}
      </Typography>

      <MuiPagination
        count={totalDays}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        size="large"
      />

    </Stack>

  );

}

export default PaginationComponent;