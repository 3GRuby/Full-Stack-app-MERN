import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Rating from './Rating'
import { Link } from 'react-router-dom'

export const Product = ({ product }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345, py: 2 }}>
                <Link to={`/product/${product._id}`}>
                    <CardMedia
                        component="img"
                        height="270"
                        image={product.image}
                        alt="green iguana"
                        align="center"
                    />
                </Link>
                <CardContent align="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.Auther}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        ${product.price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="small">Add Cart</Button>
                    <Button size="small">
                        <Link to="/product/:id">view More</Link>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
