import { Box, Typography, BottomNavigation } from "@mui/material";
import  Container  from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Acorddion";
import  Paper  from "@mui/material/Paper";
import BasicModal from '../components/Modal'

  



const Tour = () => {
    
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display:'flex' }}>
                <img src="https://cdn.aarp.net/content/dam/aarp/travel/tips/2020/12/1140-las-vegas-sign-esp.imgcache.rev.web.700.402.jpg" height={325}
                />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant='paragraph' component='p' marginTop={3}>
                    Las Vegas, en el desierto de Mojave de Nevada, es una ciudad turística famosa por su activa vida nocturna, que se centra en casinos abiertos las 24 horas del día y otras opciones de entretenimiento. Su calle principal y su núcleo es "The Strip", con un poco más de cuatro millas de extensión.
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={2} >
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation >
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

  
    




export default  Tour;