import React from "react";
import LazyLoad from "react-lazyload";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import building from "../../Assets/building.png";
import "./Profile.css";
import { Divider, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  parent: {
    margin: "auto",
  },
  media: {
    height: 140,
  },
  card: {
    height: `100%`,
    display: "flex",
    flexDirection: "column",
    margin: 20,
    width: "800px",
    paddingLeft:"1rem !important",
    paddingRight:"1rem important"
  },

  cardMedia: {
    paddingTop: "20%",
  },
  cardContent: {
    flexGrow: 1,
    color: "grey",
    paddingBottom:"15px !important"
  },
  
});
const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);
const Profile = ({ name, phone, email, id }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container xs={12} sm={6} md={4} className={classes.parent}>
      <Card className={classes.card}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "8rem" }}>
            <LazyLoad height={10000}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={<SmallAvatar src={building} alt="bi" />}
              >
                <Avatar
                  style={{ height: 100, width: 100, borderRadius: "50%" }}
                  src={`https://avatars.dicebear.com/api/male/${name}.svg?background=%230000ff`}
                  alt={name}
                />
              </Badge>
            </LazyLoad>
          </div>

          <div className={classes.data} style={{ width: "50%" }}>
            <Typography
              gutterBottom
              variant="body"
              component="h2"
              style={{ fontWeight: "600" }}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body"
              component="h4"
              style={{ color: "grey" }}
            >
              {email}
            </Typography>
            <Typography
              gutterBottom
              variant="body"
              component="h4"
              style={{ color: "grey" }}
            >
              {phone}
            </Typography>
          </div>
        </div>

        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <BusinessCenterIcon />&nbsp;&nbsp;
            Account Manager &nbsp;<FiberManualRecordIcon style={{fontSize:"0.5rem"}}/>&nbsp; Marketing
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <LocationOnIcon />&nbsp;&nbsp;
            Building B&nbsp;<FiberManualRecordIcon style={{fontSize:"0.5rem"}} />&nbsp;2&nbsp;<FiberManualRecordIcon style={{fontSize:"0.5rem"}}/>&nbsp;151C
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <LinkIcon />&nbsp;&nbsp;
            Direcory&nbsp;<FiberManualRecordIcon style={{fontSize:"0.5rem"}}/> &nbsp;Google+<FiberManualRecordIcon style={{fontSize:"0.5rem"}}/>&nbsp;Personal Site
          </Typography>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Button color="primary">Add To Contacts</Button>

            <Button
              variant="contained"
              onClick={() => history.push(`/user/${id}`)}
              size="small"
              color="primary"
            >
              View
            </Button>
          </div>
        </CardContent>
        {/* <CardActions>
          
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Profile;
