import { useEffect, useState } from "react"
import InitialReportCard from "./ReportCardComponent/InitialReportCard"

import _getTodayReport from './_getTodayReport'

function TodayInfected(){
    const [todayInfected,setTodayInfected] = useState('')

    useEffect(() => {
        _getTodayReport('new_case',setTodayInfected)
    },[])

    return(
        <InitialReportCard header="Infected Case" title="New Infected (จำนวนผู้ติดเชื่อใหม่)" text={todayInfected}></InitialReportCard>
    )
}

export default TodayInfected