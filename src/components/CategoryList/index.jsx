import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import DiamondIcon from '@mui/icons-material/Diamond';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ToysIcon from '@mui/icons-material/Toys';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import HealingIcon from '@mui/icons-material/Healing';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Card from '@mui/material/Card';
import { styled } from "@mui/system";

const CustomListItemButton = styled(ListItemButton)({
    height:34,
    });
export default function CategoryList() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    return (
    <Card sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper',fontSize:11,maxHeight:450, }}>
      <p style={{fontSize:18,fontWeight:'bold',lineHeight:0.2}}>Categories</p>
      <List component="nav" aria-label="main mailbox folders" style={{fontSize:40}}>
        <CustomListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <WomanIcon />
          </ListItemIcon>
          <ListItemText primary="Women's Fashion" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <ManIcon />
          </ListItemIcon>
          <ListItemText primary="Men's Fashion" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PhoneIphoneIcon />
          </ListItemIcon>
          <ListItemText primary="Phones & Telecommunications" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Computer, Office & Security" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <DiamondIcon />
          </ListItemIcon>
          <ListItemText primary="Jewelry & Watches" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <CameraAltIcon />
          </ListItemIcon>
          <ListItemText primary="Consumer Electronics" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <ShoppingBagIcon />
          </ListItemIcon>
          <ListItemText primary="Bags & Shoes" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <ToysIcon />
          </ListItemIcon>
          <ListItemText primary="Toys,Kids & Babies" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <SportsCricketIcon />
          </ListItemIcon>
          <ListItemText primary="Outdoor Fun & Sports" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 9}
          onClick={(event) => handleListItemClick(event, 9)}
        >
          <ListItemIcon>
            <HealingIcon />
          </ListItemIcon>
          <ListItemText primary="Beauty,Health & Hair" />
        </CustomListItemButton>
        <CustomListItemButton
          selected={selectedIndex === 10}
          onClick={(event) => handleListItemClick(event, 10)}
        >
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Automobiles & Motorcycles" />
        </CustomListItemButton>

      </List>
    </Card>
    );
}
