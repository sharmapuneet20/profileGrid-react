import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  jobCard: {
    boxShadow: '1px 7px 15px rgba(1, 1, 8, 0.2)', // Darker shadow
    borderRadius: '25px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: '#f9f9f9', // Lighter background color
  },
  companyLogo: {
    width: '60px',
    height: 'auto',
    marginRight: '1rem',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'left'
  },
  jobDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  applyButton: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#39efc3',
    '&:hover': {
      backgroundColor: '#39efc3', // Remove hover effect
    }
  },
  refButton:{
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#2a46b9',
    '&:hover': {
      backgroundColor: '#2a46b9', // Remove hover effect
    }
  },
  headerBox: {
    boxShadow: '0px 1px 5px rgba(0.2, 0.3, 3, 0.2)', // Darker shadow
    borderRadius: '20px',
    backgroundColor: 'white',
    marginTop: '3px',
    margin: '1.5rem',
    padding: '2px',
    marginLeft:'-5px',
    width: '55%',
    fontSize: '0.4rem', 
    // fontFamily: 'Varela Round'
  },
  content: {
    fontFamily: 'Varela Round' 
  },
  ViewMoreButton: {
    marginTop: '1rem',
    textAlign:'center'
  },
});

const JobCard = ({ job }) => {
  const classes = useStyles();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className={`${classes.jobCard} `} variant="outlined">
      <CardContent className={classes.content}>
        <div className={classes.headerBox}>
          <Typography variant="subtitle1">⌛ Posted 10 days ago {job.applyDeadline}</Typography>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.imageClass}>
            {job.logoUrl && <img className={classes.companyLogo} src={job.logoUrl} alt={job.companyName} />}
          </div>
          <div className={classes.jobDetails}>
            <Typography color="textSecondary" >
              {job.companyName}
            </Typography>
            <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
              {job.jobRole} 
            </Typography>
            <Typography color="textSecondary" gutterBottom>
             {job.location}
            </Typography>
          </div>
        </div>
        <Typography color="textSecondary" gutterBottom>
          Estimated Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode} ✅
        </Typography>
        <Typography>
          About Company:
        </Typography>
        <Typography>
          About Us
        </Typography>
        <Typography variant="body2" component="p">
          {showFullDescription ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.substring(0, 150)}...`}
        </Typography>
        {job.jobDetailsFromCompany.length > 150 && (
          <Button className={classes.ViewMoreButton} onClick={toggleDescription} color="primary">
            {showFullDescription ? 'View Less' : 'View Job'}
          </Button>
        )}
        <Typography color="textSecondary" gutterBottom>
          Minimum Experience
          <br/>
           {job.minExp} years
        </Typography>
        <Button className={classes.applyButton} variant="contained" color="primary" href={job.jdLink} target="_blank">
          ⚡Easy Apply
        </Button>
        <Button className={classes.refButton} variant="contained" href={job.jdLink} target="_blank">
          Unlock Referral Ads
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
