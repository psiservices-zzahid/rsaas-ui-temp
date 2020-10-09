import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function FilterAccordion() {
  const handleCarrotClick = (e) => {
    if (e && e.target) {
      const carrot = document.getElementById("accordianCarrot");
      if (carrot.className === "fas fa-angle-right")
        carrot.className = "fas fa-angle-down";
      else carrot.className = "fas fa-angle-right";
    }
  };
  return (
    <div className="row  border-top">
      <div className="d-flex flex-column">
        <div>
          <h2>Agent Schedules</h2>
        </div>
        <div>
          <Accordion>
            <Card className="filter-accordian">
              <Card.Header>
                <Accordion.Toggle
                  onClick={handleCarrotClick}
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
    </div>
  );
}
