import '../workshopStyle.css'

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import os from "assets/images/os.jpg";
import fun from "assets/images/fun.jpg";
import components from "assets/images/components.jpg"
import compatibility from "assets/images/compatibility.jpg"
import connection from "assets/images/connection.jpg"
import setup from "assets/images/setup.jpg";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Team() {
  
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="info"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white" mb={2}>
            <AutoStoriesIcon style={{marginTop:"5px"}}/> CURRCULUM
            </MKTypography>
            <MKTypography variant="body1" color="white">
              Know exactly what your teen will be learing in this informative workshop. From PC components to form factors. We cover all necessary things that your teen will
              need to know. After the workshop, each teen will be given our custom PC cheat-sheet which helps them to remember what they learned and make custom builds in future.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={components}
                title="Components"
                description="Students learn about the main components required to build a PC. Each component serves a specific purpose and learining about what each component does helps the student building the best build under budget."
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={compatibility}
                title="Compatibility"
                description="Each component has several variants so the students also learn about compatiblility between these components. From socket types to chipsets, we cover everything needed to make sure that all components are compatible"
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={connection}
                title="Connections"
                description="After getting the right and compatible components, its time to connect them together. Students learn the purpose of those complex and confusing wires coming out of the power supply which won't be as complex once this section is over."
                action="google.com"
              />
            </MKBox>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={setup}
                title="Setup"
                description="Once we have our PC functioning, its time to set it up and configure to work according to our needs. This is where the operating system of our motherboards come in, also known as the BIOS."
                action="google.com"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={os}
                title="Operating system"
                description="Now comes the easy part. The students finally gets to see their project in action. Students learn to wipe hard drives and get them ready to install Windows 11 from a bootable USB."
                action="google.com"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={fun}
                title="Have Fun!"
                description="This the last and most important section of our workshop. Students now have the compatible components built together. Hard drive has been wiped and Windows 11 is installed on the PC. It's time to now download games and watch this amazing custom built desktop in action."
                action="google.com"
              />
            </MKBox>
          </Grid>
        </Grid>
        <br/><br/>
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
        {/* <MKButton color="white">
              Enroll Now For Only $200 
            </MKButton> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
