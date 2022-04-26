import { Container, Typography } from '@mui/material'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

const Footer = () => {
    return (
        <>
            <CssBaseline>
                <Container
                    maxWidth="sm"
                    sx={{
                        bgcolor: '',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'bottom',
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                    >
                        Copyrights &copy; BOOKFLIX 2022
                    </Typography>
                </Container>
            </CssBaseline>
        </>
    )
}

export default Footer
