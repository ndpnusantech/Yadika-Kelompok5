import Accordion from "react-bootstrap/Accordion";

function FaqAcor(props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {props.title}
        </Accordion.Header>
        <Accordion.Body>
          {props.content}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FaqAcor;
