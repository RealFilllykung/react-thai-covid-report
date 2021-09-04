import { useEffect, useState } from "react"
import InitialReportCard from "./ReportCardComponent/InitialReportCard"

import _getTodayReport from './_getTodayReport'

function TodayDeath(){
    const [todayDeath,setTodayDeath] = useState('')

    useEffect(() => {
        _getTodayReport('new_death',setTodayDeath)
    },[])

    return(
        <InitialReportCard header="Death Case" title="New Death (จำนวนผู้เสียชีวิตใหม่)" text={todayDeath}></InitialReportCard>
    )
}

export default TodayDeath