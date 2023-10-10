
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import white_wine from "../assets/images/white_wine.jpg";
import rose_wine from "../assets/images/rose_wine_glass.jpg";
import red_wine from "../assets/images/red_wine.jpg";
import sparkling_wine from "../assets/images/sparkling_wine.jpg";


const defaultTheme = createTheme();

export default function About() {
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
              Types of Wine
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph >
              There are so many different types and variations of wine.  However, there are four main classifications of wines.  Lets review their characteristics below:
            </Typography>

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
                    image= {white_wine}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2" >
                      White Wine
                    </Typography>
                    <Typography align="center">
                    White wine tends to be focused on acidity and fresh, clean flavors. 
                    They typically have hints of pale-fleshed fruits such as apple, pear and citrus, though it can also have spicy, sweet and rich flavors.  
                    White wine pairs especially well with light, delicate flavours such as creamy soft cheese, fish, white meats, chips, pretzels, and salads.
                    If you’re looking for something sweet, white chocolate is a great choice.               </Typography>
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
                    image= {red_wine}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Red Wine
                    </Typography>
                    <Typography align="center">
                    Red wine is bolder and uses not only the juice of the grape 
                    but also the grape skins and pips during the fermentation process. 
                    It is also fermented at a higher temperature, resulting in a stronger color, aroma, 
                    flavor and higher tannin levels, which are a compound found in wine skins, seeds and stems 
                    that give wine that “dry” aftertaste.  Red wine is extremely varied; 
                    you can find a light-bodied red wine, a fruity red wine, or a rich and spicy vintage red wine.
                    Depending on the wine, it may pair well with smoked cheeses, meats, or dark chocolates.                    </Typography>
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
                    image= {rose_wine}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Rosé Wine
                    </Typography>
                    <Typography align="center">
                    Rosé, or pink-hued wine, is made by using black grapes, but only allowing the skins to 
                    remain in the juice for a few hours (typically 12-36) until the desired color is achieved. 
                    Rosés can vary in taste, but they often have bright, red fruit flavors 
                    like strawberry, watermelon and peach. However, a deep pink rosé can be very aromatic and dry as well. 
                    Rosé pairs well with white chocolate and fruity chocolate.                     </Typography>
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
                    image= {sparkling_wine}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Sparkling Wine
                    </Typography>
                    <Typography align="center">
                    Sparkling wines can be made a few different ways.  Champagne and Cava both are made by 
                    adding yeast and sugar to the grape juice and leaving it to ferment into alcohol in the bottle.
                    Prosecco has a faster process, where the grape juice is left in a pressurized tank to form bubbles.  
                    Regardless of the fermentation process, sparkling wines are the perfect accompaniment to finger food 
                    and canapés, or mixed with fruit juice to create a brunch-friendly mimosa.
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
          Check out our current wine inventory to see what's in the collection.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}







// export default About