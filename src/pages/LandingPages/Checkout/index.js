import { useState } from "react";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import zelleIcon from "../../../assets/images/zelleIcon.png"
import cashIcon from "../../../assets/images/cashIcon.png"
import cashappIcon from "../../../assets/images/cashappIcon.png"
import vemoIcon from "../../../assets/images/vemoIcon.png"

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
 



function Checkout() {
  const images = importAll(require.context('../../../assets/images', false, /\.(png|jpe?g|svg)$/));
  const [checked, setChecked] = useState(true);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const handleChecked = () => setChecked(!checked);

  return (
    <>
    <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky={false}
      />
      <MKBox component="section" py={20}>
      <Grid container width="100%" justifyContent="center">
        <Grid container item justifyContent="center" xs={12} lg={12}>
          <MKTypography variant="h3" mb={5}>
            Checkout
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={6}>
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="First Name*" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Last Name*" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Email*" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Phone*" fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput variant="standard" label="Address 1*" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MKInput variant="standard" label="Address 2" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MKInput variant="standard" label="City*" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MKInput variant="standard" label="Zip Code*" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Notes" multiline fullWidth rows={3} />
                </Grid>
                
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>


        <Grid container item xs={12} lg={4} justifyContent="end">
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
              <Grid container item justifyContent="start" xs={12}>
                <MKTypography variant="h3">
                {params.get('product')}
                </MKTypography>
                <img src={images[params.get("image")]} width={70} style={{marginLeft:"20px"}}/>
                </Grid>
              <Grid container item justifyContent="center" xs={12}>
                <MKTypography variant="body">
                  Don't worry, no need to pay us until the product is delivered to you.
                </MKTypography>
                </Grid>
                <Grid container item justifyContent="center" xs={12}>
                <MKTypography variant="h5">
                  Accepted Forms of Payments
                </MKTypography>
                </Grid>
                
                <Grid container item xs={3} justifyContent="center">
                  <Grid container justifyContent="center" item lg={12}>
                    <img src={zelleIcon} width={48}/>
                  </Grid>
                  zelle
                </Grid>
                <Grid container item xs={3} justifyContent="center">
                  <Grid container justifyContent="center" item lg={12}>
                    <img src={cashappIcon} width={48}/>
                  </Grid>
                  cashapp
                </Grid>
                <Grid container item xs={3} justifyContent="center">
                  <Grid container justifyContent="center" item lg={12}>
                    <img src={vemoIcon} width={48}/>
                  </Grid>
                  venmo
                </Grid>
                <Grid container item xs={3} justifyContent="center">
                  <Grid container justifyContent="center" item lg={12}>
                    <img src={cashIcon} width={48}/>
                  </Grid>
                  cash
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                  Reserve Now
                </MKButton>
              </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </MKBox>
    <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
    
  );
}

export default Checkout;