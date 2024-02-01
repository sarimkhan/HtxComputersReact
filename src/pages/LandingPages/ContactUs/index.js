import sheetdb from "sheetdb-node";
import { useState} from "react";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {

  let [name, setName] = useState("")
  let [Email, setEmail] = useState("")
  let [Notes, setNotes] = useState("")
  let [backBtn, setBackBtn] = useState(false)
    
    var config = {
      address: 'lmrht3p7ssu0r',
    };
    
    // Create new client
    var client = sheetdb(config);

    const handleSubmit = () =>{
      document.getElementById("submitBtn").disabled= true;
      document.getElementById("submitBtn").innerHTML= "Sending Message";
      client.create({ 
        Name: name, 
        Email: Email,
        Message: Notes
      }, "ContactUs").then(function(data) {
        console.log(data);
        var inputs = document.getElementsByTagName("input"); 
      for (var i = 0; i < inputs.length; i++) { 
          inputs[i].disabled = true;
      }
      document.getElementById("submitBtn").innerHTML= "Message Sent";
      setBackBtn(true)
      }, function(err){
        console.log(err);
      });
    }


    const handleFormChange = (e) => {
      if(e.target.name == "Name"){
        setName(e.target.value)
      }
      if(e.target.name == "Email"){
        setEmail(e.target.value)
      }
      if(e.target.name == "Notes"){
        setNotes(e.target.value)
      }
    }

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/trackMyOrder",
            label: "Track Order",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                jscomputers@gmail.com or contact using our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      name="Name"
                      fullWidth
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      name="Email"
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      name="Notes"
                      onChange={handleFormChange}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton id="submitBtn" onClick={handleSubmit} type="button" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
                {backBtn ? <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton href="/" type="button" variant="gradient" color="success">
                    Back Home
                  </MKButton>
                </Grid> : null}
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
