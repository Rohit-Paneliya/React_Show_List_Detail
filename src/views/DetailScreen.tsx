import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { CardMedia, Typography } from '@mui/material'
import parse from 'html-react-parser'

const DetailsScreen = () => {

    const locator = useLocation()
    const { cardDetail } = locator.state
    const defaultText = "NA"

    return (
        <Container fluid="md" style={{ margin: '2rem' }}>
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
                    <Typography variant="body2" color="text.secondary">
                        <b>Summary:</b> <div>{parse(cardDetail?.summary ?? defaultText)}</div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        
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
    )
}

export default DetailsScreen
