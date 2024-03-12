import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { CardMedia, PaletteMode, Paper, ThemeProvider, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import parse from 'html-react-parser'
import ThemeTypeContext, { ThemeType } from '../utils/ContextProviderThemes'

const DetailsScreen = () => {

    const locator = useLocation()
    const { cardDetail } = locator.state
    const defaultText = "NA"

    const { themeType } = useContext(ThemeTypeContext)

    useEffect(() => {
        if (themeType === ThemeType.LIGHT) {
            document.getElementById('detail-screen')!!.className = "card-list"
        } else {
            document.getElementById('detail-screen')!!.className = "card-list-dark"
        }
    }, [themeType])

    // Custom Dark/Light Theme
    const getSelectedTheme = (mode: PaletteMode) => ({
        palette: {
            mode,        
            ...(mode === 'light' ? {
                background: {
                  default: '#ffffff',
                  paper: '#ffffff',
                },
              } : {
                background: {
                  default: '#3f3f3f',
                  paper: '#3f3f3f',
                },
              }),
            
        },
    });

    const selectedTheme = createTheme(getSelectedTheme(themeType === ThemeType.LIGHT ? 'light' : 'dark'));

    return (
        <ThemeProvider theme={selectedTheme} >
            <div className='card-list' id='detail-screen'>
                <Paper elevation={0}>
                    <Container fluid="md" style={{ padding: '2rem 2rem 5rem 1rem ' }}>
                        <Row>
                            <Col sm={3}>
                                <CardMedia
                                    sx={{ objectFit: "fill" }}
                                    component="img"
                                    style={{ borderRadius: '0.5rem' }}
                                    image={cardDetail?.image?.original ?? defaultText}
                                    alt="Show"
                                />
                            </Col>
                            <Col sm>
                                <Typography gutterBottom variant="h5" component="div">
                                    {cardDetail?.name ?? defaultText}
                                </Typography>
                                <Typography variant="body2" >
                                    <b>Summary:</b> <div>{parse(cardDetail?.summary ?? defaultText)}</div>
                                </Typography>
                                <Typography variant="body2" >

                                    <b>Genre:</b> {cardDetail?.genres?.toString() ?? defaultText} <br />
                                    <b>Language:</b> {cardDetail?.language} <br />
                                    <b>Schedule:</b> {cardDetail?.schedule?.time} (Timezone: {cardDetail?.network?.country?.timezone ?? defaultText}) <br />
                                    <b>Days:</b> {cardDetail.schedule.days?.toString() ?? defaultText} <br />
                                    <b>Premiered:</b> {cardDetail?.premiered ?? defaultText} <br />
                                    <b>Ended:</b> {cardDetail?.ended ?? defaultText} <br />

                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </Paper>
            </div>
        </ThemeProvider>
    )
}

export default DetailsScreen
