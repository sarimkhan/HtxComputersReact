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
import os from "assets/images/bonus.jpeg";
import fun from "assets/images/fun.jpg";
import components from "assets/images/basics.jpg"
import compatibility from "assets/images/api.jpg"
import connection from "assets/images/react2.png"
import setup from "assets/images/ai.jpg";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Team() {
  
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="primary"
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
              In this 4 hour long workshop, the student will first be learning the baics of web-development, starting from simple HTML, CSS, and Javascript, all the way to developing a completely functional AI Web-App, using React Js.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={components}
                title="Basics"
                description="Students learn about the basics of front-end web development. Starting out from making a simple HTML form, moving up to adding simple CSS and then adding Jquery to make the page more alive. Students also get to learn about HTML framewroks such as Bootstrap."
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={compatibility}
                title="APIs"
                description="Students get to learn the basics of API's, what they are and what can be accomplished using API's will definitely leave the students exited about the next chapter. Here Students make a small web-app that saves the form data that was created in the previous chapter."
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={connection}
                title="React-Js"
                description="In this chapter, we expand a little more on frameworks and what they really are. Here our main focus is React Js, also used by Facebook, and how we incorporate React with our HTML Form and make it more dynamic for the end user."
                action="google.com"
              />
            </MKBox>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={setup}
                title="A.I"
                description="Now that we have a functioning web-app using React Js, its time to make it a little more exciting by introducing A.I in it. In this chapter we will use Chat GPTs API and have A.I help us fill some of the fields in our dynamic form."
                action="google.com"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className="curriculumBox">
              <BackgroundBlogCard 
                image={os}
                title="Bonus!"
                description="In this bonus section, students will learn what their future can and will be if they intend on being a computer scientist, as Artificial Intelligence is rapidly changing the job market, and the way of life as we know it."
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
