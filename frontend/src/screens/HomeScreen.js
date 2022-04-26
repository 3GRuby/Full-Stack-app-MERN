import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import { Product } from '../components/Product'
import axios from 'axios'

/* const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
})) */

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

        getProducts()
    }, [])

    return (
        <>
            <Container sx={{ bgcolor: '', height: '100vh', my: 1, py: 1 }}>
                <Grid
                    direction="row"
                    /* justifyContent="center"
                    alignItems="center" */
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    /*  sx={{ bgcolor: '#aed581', height: '20vh', my: 1 }} */
                >
                    {products.map((product) => (
                        <Grid item xs={2} sm={4} md={4} key={product._id}>
                            <>
                                <Product product={product} />
                            </>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default HomeScreen
