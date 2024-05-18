import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { TbShoppingCartCopy } from "react-icons/tb";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function Navigate() {
  // const [open, setOpen] = useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <List
      sx={{ width: "100%", maxWidth: 180, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListItemButton component="div" id="nested-list-subheader">
          <Link to="/admin" className="flex items-center">
            <ListItemIcon>
              <AiFillHome />
            </ListItemIcon>
            Dashboard
          </Link>
        </ListItemButton>
      }
    >
      <ListItemButton>
        <Link to="/admin/accounts" className="flex items-center">
          <ListItemIcon>
            <MdManageAccounts />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/admin/products" className="flex items-center">
          <ListItemIcon>
            <LuClipboardList />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/admin/orders" className="flex items-center">
          <ListItemIcon>
            <TbShoppingCartCopy />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </Link>
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <RiDeleteBinLine />
        </ListItemIcon>
        <ListItemText primary="Delete" />
        {open ? <FaChevronDown /> : <FaChevronUp />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="/admin/delete/accounts" className="flex items-center">
              <ListItemIcon>
                <MdManageAccounts />
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </Link>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="/admin/delete/products" className="flex items-center">
              <ListItemIcon>
                <LuClipboardList />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </Link>
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="/admin/delete/orders" className="flex items-center">
              <ListItemIcon>
                <TbShoppingCartCopy />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
}
