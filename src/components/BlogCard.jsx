import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

function BlogCard({ place }) {

  return (

    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        mt: 3
      }}
    >

      <CardContent>

        <Typography
          variant="h5"
          color="primary"
          gutterBottom
        >
          About {place}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 2,
          }}
        >
          {place} is a beautiful tourist destination.

          Here you can enjoy sightseeing,

          delicious food,

          local culture,

          shopping,

          and adventure activities.
        </Typography>
      </CardContent>

    </Card>

  );

}

export default BlogCard;