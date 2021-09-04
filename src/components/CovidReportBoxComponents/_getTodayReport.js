import axios from "axios"

function _getTodayReport(field_name, setter){
    axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
            .then(res => {
                const data = res.data[0]
                setter(data[field_name])
            })
}

export default _getTodayReport