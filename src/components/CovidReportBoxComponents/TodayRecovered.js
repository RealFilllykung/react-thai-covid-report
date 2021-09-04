import { useEffect, useState } from "react"
import InitialReportCard from "./ReportCardComponent/InitialReportCard"

import _getTodayReport from './_getTodayReport'

function TodayRecovered(){
    const [todayRecovered,setTodayRecovered] = useState('')

    useEffect(() => {
        _getTodayReport('new_recovered',setTodayRecovered)
    },[])

    return(
        <InitialReportCard header="Recovered Case" title="New Recovered (จำนวนผู้หายป่วยใหม่)" text={todayRecovered}></InitialReportCard>
    )
}

export default TodayRecovered