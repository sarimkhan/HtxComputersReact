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

import sheetdb from "sheetdb-node";
import { useEffect, useState } from "react";

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
  const [obj, setObj] = useState({})
  var config = {
    address: 'lmrht3p7ssu0r',
  };
  
  // Create new client
  var client = sheetdb(config);
  useEffect(()=>{
    client.read({ sheet:'Sheet1' }).then(function(data) {
      var temp = JSON.parse(data) 
      setObj(temp)
    }, function(err){
      console.log(err);
    });
  },[])

let arrayOfcardsBusiness = []
let arrayOfcardsGaming = []
for(var item in obj){
  var categArr = obj[item].Category.split(',')
  console.log(categArr)
  var picsArr = obj[item].Pics.split(',')
  for(var index in categArr){
    if(categArr[index].trim() == "Business"){
      arrayOfcardsBusiness.push(
        <Grid item xs={12} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={picsArr[0]}
                    icon="touch_app"
                    title={
                      <>
                        {obj[item].Title} <br/>
                        <MKBadge badgeContent={<p>${obj[item].Price}</p>} size="lg" color="info" variant="contained" container />
                      </>
                    }
                    description={<>
                      {obj[item].Processor}
                      <br/>
                      {obj[item].Ram}
                      <br/>
                      {obj[item].Storage}
                      <br/>
                      {obj[item].OperatingSystem}
                      <br/>
                      {obj[item].Display}
                    </>}
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title={obj[item].Title}
                    description={obj[item].ShortDiscription}
                    productId = {obj[item].Id}
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
      )
    }

    if(categArr[index].trim() == "Gaming"){
      arrayOfcardsGaming.push(
        <Grid item xs={12} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={picsArr[0]}
                    icon="touch_app"
                    title={
                      <>
                        {obj[item].Title} <br/>
                        <MKBadge badgeContent={<p>${obj[item].Price}</p>} size="lg" color="info" variant="contained" container />
                      </>
                    }
                    description={<>
                      {obj[item].Processor}
                      <br/>
                      {obj[item].Ram}
                      <br/>
                      {obj[item].Storage}
                      <br/>
                      {obj[item].OperatingSystem}
                      <br/>
                      {obj[item].Display}
                    </>}
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title={obj[item].Title}
                    description={obj[item].ShortDiscription}
                    productId = {obj[item].Id}
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
      )
    }
  }
}

  return (
    
    <MKBox component="section" py={6} my={6}>
      
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
        <MKTypography textAlign="center" sx={{ mx: "auto" }} variant="h2" fontWeight="bold">
            Meant for Business
          </MKTypography>
          <MKTypography textAlign="center" sx={{ mx: "auto" }} variant="body1" color="text">
          Designed and intended for company use, traveling and longer active periods than personal-use laptops.
          </MKTypography>
          {arrayOfcardsBusiness}
        </Grid>
      </Container>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Container>
      <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
        <MKTypography textAlign="center" sx={{ mx: "auto" }} variant="h2" fontWeight="bold">
            Meant for Gaming
          </MKTypography>
          <MKTypography textAlign="center" sx={{ mx: "auto" }} variant="body1" color="text">
          Designed and intended for company use, traveling and longer active periods than personal-use laptops.
          </MKTypography>
          {arrayOfcardsGaming}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
