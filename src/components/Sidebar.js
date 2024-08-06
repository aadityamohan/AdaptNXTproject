// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Divider, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CalculatorIcon from '@mui/icons-material/Calculate';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Inventory', icon: <InventoryIcon /> },
    { text: 'Order', icon: <ShoppingCartIcon /> },
    { text: 'Returns', icon: <AssignmentReturnIcon /> },
    { text: 'Customers', icon: <PeopleIcon /> },
    { text: 'Shipping', icon: <LocalShippingIcon /> },
    { text: 'Channel', icon: <StoreIcon /> },
    { text: 'Integrations', icon: <IntegrationInstructionsIcon /> },
    { text: 'Calculators', icon: <CalculatorIcon /> },
    { text: 'Reports', icon: <BarChartIcon /> },
    { text: 'Account', icon: <AccountCircleIcon /> },
  ];

  return (
    <Box sx={{ width: 250, backgroundColor: '#f5f5f5', height: '100vh', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Sidebar
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
