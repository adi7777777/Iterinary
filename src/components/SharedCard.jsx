import React from "react";
import { Card, CardContent, useTheme } from "@mui/material";

function SharedCard({ children, sx = {}, elevated = true }) {
  const theme = useTheme();
  const gradient = theme?.palette?.gradients?.primary || "linear-gradient(135deg,#667eea 0%,#764ba2 100%)";

  return (
    <Card
      elevation={elevated ? 6 : 0}
      sx={{
        borderRadius: 3,
        background: gradient,
        color: "white",
        boxShadow: elevated ? "0 8px 32px 0 rgba(31, 38, 135, 0.12)" : "none",
        overflow: "hidden",
        ...sx
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>{children}</CardContent>
    </Card>
  );
}

export default SharedCard;
