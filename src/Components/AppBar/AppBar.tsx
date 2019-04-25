import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

const appBar = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color='inherit' aria-label='Menu'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit'>
                        News
                    </Typography>
                    <IconButton color='inherit'>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default appBar;