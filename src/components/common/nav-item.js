import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavItem = styled.div`
  text-align: left; /* Aligns <a> inside of NavIcon div */
  padding: 0.7rem;
  padding-right: 2rem;
  background-color: ${(props) => (props.active ? "#014a99" : "#ffffff")};
  a {
    color: ${(props) => (props.active ? "white" : "#000000")};
  }
`;

export class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };
  render() {
    const { active } = this.props;
    return (
      <StyledNavItem
        to={this.props.path}
        active={active}
        className="border-bottom"
      >
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          {this.props.name}
        </Link>
      </StyledNavItem>
    );
  }
}
