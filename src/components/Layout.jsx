import { Container } from "@mui/material";

function Layout({ children, maxWidth = "md", sx = {} }) {
  return (
    <Container maxWidth={maxWidth} sx={{ px: { xs: 2, md: 0 }, ...sx }}>
      {children}
    </Container>
  );
}

export default Layout;
