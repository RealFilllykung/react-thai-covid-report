import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import ReportCard from "./ReportCardComponent/ReportCard"

import _getTodayReport from './_getTodayReport'

function TotalInfected(){
    const [totalInfected,setTotalInfected] = useState('')

    useEffect(() => {
        _getTodayReport('total_case',setTotalInfected)
    },[])

    return(
        <Card>
            <ReportCard title="Total Infected (จำนวนผู้ติดเชื้อทั้งหมด)" text={totalInfected}></ReportCard>
        </Card>
    )
}

export default TotalInfected