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
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFrontLatitude7410 from "assets/images/latitude7410.jpg";
import bgFrontinpiron3000 from "assets/images/inpiron3000.jpg";
import bgFronthpx360 from "assets/images/hpx360.jpg";
import bgBack from "assets/images/darkwallpaper.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
        <MKTypography sx={{ mx: "auto" }} variant="h2" fontWeight="bold">
            Meant for Business
          </MKTypography>
          <MKTypography sx={{ mx: "auto" }} variant="body1" color="text">
          Designed and intended for company use, traveling and longer active periods than personal-use laptops.
          </MKTypography>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFrontLatitude7410}
                icon="touch_app"
                title={
                  <>
                    Dell Latitude <span style={{color:"red"}}>7410</span> <br/>
                    <MKBadge badgeContent="$350" size="lg" color="info" variant="contained" container />
                  </>
                }
                description={<>
                  Intel Core i7 vPro
                  <br/>
                  16GB Ram
                  <br/>
                  512GB Ssd
                  <br/>
                  Windows 11 Pro
                  <br/>
                  14" FHD Display
                </>}
              />
              <RotatingCardBack
                image={bgBack}
                title="Dell Latitude 7410"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/checkout?product=",
                  label: "Buy Now",
                }}
                action1={{
                  type: "internal",
                  route: "/product?product=",
                  label: "View Product",
                }}
              />
            </RotatingCard>
          </Grid>

          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFrontinpiron3000}
                icon="touch_app"
                title={
                  <>
                    Dell Inspiron 3000 <span style={{color:"red"}}>15</span> <br/>
                    <MKBadge badgeContent="$250" size="lg" color="info" variant="contained" container />
                  </>
                }
                description={<>
                  Intel Core i5
                  <br/>
                  8GB Ram
                  <br/>
                  256GB Ssd
                  <br/>
                  Windows 11 Pro
                  <br/>
                  15.6" Display
                </>}
              />
              <RotatingCardBack
                image={bgBack}
                title="Dell Inspiron 3000 15  "
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "More Details",
                }}
                action1={{
                  type: "internal",
                  route: "/product?product=",
                  label: "View Product",
                }}
              />
            </RotatingCard>
          </Grid>

          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFronthpx360}
                icon="touch_app"
                title={
                  <>
                    Hp Elitebook <span style={{color:"red"}}>x360</span> <br/>
                    <MKBadge badgeContent="$350" size="lg" color="info" variant="contained" container />
                  </>
                }
                description={<>
                  Intel Core i7 vPro
                  <br/>
                  16GB Ram
                  <br/>
                  512GB Ssd
                  <br/>
                  Windows 11 Pro
                  <br/>
                  13.3" FHD Display
                </>}
              />
              <RotatingCardBack
                image={bgBack}
                title="Hp Elitebook x360"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "More Details",
                }}
                action1={{
                  type: "internal",
                  route: "/product?product=",
                  label: "View Product",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
