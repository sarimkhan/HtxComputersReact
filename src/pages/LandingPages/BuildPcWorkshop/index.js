import sheetdb from "sheetdb-node";
import './workshopStyle.css'

import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/BuildPcWorkshop/sections/Information";
import Team from "./sections/Team";
import FAQ from "./sections/Faq";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/computerbanner.PNG";

function BuildPcWorkshop() {
const [formOpen, setFormOpen] = useState(false)
const [successDialog, setSuccessDialog] = useState(false)
const [loading, setLoading] = useState(false)
const [enrolledTeenName, setenrolledTeenName] = useState("")
const [enrolledEmail, setenrolledEmail] = useState("")
var config = {
  address: 'lmrht3p7ssu0r',
};

// Create new client
var client = sheetdb(config);

const handleForm = () => {
  if(formOpen){
    setFormOpen(false)
  }
  else{
    setFormOpen(true)
  }
}
const handleClose = () => {
  setFormOpen(false);
};
const handleSubmit = (event) => {
  const formData = new FormData(event.currentTarget.parentNode.parentNode);
  const formJson = Object.fromEntries(formData.entries());
  const email = formJson.email;
  const parentName = formJson.ParentName;
  const phone = formJson.phone;
  const teenName = formJson.TeenName;
  const teenAge = formJson.TeenAge;
  setenrolledTeenName(teenName)
  setenrolledEmail(email)
  setLoading(true)
  try{
    client.create({ 
      ParentName: parentName, 
      TeenName: teenName,
      TeenAge: teenAge,
      ParentEmail: email,
      ParentPhone: phone
    }, "Students").then(()=>{
    setLoading(false)
    handleClose();
    setSuccessDialog(true)
    })
  }
  catch(ex){
    alert(ex.data)
  }
  
}


  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Build A PC Workshop
            </MKTypography>
            <MKTypography variant="h4" color="white" mt={2}>
              Build, Configure, and Take Home!
            </MKTypography>
            <MKTypography variant="h4" color="white" mt={2}>
              For <span style={{color:"gold"}}>$200</span> Only
            </MKTypography>
            <MKButton onClick={handleForm} color="default" sx={{ color: ({ palette: { dark } }) => dark.main, my:3 }}>
              Enroll Now For Only $200 
            </MKButton>
            <MKBox display="flex" justifyContent="center" alignItems="center">
          <b style={{marginTop:"10px", color:"white"}}>For Teens (13 - 17)</b>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <FAQ/>
        <Grid container justifyContent={"center"} mb={20}>
        <MKButton onClick={handleForm} color="info" sx={{ color: ({ palette: { light } }) => light.main, my:3 }}>
              Enroll Now For Only $200 
            </MKButton>
        </Grid>
        
        <Dialog
        open={formOpen}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Enroll your Teen</DialogTitle>
        <DialogContent>
          {loading ? <div className="loadingDiv">
            <p style={{marginTop:"40%", color:"black"}}><b>Enrolling....</b></p>
          </div> : ''}
          <DialogContentText>
            We value your personal data and understand how much your privacy means to you. We never share or sell your data.
          </DialogContentText>
          <Grid Container>
              <Grid item lg={3} md={6} sm={12}>
              <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="ParentName"
            label="Your Name"
            type="text"
            fullWidth
            variant="standard"
          />
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
              <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
              <TextField
            required
            margin="dense"
            id="phone"
            name="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
          />
          </Grid>
          <Grid item lg={3} md={6} sm={12}>
              <TextField
            required
            margin="dense"
            id="TeenName"
            name="TeenName"
            label="Teen Name"
            type="text"
            fullWidth
            variant="standard"
          /></Grid>
          <Grid item lg={3} md={6} sm={12}>
              <TextField
            required
            margin="dense"
            id="TeenAge"
            name="TeenAge"
            label="TeenAge"
            type="text"
            fullWidth
            variant="standard"
          />
              </Grid></Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="button" onClick={handleSubmit}>Enroll</Button>
        </DialogActions>
      </Dialog>

      <Dialog  open={successDialog}>
      <DialogTitle textAlign="center">Congratulations!<br/><br/>
            <CheckCircleIcon color="success" fontSize="large" />
            </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign="center">
            {enrolledTeenName} is now enrolled in HTX Computer Market Build PC Workshop. You will be receiving a confirmation email shortly at: {enrolledEmail}
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={()=>setSuccessDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default BuildPcWorkshop;
