import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useEffect, useState } from 'react';
import {Api_url} from "../../Api_url/Api_Url";

export default function Dashcard() {

    const [jobs, setJobs] = useState({});

    const getEmployees = async () => {
        const response = await fetch(`${Api_url}/getwork`);
        const data = await response.json();
        setJobs(data);
    }
     
    useEffect(() => {
    getEmployees();
    }, []);

  return (
    <div>
        <Link to="/dashboard/add" className='link' >
        <Button variant="outlined" style={{marginBottom: "10px"}} startIcon={<AddCircleOutlineIcon />}>
        Add Job
      </Button>
      </Link>
      {jobs.map((job) => (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={job.propic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {job.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job.work}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        
      </CardActions>
    </Card>
      ))}
    </div>
  );
}
