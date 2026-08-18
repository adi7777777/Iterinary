import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

function BlogCard({ place }) {

  return (

    <Card elevation={3} sx={{ borderRadius: 3, mt: 3, overflow: 'hidden' }}>

      <div style={{ background: 'linear-gradient(90deg,#6d7bf2,#9a73d6)', padding: 14 }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
          About {place}
        </Typography>
      </div>

      <CardContent sx={{ background: '#fff' }}>

        <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#111' }}>
          {place} is a beautiful tourist destination. Here you can enjoy sightseeing, delicious food, local culture, shopping, and adventure activities.
        </Typography>

      </CardContent>

    </Card>

  );

}

export default BlogCard;