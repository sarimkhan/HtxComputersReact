import '../workshopStyle.css'
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { ElectricBolt, Fullscreen } from '@mui/icons-material';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
      
      
      <MKBox
      component="section"
      variant="gradient"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
        <Grid container spacing={3} sx={{mt:-18}}>
          <Grid item lg={12} md={12} sm={12} textAlign="center">
          <MKTypography variant="h1" color="black" mb={2}>
            <ElectricBolt/><br/>The Difference
          </MKTypography>
          </Grid>
        <Grid item lg={6} md={6} sm={12}>
        <MKBox borderRadius={"8px"} style={{backgroundColor:"black"}}>
        <MKTypography sx={{py:2, px:5}} variant="h3" color="white" mb={2}>
            Web Application
            </MKTypography>
            <hr width="90%" style={{marginLeft:"5%"}}/>
            <MKTypography sx={{py:2, px:5}} variant="body2" color="white" mb={2}>
            Web applications are websites with functionality and interactive elements. Gmail, Facebook, YouTube, Twitter, etc. are all web apps that are dynamic, and built for user engagement.
            </MKTypography>
            <hr width="90%" style={{marginLeft:"5%"}}/>
            <MKTypography sx={{py:2, px:5}} variant="body2" color="white" mb={2}>
            The web application uses a combination of server-side scripts and client-side scripts to present information. It requires a server to manage requests from the users. 
            </MKTypography>
            <hr width="90%" style={{marginLeft:"5%"}}/>
            <MKTypography sx={{py:2, px:5}} variant="body2" color="white" mb={2}>
            A distinguishing feature of web applications is that they help users complete a task. Web apps are capable of performing a wide variety of different jobs. Apps that require server-side processing are dynamic
            </MKTypography>
        </MKBox>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
        <MKBox borderRadius={"8px"} bgColor="info">
        <MKTypography sx={{py:2, px:5}} variant="h3" color="white" mb={2}>
            Website
            </MKTypography>
            <hr width="80%" style={{marginLeft:"5%"}}/>
            <MKTypography sx={{py:2, px:5}} variant="body2" color="white" mb={2}>
            A website is a collection of public interlinked web pages connected through a domain name. Web pages can contain text, audio, video, documents, or other Internet-accessible content.
            </MKTypography>
            <hr width="80%" style={{marginLeft:"5%"}}/>
            <MKTypography sx={{py:2, px:5}} variant="body2" color="white" mb={2}>
            Static websites display the same content for all users. On the other hand, dynamic websites use modern web design tools to display different content to users depending on various factors such as time, location, date, etc.
            </MKTypography>
            <hr width="80%" style={{marginLeft:"5%"}}/>
            <MKTypography sx={{py:2, px:5}} variant="body2" color="white" mb={2}>
            If you want users to get to know your business and the products or services you offer, a website is probably the best choice for you. The most common reason companies build websites is to showcase their offerings.
            </MKTypography>
        </MKBox>
        </Grid>
      </Grid>
          </MKBox>    
       
        <Grid container spacing={3} alignItems="center">
          {/* <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={3}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Fully integrated"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Payments functionality"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid> */}
          {/*<Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
            </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
