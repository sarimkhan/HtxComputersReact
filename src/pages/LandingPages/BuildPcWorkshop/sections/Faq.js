import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Grid, Container } from "@mui/material";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function FAQ(){
    return(<>
    <MKBox
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      my={5}
    >
      <Container>
      <MKTypography variant="h2" color="black" mb={3} ml={1}>
            <QuestionAnswerIcon/> F.A.Qs
            </MKTypography>
        <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12}>
            <FilledInfoCard
  icon="question_mark"
  title="What is included in $200"
  description="Simple answer, Everything! All your teens to do is be present and enjoy the workshop. We will provide all the necessary parts and equipment needed."
  action={{
  }}
/>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
            <FilledInfoCard
  icon="question_mark"
  title="Does my teen get to keep the computer"
  description="Yes! The entire purpose of this workshop is for your teen to learn, build, configure and take home their own custom PC, using the parts we provide."
  action={{
  }}
/>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
            <FilledInfoCard
  icon="question_mark"
  title="Can I sit in and watch"
  description="Yes! We welcome all parents to come and see exactly what your teen is learning in the class. You can even join them if you want."
  action={{
  }}
/>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
            <FilledInfoCard
  icon="question_mark"
  title="How big is the class"
  description="We keep our workshops extremely focused since its mostly hands on work. Each workshop is limited to 8 teens at a time."
  action={{
    
  }}
/>
            </Grid>
        
        </Grid>
        </Container>
        </MKBox>
    
    </>)
}