import React from "react";
import styled from "styled-components";
import { NavItem } from "./nav-item";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  height: 100%;
  text-align: left;
  background-color: #f8f9fa;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding: 0.5rem;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: "/schedule",
      items: [
        {
          path:
            "/dashboard" /* path is used as id to check which NavItem is active basically */,
          name: "DASHBOARD",
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
        },
        {
          path: "/schedule",
          css: "padding-right: 1.5rem",
          name: "SCHEDULE SETTINGS",
          key: 2,
        },
        {
          path: "/NoMatch",
          name: "UNIT ALLOCATION",
          key: 3,
        },
      ],
    };
  }
  onItemClick = (path) => {
    this.setState({
      activePath: path,
    }); /* Sets activePath which causes rerender which causes CSS to change */
  };
  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem
                className="navitem"
                path={item.path}
                name={item.name}
                css={item.css}
                onItemClick={this.onItemClick}
                /* Simply passed an entire function to onClick prop */ active={
                  item.path === activePath
                }
                key={item.key}
              />
            );
          })
        }
      </StyledSideNav>
    );
  }
}
const RouterSideNav = withRouter(SideNav);
export default class Sidebar extends React.Component {
  render() {
    return <SideNav></SideNav>;
  }
}
