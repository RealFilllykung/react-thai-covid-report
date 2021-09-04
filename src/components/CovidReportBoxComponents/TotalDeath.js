import { useEffect, useState } from "react"
import ReportCard from "./ReportCardComponent/ReportCard"

import _getTodayReport from './_getTodayReport'

function TotalDeath(){
    const [totalDeath,setTotalDeath] = useState('')

    useEffect(() => {
        _getTodayReport('total_death',setTotalDeath)
    },[])

    return(
        <ReportCard title="Total Death (จำนวนผู้เสียชีวิตทั้งหมด)" text={totalDeath}></ReportCard>
    )
}

export default TotalDeath