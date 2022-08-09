import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import React from 'react';

const SidebarItem = ({
  depthStep = 15,
  depth = 0,
  expanded,
  item,
  ...rest
}) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const { url, label, items, Icon, onClick: onClickProp } = item;

  const toggleCollapse = () => {
    setCollapsed(prevValue => !prevValue);
  };

  const onClick = e => {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  };

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          'sidebar-item-expand-arrow' + ' sidebar-item-expand-arrow-expanded'
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>
      <Link href={url ? url : ''} passHref>
        <ListItem
          className="sidebar-item"
          onClick={onClick}
          button
          component="a"
          dense
          {...rest}
        >
          <div
            style={{ paddingLeft: depth * depthStep }}
            className="sidebar-item-content"
          >
            {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
            <div className="sidebar-item-text">
              <Typography variant="body2" component="h1">
                {label}
              </Typography>
            </div>
          </div>
          {expandIcon}
        </ListItem>
      </Link>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === 'divider' ? (
                  <Divider style={{ margin: '6px 0' }} />
                ) : (
                  <SidebarItem
                    depth={depth + 2}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
};

const Sidebar = ({ items, depthStep, depth, expanded }) => {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
