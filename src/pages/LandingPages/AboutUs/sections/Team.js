/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import ProdExam from "assets/images/Examination2.jpg";
import ProdTest from "assets/images/Product-Testing.jpg";
import PerformTest from "assets/images/SpeedTest4.jpg";
import SoftwareCheck from "assets/images/Storage2.jpg";
import FinalVerification from "assets/images/Final3.jpg";
import ProdKnowledge from "assets/images/Product Knowledge2.jpg";
import Selling from "assets/images/Selling Image3.png";
import Support from "assets/images/Support2.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white" mb={2}>
              Trust the Process
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              At HTX Computers, we believe in a meticulous journey of crafting reliable computers that stand the test of time.
              From careful selection of components to rigorous testing, we ensure every detail is perfected, so you can trust in the performance and dependability of our machines.
              Embrace technology with confidence - trust the process, trust us.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={ProdExam}
                name="Step 1: Product Examination"
                position={{ color: "info", label: "Physical Examination" }}
                description="Examine the exterior for physical damage, scartches, or dents. Check ports, connectors, and buttons for proper functionality."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={ProdTest}
                name="Step 2: Product Testing"
                position={{ color: "info", label: "Functionality" }}
                description="Power on the computer to ensure it starts up without any issues. Test all keys on the keyboard and check the touchpad for responsiveness."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PerformTest}
                name="Step 3: Performance Test"
                position={{ color: "info", label: "Performance" }}
                description="Open and use multiple applications to check the overall performance. Check battery health and test all ports. Ensure Wi-Fi and Bluetooth connectors are working."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={SoftwareCheck}
                name="Step 4: Storage and Software Check"
                position={{ color: "info", label: "Software" }}
                description="Verify the available storage capacity. Update the operating system to the latest version. Restore the system to its factory settings."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={FinalVerification}
                name="Step 5: Final Verification"
                position={{ color: "info", label: "Checklist" }}
                description="Perform a final verification of all components to ensure everything is in working condition. Ensure the software meets all requirements to the end-users."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={ProdKnowledge}
                name="Step 6: Product Knowledge"
                position={{ color: "info", label: "Marketplace" }}
                description="Create a detailed sales listing with all specifications and the computer's condition. We keep up with the pricing trends and help you secure the best deals."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Selling}
                name="Step 7: Selling"
                position={{ color: "info", label: "Sales" }}
                description="Discuss payment options and provide a seamless and secure transaction process. Comes with a 14-day warranty for peace of mind."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={Support}
                name="Step 8: After Sales Support"
                position={{ color: "info", label: "Follow-Up" }}
                description="Follow up with the customer to ensure satisfaction. Address concerns promptly and encourage feedback. Customer Service is our priority."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
