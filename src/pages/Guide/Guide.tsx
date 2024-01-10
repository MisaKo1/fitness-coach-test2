import * as React from "react";
import AppBar from "@mui/material/AppBar";
import ArrowIcon from "@mui/icons-material/ArrowBack";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Guide() {
  const handleArrowIconClick = () => {
    console.log("Arrow icon clicked!");
  };
  const YourComponent = () => {
    const [showDetails, setShowDetails] = React.useState(false);

    const handleCardClick = () => {
      setShowDetails(!showDetails);
    };
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Link to={"/"}>
              <ArrowIcon sx={{ mr: 2 }} onClick={handleArrowIconClick} />
            </Link>
            <Typography variant="h6" color="inherit" noWrap>
              Základní guide
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h2"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Začínáme
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Zde jsou základní tutoriály k apce, aby jste se v ní vyznali
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              ></Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                    onClick={handleCardClick}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%",
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Get started
                      </Typography>
                      {showDetails && (
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Cum sociis natoque penatibus et magnis dis
                        </Typography>
                      )}
                    </CardContent>
                    <CardActions>
                      {showDetails && <div>{/* Další akce */}</div>}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    );
  };
}
/*<Card 
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Get started
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
<Link to={"/"}>
<Button size="small" onClick={handleButtonClick}>View</Button>
                  </Link>*/
