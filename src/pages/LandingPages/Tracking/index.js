import sheetdb from "sheetdb-node";
import { useState} from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Grid, Card, Container} from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import routes from "routes";
import footerRoutes from "footer.routes";
import Loading from "components/Loading";
import hpImage from '../../../assets/images/hpx360.jpg'


const Tracking = () => {
    let [status, setStatus] = useState("")
    let [trackingNumber, setTrackingNumber] = useState("")
    let [imported, setImported] = useState(false)
    let [loading, setLoading] = useState(false)
    let [obj, setObj] = useState({})
    
    var config = {
      address: 'lmrht3p7ssu0r',
    };
    
    // Create new client
    var client = sheetdb(config);

    const HandleTracking = async()=> {
      setLoading(true)
      await client.read({sheet:'Orders', search:{'ConfirmationNumber':trackingNumber}}).then((data)=>{
        var temp = JSON.parse(data) 
        setObj(temp)
        setStatus(temp[0].OrderStatus)
        setImported(true)
        setLoading(false)
      })
    }

    const HandleInput = (e)=> {
      setTrackingNumber(e.target.value)
    }
    
    

return(
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
          mt: 1,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          minHeight: "800px"
        }}
      >
        <MKBox component="section" py={15}>
          {loading ? <Loading/> : null} 
      <Grid container width="100%" justifyContent="center">
        <Grid container item justifyContent="center" xs={12} lg={12}>
          <MKTypography variant="h3" mb={5}>
            Track My Order
          </MKTypography>
        </Grid>
        <Grid container justifyContent="center" item xs={12} lg={12}>
          <Grid item lg={8} sm={8}>
            <MKInput size="large" onChange={HandleInput} label="Input Tracking Number" fullWidth></MKInput>
          </Grid>
          <Grid item lg={2} md={2} sm={4}>
            <MKButton onClick={HandleTracking} sx={{ml:"10px"}} size="large" color="dark">Track</MKButton>
          </Grid>
        </Grid>

        {imported ? 
        <Grid container item xs={12} lg={12} justifyContent="end">
        <MKBox width="100%" component="form" method="post" autoComplete="off">
          <MKBox p={3}>
            <Grid container spacing={3}>
            
            <Grid container item textAlign="center" justifyContent="center" xs={12}>
              <MKTypography variant="body">
                Glad to have you back {obj[0].Name}
              </MKTypography>
              </Grid>
              <Grid container item textAlign="center" justifyContent="center" xs={12}>
              <MKTypography variant="h5">
                The Status of your {obj[0].ProductTitle} is {obj[0].OrderStatus}
              </MKTypography>
              </Grid>
              <Grid container item justifyContent="center" xs={12}>
              <br/>
              <img src={obj[0].ProductImage} width="200px"/>
              </Grid>
              
              
              <Grid container item textAlign="center" justifyContent="center" xs={12} my={2}>
              {status == "Pending" ? 
              <p>
                  Our experts are gathering your order. We know you want your laptop asap and we do everything possible to ensure the functionality of the product we deliver to you.
              </p> : null}
              {status == "Moving" ? 
              <p>
                  Congratulations!!! Your order is on the move and should be getting delivered to your doorstep today.
              </p> : null}
              
            </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </Grid>
        : null}
      </Grid>
    </MKBox>
    
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
)
}

export default Tracking;