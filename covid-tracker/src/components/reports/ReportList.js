import React from 'react'
//This creates a list of generated reports
//Currently is filled with dummy data
//Will likely be removed from future versions

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