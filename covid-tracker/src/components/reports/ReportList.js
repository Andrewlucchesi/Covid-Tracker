import React from 'react'
//This creates a list of generated reports
//Report list is called in Report.js to display data. 

const ReportList = ({reports}) => {
  return (
    <div className="report-list section">
      {reports && reports.map(report => {
        return(
        report.reportedAt && <p key={report.id}>{report.zip} {report.city} {report.country} {new Date(report.reportedAt.toDate()).toDateString()}</p>
        //Show date for diagnostic purposes
        //First term prevents app from crashing when a new report is submitted, which 
        //report.reportedAt && <p>{report.zip} {report.city} {new Date(report.reportedAt.toDate()).toDateString()} </p>
        )
        })}
    </div>
  )
}

export default ReportList 