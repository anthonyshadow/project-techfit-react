import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Accordion, Card, ButtonToolbar } from "react-bootstrap";
import RecipeCardInfo from '../components/Profile/SavedItemsSection/RecipeCardInfo'
import WorkoutCardInfo from '../components/Profile/SavedItemsSection/WorkoutCardInfo'

//----- css style variable.

// const colStyle = { marginTop: "100px" };
const rowStyle = { minHeight: "300px" };
const footerButton = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
  padding: "40px"
};

const imageStyle = { height: "100px", width: "100px", marginBottom: "40px"}


export default function App() {
  return (
    <Row style={{marginTop: "100px"}} className="p-5 text-center">
      <Col lg={2}>
        <img src="images/profle-pic.png" alt="Profile Picture" style={imageStyle}></img>
        <h3>First Last</h3>

      </Col>
      <Col lg={4}>
      <Accordion >
        <Card style={{ backgroundColor: "white! important" }}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }} >
              User Information
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              Information Form

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
          

      </Col>
      <Col lg={2}>

      </Col>
      <Col lg={4}>

      <ButtonToolbar>
    <Button variant="outline-dark" size="sm" style={{marginRight: "15px"}}>
      Meal Plan
    </Button>
    <Button variant="dark" size="sm">
      Workouts
    </Button>
    </ButtonToolbar>

      </Col>
    </Row>
    );
  }
  