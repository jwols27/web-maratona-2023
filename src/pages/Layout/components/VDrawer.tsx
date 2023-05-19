import React from 'react';
import { Box, Divider, Drawer } from '@mui/material';

import { NavItem, TNavItem } from './NavItem';
import '../layout.css';
import logo from '../../../shared/assets/logo.png';

interface IVDrawerProps {
    itens: TNavItem[];
    open: boolean;
    handleDrawer: (b: boolean) => void;
    path: string;
}

export const VDrawer: React.FC<IVDrawerProps> = ({
    itens,
    open,
    handleDrawer,
    path
}) => {
    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={() => handleDrawer(false)}
        >
            <Box
                width={300}
                onClick={() => handleDrawer(false)}
                onKeyDown={() => handleDrawer(false)}
                bgcolor={'primary.main'}
                flexGrow={1}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'start'}
                    height={115}
                    bgcolor={'primary.dark'}
                    pl={2}
                >
                    <img
                        src={logo}
                        style={{
                            objectFit: 'contain'
                        }}
                        width={'175px'}
                        alt={'Maratona SBC de Programação'}
                    ></img>
                </Box>
                {itens.map((item) => (
                    <div key={item.path}>
                        <Divider />
                        <NavItem
                            name={item.path}
                            label={item.label}
                            selected={path === item.path}
                        >
                            {item.icon}
                        </NavItem>
                    </div>
                ))}
                <Divider />
            </Box>
        </Drawer>
    );
};
