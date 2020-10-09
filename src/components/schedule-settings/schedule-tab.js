import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { formatDate } from "../../utils/date-util";
import styled from "styled-components";
import "./schedule-tab.css";
import ScheduleTable from "./schedule-table";
const GridWrapper = styled.div`
  text-align: left;
  padding: 0.5em;
`;
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: formatDate(new Date()),
    };
  }
  componentDidMount() {
    this.getDate();
  }
  getDate() {
    const date = formatDate(new Date());

    this.setState({
      date: date,
    });
  }
  handleCarrotClick(e) {
    if (e && e.target) {
      const carrot = document.getElementById("accordianCarrot");
      if (carrot.className === "fas fa-angle-right")
        carrot.className = "fas fa-angle-down";
      else carrot.className = "fas fa-angle-right";
    }
  }
  render() {
    return (
      <GridWrapper>
        <div className="container menu-container">
          <div className="row border-bottom">
            <sup className="date">{this.state.date}</sup>
            <h1>Schedule Settings</h1>
          </div>
          <div className="row">
            <form>
              <label for="time_increment">
                <b>Time Slot Increment </b>(in minutes)
              </label>
              <input
                type="text"
                id="time_increment"
                name="timeInc"
                placeholder="Enter Increment"
              />
            </form>
          </div>
          <div className="row  border-top">
            <form>
              <h2 style={{ display: "inline-block" }}>Agent Schedules</h2>
              <Accordion>
                <Card className="filter-accordian">
                  <Card.Header>
                    <Accordion.Toggle
                      onClick={this.handleCarrotClick}
                      as={Button}
                      variant="link"
                      eventKey="0"
                    >
                      <i className="fas fa-angle-right" id="accordianCarrot">
                        <span id="accordText"> FILTER CRITERIA</span>
                      </i>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <form>
                        <label for="time_increment">
                          <b>First Name </b>
                        </label>
                        <input
                          type="text"
                          id="time_increment"
                          name="timeInc"
                          placeholder="Enter Increment"
                        />
                        <div class="col text-center">
                          <Button className="center">FILTER</Button>
                        </div>
                      </form>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </form>
          </div>
          <div className="row border-bottom">
            <ScheduleTable />
          </div>
        </div>
      </GridWrapper>
    );
  }
}
