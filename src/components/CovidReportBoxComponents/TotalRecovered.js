import { useEffect, useState } from "react"
import ReportCard from "./ReportCardComponent/ReportCard"

import _getTodayReport from './_getTodayReport'

function TotalRecovered(){
    const [totalRecovered,setTotalRecovered] = useState('')

    useEffect(() => {
        _getTodayReport('total_recovered',setTotalRecovered)
    },[])

    return(
        <ReportCard title="Total Recovered (จำนวนผู้หายป่วยทั้งหมด)" text={totalRecovered}></ReportCard>
    )
}

export default TotalRecovered