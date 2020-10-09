import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { formatDate } from "../../utils/date-util";
import styled from "styled-components";
import "./schedule-tab.css";
import ScheduleTable from "./schedule-table";
import FilterAccordion from "./filter-accordion";
import TimeIncrementForm from "./time-increment-from";
const GridWrapper = styled.div`
  text-align: left;
  padding: 0.5em;
`;
export class ScheduleSettings extends React.Component {
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
  render() {
    return (
      <GridWrapper>
        <div className="container menu-container">
          <div className="row ">
            <sup className="date">{this.state.date}</sup>
            <h1>Schedule Settings</h1>
          </div>
          {/* <div className="row border-top">
            <form>
              <label htmlFor="time_increment">
                <b>Time Slot Increment </b>(in minutes)
              </label>
              <input
                type="text"
                id="time_increment"
                name="timeInc"
                placeholder="Enter Increment"
              />
            </form>
          </div> */}
          <TimeIncrementForm />
          {/* <div className="row  border-top">
            <div className="d-flex flex-column">
              <div>
                <h2>Agent Schedules</h2>
              </div>
              <div>
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
                          <label htmlFor="time_increment">
                            <b>First Name </b>
                          </label>
                          <input
                            type="text"
                            id="time_increment"
                            name="timeInc"
                            placeholder="Enter Increment"
                          />
                          <div className="col text-center">
                            <Button className="center">FILTER</Button>
                          </div>
                        </form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div> */}
          <FilterAccordion />
          <div className="row border-bottom">
            <ScheduleTable />
          </div>
        </div>
      </GridWrapper>
    );
  }
}
