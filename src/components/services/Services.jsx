import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="https://www.w3care.com/images/uploads/services/logo-banner.png"
            alt="green iguana"
            sx={{objectFit: "cover"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Logo Design
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Build your Brand
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="data:image/png;base64,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"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              WordPress
            </Typography>
            <Typography variant="body2" color="text.secondary">
             customize your team
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="https://www.technologyhq.org/wp-content/uploads/2021/02/it-services.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Social Media
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reach more customers
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Services;