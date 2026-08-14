import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CostTable from "./CostTable";

function CostAccordion() {
  return (
    <Accordion
      elevation={3}
      sx={{
        mt: 3,
        borderRadius: 2,
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" color="primary">
          💰 Cost Breakdown
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <CostTable />
      </AccordionDetails>
    </Accordion>
  );
}
export default CostAccordion;