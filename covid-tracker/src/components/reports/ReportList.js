import React from 'react'
//This creates a list of generated reports
//Currently is filled with dummy data
//Will likely be removed from future versions

const ReportList = ({reports}) => {
    console.log(reports);
return (
    
    <div className="report-list section">
        {reports && reports.map(report => {
        return(
        <p key={report.id}>{report.zip} {report.city} {report.country}</p>
        )
        })}

       
    </div>

)
}

export default ReportList 