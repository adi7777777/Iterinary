import { Typography } from "@mui/material";
import SharedCard from "./SharedCard";

function BlogCard({ place }) {
  return (
    <SharedCard sx={{ mt: 3, overflow: "hidden" }}>
      <div style={{ background: "linear-gradient(90deg,#6d7bf2,#9a73d6)", padding: 14, borderRadius: 8, margin: -14, marginBottom: 8 }}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
          About {place}
        </Typography>
      </div>

      <div style={{ background: "#fff", padding: 16, borderRadius: 8, marginTop: 8 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#111" }}>
          {place} is a beautiful tourist destination. Here you can enjoy sightseeing, delicious food, local culture, shopping, and adventure activities.
        </Typography>
      </div>
    </SharedCard>
  );
}

export default BlogCard;