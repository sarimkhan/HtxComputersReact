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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
          <DefaultInfoCard
  icon="local_shipping"
  title="Free Delivery!"
  description="We offer free delivery around Houston on all our orders. The order gets delivered same day or the next business day"
  direction="center"
/>
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultInfoCard
  icon="workspace_premium"
  title="14 Day Warranty!"
  description="All our producs come with a 14 day warranty/trial starting from the day of delivery. You like it? Keep it!"
  direction="center"
/>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
          <DefaultInfoCard
  icon="payments"
  title="Cash on Delivery!"
  description="We dont't want your card information. Get the Laptop, Test it, then pay us cash/cash-app. Learn more"
  direction="center"/>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
