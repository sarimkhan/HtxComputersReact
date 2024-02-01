import sheetdb from "sheetdb-node";
import { useEffect, useState} from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Grid, Card, Container} from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import routes from "routes";
import footerRoutes from "footer.routes";
import Loading from "components/Loading";
import { Swiper, SwiperSlide } from 'swiper/react';
import MKBadge from "components/MKBadge";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import processor from "assets/images/processor.jpg"
import display from "assets/images/display.png"
import windows from "assets/images/windowslogo.jpg"
import ram from "assets/images/ram.jpg"
import ssd from "assets/images/ssd.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './product.css'



const ProductDetails = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);


    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let [status, setStatus] = useState("")
    let [imported, setImported] = useState(false)
    let [loading, setLoading] = useState(false)
    let [obj, setObj] = useState({})
    const [images, setImages] = useState([])
    const buyLink = "/checkout?product=" + params.get('product')
    let swiperImages = []

    
    var config = {
      address: 'lmrht3p7ssu0r',
    };
    
    // Create new client
    var client = sheetdb(config);

    const importProduct = async()=> {
      setLoading(true)
      await client.read({sheet:'Sheet1', search:{'Id':params.get('product')}}).then((data)=>{
        var temp = JSON.parse(data)
        console.log(temp) 
        setObj(temp)
        let imagesArr = temp[0].Pics.split(',')
        setImages(imagesArr)
        setLoading(false)
        setImported(true)
      })
    }

    useEffect(()=>{
      importProduct()
      console.log(obj)
    },[])

    for(var item in images){
      console.log(images[item])
      swiperImages.push(
        <SwiperSlide style={{justifyContent:"center", display:"flex"}}>
          <img src={images[item]} width="50%" height="80%" />
        </SwiperSlide>
      )
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
          {imported ? 
          <Grid container width="100%" justifyContent="center">
          <Grid container item justifyContent="center" xs={12} lg={8}>
          <MKTypography variant="h3" mb={5}>
              {obj[0].Title} <MKBadge badgeContent={<h3>${obj[0].Price}</h3>} size="lg" variant="contained" container />
            </MKTypography>
          <Swiper
          style={{
            '--swiper-navigation-color': 'black',
            '--swiper-pagination-color': '#fff',
            maxHeight:"450px"
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {swiperImages}
        </Swiper>
          <MKButton sx={{mt:"40px"}} href={buyLink} variant="gradient" color="info" size="large">Buy Now</MKButton>
          </Grid>
          <Grid container justifyContent="center" sx={{my:"50px"}} item xs={12} lg={12}>
            <Grid item lg={8} sm={12}>
            <MKTypography variant="h5" sx={{mb:"10px"}}>
                {obj[0].LongDiscription}
              </MKTypography>
              <br/><br/>
              <MKTypography variant="h3" sx={{mb:"10px"}}>
                Specifications
              </MKTypography>
              <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
            <MKBox mb={1} className='specBox'>
              <BackgroundBlogCard 
                image={display}
                title={obj[0].Display}
                description={obj[0].DisplayDescription}
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className='specBox'>
              <BackgroundBlogCard 
                image={processor}
                title={obj[0].Processor}
                description={obj[0].ProcessorDescription}
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className='specBox'>
              <BackgroundBlogCard 
                image={windows}
                title={obj[0].OperatingSystem}
                description={obj[0].OperatingSystemDescription}
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className='specBox'>
              <BackgroundBlogCard 
                image={ram}
                title={obj[0].Ram}
                description={obj[0].RamDescription}
                action=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKBox mb={1} className='specBox'>
              <BackgroundBlogCard 
                image={ssd}
                title={obj[0].Storage}
                description={obj[0].StorageDescription}
                action=""
              />
            </MKBox>
          </Grid>
              </Grid>
              <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
              <MKButton sx={{mt:"40px"}} href={buyLink} variant="gradient" color="info" size="large">Buy Now</MKButton>
              </Grid>
              
              

          </Grid>
          </Grid>
        </Grid>
          : null}
      
    </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
)
}

export default ProductDetails;