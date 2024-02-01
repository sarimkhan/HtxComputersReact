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
  title="Are there any pre-requisites"
  description="No. Students will be taught assuming they have very little knowlege about whatever is being taught in the workshop."
  action={{
  }}
/>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
            <FilledInfoCard
  icon="question_mark"
  title="What materials are required for the class"
  description="A laptop, a github account, a notebook (not necessary but encouraged), and plenty of attention."
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
  description="We keep our workshops extremely focused since anything computer science is complex. Each workshop is limited to 4 - 6 students at a time."
  action={{
    
  }}
/>
            </Grid>
        
        </Grid>
        </Container>
        </MKBox>
    
    </>)
}