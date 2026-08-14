import {
  Pagination as MuiPagination,
  Stack,
  Typography
} from "@mui/material";

function PaginationComponent({
  currentPage,
  setCurrentPage
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
        Travel Plan
      </Typography>

      <MuiPagination
        count={3}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
      />

    </Stack>

  );

}

export default PaginationComponent;