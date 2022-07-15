import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import Axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const CustomListItemButton = styled(ListItemButton)({
  height: 34,
});
export default function CategoryList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    id: string
  ) => {
    setMenuLoading(true);
    setSelectedIndex(index);
    Axios.get("http://localhost:5000/category/all_sub/" + id).then((res) => {
      setSubCategories(res.data);
      setMenuLoading(false);
    });
    handleClick(event);
  };

  React.useEffect(() => {
    Axios.get("http://localhost:5000/category/all").then((res) => {
      setCategories(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {!loading ? (
        <Card
          sx={{
            width: "100%",
            width: 320,
            bgcolor: "background.paper",
            fontSize: 11,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: "bold", lineHeight: 0.2 }}>
            Categories
          </p>
          <List
            component="nav"
            aria-label="main mailbox folders"
            style={{ fontSize: 40 }}
          >
            {categories.map((category, index) => {
              return (
                <div>
                  <CustomListItemButton
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    // onClick={handleClick}
                    selected={selectedIndex === index}
                    onClick={(event) =>
                      handleListItemClick(event, index, category.category_id)
                    }
                  >
                    <ListItemIcon>
                      <StarPurple500Icon />
                    </ListItemIcon>
                    <ListItemText primary={category.title} />
                  </CustomListItemButton>
                  {!menuLoading ? (
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {subCategories.map((subCategory, index) => {
                        return (
                          <MenuItem
                            onClick={
                              // handleClose
                              () => {
                                navigate("/viewCategory", {
                                  state: {
                                    subCategory_id: subCategory.sub_category_id,
                                  },
                                });
                              }
                              //  &&
                            }
                          >
                            {subCategory.title}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  ) : (
                    <CircularProgress />
                  )}
                </div>
              );
            })}
          </List>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
