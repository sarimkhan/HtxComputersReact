// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card  from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import sheetdb from "sheetdb-node";
import { useEffect, useState } from "react";

import bgBack from "assets/images/darkwallpaper.jpg";

const ForBusiness = () =>{
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
                        route: "/productDetails?product=",
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
    <>
    <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/trackMyOrder",
          label: "Track Order",
          color: "info",
        }}
        sticky
      />

<Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <br/><br/><br/><br/>
        <br/><br/>
      <Container>
      <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }} id="ForGaming">
        <MKTypography textAlign="center" sx={{ mx: "auto" }} variant="h2" fontWeight="bold">
        Meant for Personal Use
          </MKTypography>
          <MKTypography textAlign="center" sx={{ mx: "auto" }} variant="body1" color="text">
          Designed and intended for, traveling and longer active periods.
          </MKTypography>
          {arrayOfcardsBusiness}
        </Grid>
      </Container>
    </Card>
    <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
    
  );

}

export default ForBusiness;