import MKAlert from "components/MKAlert";
import { Card, Grid} from "@mui/material";
import MKButton from "components/MKButton";
const Success = (props) => {
return(
    <>
    <Card style={{marginTop:"30px"}} textAlign="center" color="light" dismissible>
        <Grid textAlign="center" container width="100%">
            <Grid item sm={12} md={12}>
                Congratulations On Purchasing Your New
                <br/>
                {props.Title}
                <br/>
                <img src={props.image} width={100} style={{marginLeft:"20px"}} />
            </Grid>
            <Grid item sm={12} md={12} sx={{py:"20px"}}>
                Please save your confirmation Number: 
                <br/>
                <span style={{color:"green"}}>{props.confirmation}</span>
            </Grid>
            <Grid item sm={12} md={12} sx={{py:"20px"}}>
                An Associate will be reaching out soon with the delivery details through text
                
            </Grid>
            <Grid item sm={12} md={12} sx={{py:"10px"}}>
                If you have any questions regarding your order, please click this <a href="/pages/landing-pages/contact-us">Contact Us</a> link, or go to the Contact Us page from the Navbars
                
            </Grid>
            <Grid item sm={12} md={12} sx={{py:"10px"}}>
                Hope you enjoyed your experience
                <br/><br/>
                <MKButton variant="contained" color="info" href="/Presentation" >Back To Home</MKButton>
            </Grid>
        </Grid>
        
    </Card>
    </>
    
)
}

export default Success