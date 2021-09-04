import { Card, Col, Row } from 'react-bootstrap'
import TodayInfected from "./CovidReportBoxComponents/TodayInfected"
import TotalInfected from './CovidReportBoxComponents/TotalInfected'
import TodayDeath from './CovidReportBoxComponents/TodayDeath'
import TotalDeath from './CovidReportBoxComponents/TotalDeath'
import TodayRecovered from './CovidReportBoxComponents/TodayRecovered'
import TotalRecovered from './CovidReportBoxComponents/TotalRecovered'

//Function for containing covid report component
function CovidReportBox(){
    return(
        <div>
            <h1>Thailand's Covid Report</h1>
            <Card className="text-dark">
                <Row>
                    <Col>
                        <TodayInfected></TodayInfected>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TotalInfected></TotalInfected>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        <TodayRecovered></TodayRecovered>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TotalRecovered></TotalRecovered>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        <TodayDeath></TodayDeath>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TotalDeath></TotalDeath>
                    </Col>
                </Row>
            </Card>
        </div>
        
    )
}

export default CovidReportBox