import { Card } from "react-bootstrap"

function InitialReportCard(props){
    return(
        <Card>
            <Card.Header>
                {props.header}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default InitialReportCard