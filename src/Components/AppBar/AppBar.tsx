import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import styles from './AppBar.module.css';

export interface IApplicationBarProps {
    isAuthenticated: boolean;
}

const MenuAppBar = (props: IApplicationBarProps) => {

    // State management for menus
    const [menuEl, setMenuEl] = React.useState<HTMLElement | null>(null);
    const [accountEl, setAccountEl] = React.useState<HTMLElement | null>(null);

    // Flags to state if the menu is open
    const openMenu = Boolean(menuEl);
    const openAccount = Boolean(accountEl);

    // Show the correct menu system
    const handleMenu = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log(event.currentTarget.getAttribute('aria-label'));

        if (event.currentTarget.getAttribute('aria-label') === 'Menu') {
            setMenuEl(event.currentTarget);
            return;
        }

        if (event.currentTarget.getAttribute('aria-label') === 'Account') {
            setAccountEl(event.currentTarget);
            return;
        }
    }
    
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        aria-owns={openMenu ? 'menu-pages' : undefined}
                        aria-haspopup='true'
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                        <Menu
                            id='menu-pages'
                            anchorEl={menuEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openMenu}
                            onClose={() => setMenuEl(null)}
                        >
                            <MenuItem onClick={() => setMenuEl(null)}>Page Link</MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={styles.grow}>
                        Title
                    </Typography>
                    {props.isAuthenticated && (
                        <div>
                            <IconButton
                                aria-owns={openAccount ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                aria-label='Account'
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={accountEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openAccount}
                                onClose={() => setAccountEl(null)}
                            >
                                <MenuItem onClick={() => setAccountEl(null)}>Profile</MenuItem>
                                <MenuItem onClick={() => setAccountEl(null)}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuAppBar;
