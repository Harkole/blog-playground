import React from 'react';

const IconButton = React.lazy(() => import('@material-ui/core/IconButton'));
const AccountCircle = React.lazy(() => import('@material-ui/icons/AccountCircle'));
const MenuItem = React.lazy(() => import('@material-ui/core/MenuItem'));
const Menu = React.lazy(() => import('@material-ui/core/Menu'));

const AccountMenu = () => {

    // State management for menus
    const [accountEl, setAccountEl] = React.useState<HTMLElement | null>(null);

    // Flags to state if the menu is open
    const openAccount = Boolean(accountEl);

    // Show the correct menu system
    const handleMenu = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAccountEl(event.currentTarget);
    }

    return (
        <div>
            <IconButton
                aria-owns='menu-appbar'
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
                    vertical: 'bottom',
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
    );
}

export default AccountMenu;