import { useState , useEffect} from "react";
import sheetdb from "sheetdb-node";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Success from "./success/Success";
import Loading from "components/Loading";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKAlert from "components/MKAlert";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { Card } from "@mui/material";
import MKTypography from "components/MKTypography";
import zelleIcon from "../../../assets/images/zelleIcon.png"
import cashIcon from "../../../assets/images/cashIcon.png"
import cashappIcon from "../../../assets/images/cashappIcon.png"
import vemoIcon from "../../../assets/images/vemoIcon.png"
 



function Checkout() {
  // FormValues
  let [Firstname, setFirstName] = useState("")
  let [Lastname, setLastName] = useState("")
  let [Email, setEmail] = useState("")
  let [Phone, setPhone] = useState("")
  let [Address1, setAddress1] = useState("")
  let [Address2, setAddress2] = useState("")
  let [City, setCity] = useState("")
  let [ZipCode, setZipCode] = useState("")
  let [Notes, setNotes] = useState("")
  let [ConfirmationNumber, setConfirmationNumber] = useState("")

  const dateObj = new Date();
const month   = dateObj.getMonth() + 1; // months from 1-12
const day     = dateObj.getDate();
const year    = dateObj.getFullYear();

  const [Successful, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const [obj, setObj] = useState({})
  const [images, setImages] = useState([])
  var config = {
    address: 'lmrht3p7ssu0r',
  };
  
  // Create new client
  var client = sheetdb(config);
  useEffect(async ()=>{
    await client.read({ sheet:'Sheet1', search:{'Id':params.get('product')} }).then(function(data) {
      var temp = JSON.parse(data) 
      setObj(temp)
      let imagesArr = temp[0].Pics.split(',')
      setImages(imagesArr)
      setIsLoading(false)
    }, function(err){
      console.log(err);
    });
  },[])

  const handleSubmit = () =>{
    setLoading(true)
    document.getElementById("submitBtn").disabled= true;
    document.getElementById("submitBtn").innerHTML= "Processing";
    client.create({ 
      Name: Firstname + " " + Lastname, 
      Email: Email,
      Phone: Phone,
      Address: Address1 + ", " + Address2 + ", " + City + ", " + ZipCode,
      Notes: Notes,
      ConfirmationNumber: month + Phone + year + day,
      OrderStatus: "Pending",
      ProductTitle: obj[0].Title,
      ProductImage: images[0]  
    }, "Orders").then(function(data) {
      console.log(data);
      setConfirmationNumber(month + Phone + year + day)
      setSuccess(true)
      var inputs = document.getElementsByTagName("input"); 
    for (var i = 0; i < inputs.length; i++) { 
        console.log("lkjesmnf")
        inputs[i].disabled = true;
    }
    document.getElementById("submitBtn").innerHTML= "Success";
    setLoading(false)
    }, function(err){
      console.log(err);
    });
  }
  const [checked, setChecked] = useState(true);
 
  const handleChecked = () => setChecked(!checked);

  const handleFormChange = (e) => {
    if(e.target.name == "FirstName"){
      setFirstName(e.target.value)
    }
    if(e.target.name == "LastName"){
      setLastName(e.target.value)
    }
    if(e.target.name == "Email"){
      setEmail(e.target.value)
    }
    if(e.target.name == "Phone"){
      setPhone(e.target.value)
    }
    if(e.target.name == "Address1"){
      setAddress1(e.target.value)
    }
    if(e.target.name == "Address2"){
      setAddress2(e.target.value)
    }
    if(e.target.name == "City"){
      setCity(e.target.value)
    }
    if(e.target.name == "ZipCode"){
      setZipCode(e.target.value)
    }
    if(e.target.name == "Notes"){
      setNotes(e.target.value)
    }
  }



  if (isLoading) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            Working On Your Order{" "}
        </div>
    );
}
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
        sticky={true}
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
        {loading ? <Loading/> : null}
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
                  <MKInput variant="standard" label="First Name*" name='FirstName' onChange={handleFormChange} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Last Name*" name='LastName' onChange={handleFormChange} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" type="email" name='Email' onChange={handleFormChange} label="Email*" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" type="tel" name='Phone' onChange={handleFormChange} label="Phone*" fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput variant="standard" name='Address1' onChange={handleFormChange} label="Address 1*" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MKInput variant="standard" name='Address2' onChange={handleFormChange} label="Address 2" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MKInput variant="standard" name='City' onChange={handleFormChange} label="City*" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MKInput variant="standard" name='ZipCode' onChange={handleFormChange} label="Zip Code*" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Notes" name='Notes' onChange={handleFormChange} multiline fullWidth rows={3} />
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>

        
        <Grid container item xs={12} lg={4} justifyContent="end">
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
              <Grid container item justifyContent="center" xs={12}>
                <MKTypography variant="h3" textAlign="center">
                {obj[0].Title} (${obj[0].Price})
                </MKTypography>
                <img src={images[0]} width={70}/>
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
                <MKButton id="submitBtn" type="button" onClick={handleSubmit} variant="gradient" color="dark" fullWidth>
                  Reserve Now
                </MKButton>
                {Successful ? <div style={{zIndex:"1000"}}><Success confirmation={ConfirmationNumber} image={images[0]} Title={obj[0].Title}/></div> : null}
              </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </MKBox>
      </Card>
      
    <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
    
  );
}

export default Checkout;