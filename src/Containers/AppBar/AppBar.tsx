import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './AppBar.module.css';
const AccountMenu = React.lazy(() => import('../../Components/AccountMenu/AccountMenu'));

export interface IApplicationBarProps {
    isAuthenticated: boolean;
}

const MenuAppBar = (props: IApplicationBarProps) => {
  
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={styles.grow}>
                        Blog
                    </Typography>
                    {props.isAuthenticated ? <AccountMenu /> : null}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuAppBar;
