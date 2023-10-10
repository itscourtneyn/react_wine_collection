import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import fox_winery from "../assets/images/Foxwinery.jpg";
import wolf_mountain from "../assets/images/wolf-mountain-vineyards.jpg"
import city_winery from "../assets/images/city_winery.jpg"
import arabia_mountain from "../assets/images/arabia_mountain.jpg"


const defaultTheme = createTheme();

export default function Wineries() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color= "pink"
              gutterBottom
            >
              Local Wineries
            </Typography>
            {/* <Typography variant="h6" align="center" color="text.secondary" paragraph >
              There are so many different types and variations of wine.  However, there are four main classifications of wines.  Lets review their characteristics below:
            </Typography> */}

          </Container>
        </Box>


        <Container sx={{ py: 1 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {fox_winery}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    
                    <Typography align="center" gutterBottom variant="h5" component="h2" >
                      Fox Vineyards & Winery
                    </Typography>
                    <Typography align="center">
                    Social Circle, GA <br></br>
                    <a href="https://www.exploregeorgia.org/social-circle/food-drink/wineries-breweries-distilleries/fox-vineyards-and-winery" style={{ color: 'pink'}}>Website</a>
                    </Typography>
                  </CardContent>
            
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {wolf_mountain}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    Wolf Mountain Vineyards & Winery
                    </Typography>
                    <Typography align="center">
                    Dahlonega, GA <br></br>
                    <a href="http://www.wolfmountainvineyards.com/" style={{ color: 'pink'}}>Website</a>
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {city_winery}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      City Winery <br></br> Atlanta
                    </Typography>
                    <Typography align="center">
                    Atlanta, GA <br></br>
                    <a href="https://citywinery.com/atlanta/Online/default.asp" style={{ color: 'pink'}}>Website</a>
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid><Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {arabia_mountain}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Arabia Mountain Vineyard
                    </Typography>
                    <Typography align="center">
                    Stonecrest, GA <br></br>
                    <a href="https://www.arabiamountainvineyard.com/" style={{ color: 'pink'}}>Website</a>
                    </Typography>
                  </CardContent>

                </Card>
              
                
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We encourage you to check out your local vineyards and wineries to learn more about the different types of wine, while supporting local businesses.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}







// export default About