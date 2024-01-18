import { Link } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" id="appbar">
                <Toolbar>
                    <Typography id="header" variant="h2" component="div" sx={{ flexGrow: 1 }}>
                        NC News
                    </Typography>
                    <Typography variant="h4">
                        <div sx={{ textAlign: 'center' }} id="links">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/articles" >Articles</Link></li>
                                <li><Link to="/topics" >Topics</Link></li>
                            </ul>
                        </div>
                    </Typography>
                    <div>
                        <IconButton
                            size="medium"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        grumpy19
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

