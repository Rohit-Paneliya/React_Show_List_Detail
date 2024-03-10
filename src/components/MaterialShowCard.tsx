import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom'

export default function MaterialShowCard({ cardData}: any) {

    const cardHoverStyle = {
        width: '11rem', ':hover': {
            boxShadow: 20,
        }
    }

    const navigateToDetailScreen = {
        pathname: `/detailScreen`
    }

    const linkStyle = { textDecoration: 'none', color: 'white' }
    const defaultText = "NA"

    return (
        <div key={cardData?.id ?? defaultText}>
            <Link style={linkStyle} to={navigateToDetailScreen} state={{ cardDetail: cardData }}>
                <Card sx={cardHoverStyle}>
                    <CardMedia
                        sx={{ objectFit: "fill" }}
                        component="img"
                        width="50rem"
                        height="230rem"
                        image={cardData?.image?.medium ?? defaultText}
                        alt="Show"
                    />
                    <CardContent>
                        <Typography fontSize='15px'>
                            {cardData?.name ?? defaultText}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ marginTop: '-1rem' }}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Link>
        </div>
    );
}