import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 2 }}
                        >
                            <Link
                                to="/"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                {' '}
                                BOOKFLIX
                            </Link>
                        </Typography>

                        <Button color="inherit">
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                Login
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link
                                to="/signup"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                Sign Up
                            </Link>
                        </Button>
                        <IconButton color="inherit" component="span">
                            <Link
                                to="/cart"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                <ShoppingCartOutlinedIcon />
                            </Link>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header
