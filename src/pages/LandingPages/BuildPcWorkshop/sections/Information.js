import '../workshopStyle.css'
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MKTypography from "components/MKTypography";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import MineCraftImage from "../../../../assets/images/minecraft.png"
import FortniteImage from "../../../../assets/images/fortnite.jpg"
import RobloxImage from "../../../../assets/images/Roblox.jpg"
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
      <MKTypography  mb={2}>An average desktop can cost anywhere around $400 to $800. But when it comes down to building your own PC, the cost goes down sigificantly.
        Have your teen learn this beneficail skill not only to save money, but also to boost their confidence with the sense of achievment one gets after building a complex machine. In this 4 hour Build a PC workshop, your teen will have the chance to build, configure, set up, and take home their very own custom-built desktop!</MKTypography> 
        <MKTypography variant="h4" style={{color:"gold"}} mb={2}>
            <ImportantDevicesIcon/> Invest in your teen!<br/> 
            </MKTypography>
      <MKTypography
              variant="h2"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              <br/><SportsEsportsIcon style={{paddingTop:"2px"}}/> BUILD A PC THAT PLAYS
            </MKTypography>
        <MKBox>
        <Grid container spacing={2} sx={{my:"20px"}}>
  <Grid item lg={4} md={4} xs={12} className='gameBox'>
  <TransparentBlogCard
  image={FortniteImage}
  title="FORTNITE"
  description=""
  action={{
    type: "external",
    route: "https://www.fortnite.com/?lang=en-US",
    color: "info",
    label: "",
  }}
/>
  </Grid>
  <Grid item lg={4} md={4} xs={12} className='gameBox'>
  <TransparentBlogCard
  image={RobloxImage}
  title="ROBLOX"
  description=""
  action={{
    type: "external",
    route: "https://www.roblox.com/",
    color: "info",
    label: "",
  }}
/>
  </Grid>
  <Grid item lg={4} md={4} xs={12} className='gameBox'>
  <TransparentBlogCard
  image="https://m.media-amazon.com/images/I/51L0-hXjy+L.png"
  title="MINECRAFT"
  description=""
  action={{
    type: "external",
    route: "https://www.minecraft.net/en-us",
    color: "info",
    label: "",
  }}
/>
  </Grid>
</Grid>
          </MKBox>    
        <MKTypography>Building a PC can seem <b>overwhelming</b>. All the wires and components <b>confuse</b> the best of us. But it does not have to be that way.
          In our 4 hour long workshop, we teach your teen where and how to get the cheapest components and make the best build within a budget. <br/><br/>
          They not only <b style={{color:"green"}}>build</b> a completely functioning Windows 11 computer themseleves, but also <b style={{color:"green"}}>TAKE IT HOME</b>.
          Whether you are looking for a new PC, trying to get your old PC fixed or just want your teen to be involved in something constructive that helps them
          in the future, why not have them learn this <b style={{color:"green"}}>important skill</b>.
        </MKTypography>
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
