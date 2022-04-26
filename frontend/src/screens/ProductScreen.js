import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const ProductScreen = () => {
    const [product, setProduct] = useState({})

    const params = useParams()

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get(`/api/products/${params.id}`)

            setProduct(data)
        }

        getProducts()
    })

    return (
        <>
            <Container
                sx={{ bgcolor: '#26a69a', height: '100vh', my: 1, py: 1 }}
            >
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={3} sx={{ height: '50%' }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={product.image}
                            />
                        </Card>
                        <Typography variant="h5" gutterBottom component="div">
                            {product.name}
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>2</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>2</Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ProductScreen
