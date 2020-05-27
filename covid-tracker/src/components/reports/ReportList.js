import React from 'react'
//This creates a list of generated reports
//Report list is called in Report.js to display data. 

const ReportList = ({reports}) => {
return (
    <div className="report-list section">
        {reports && reports.map(report => {
        return(
        <p>{report.zip} {report.city}</p>
        )
        })}

       
    </div>

)
}

export default ReportList 