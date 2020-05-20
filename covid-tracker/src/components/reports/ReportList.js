import React from 'react'
//This creates a list of generated reports
//Currently is filled with dummy data
//Will likely be removed from future versions

const ReportList = () => {
return (
    <div className="report-list section">
        <div className="card z-depth-0 report-info">
            <b> This is a sample report </b>    
        </div>

        <div className="card z-depth-0 report-info">
         <p> City: Los Angeles</p>
         <p> Zip: 90024 </p>    
         </div>
       
        <p>--------------------------</p>

        <div className="card z-depth-0 report-info">
        <p> City: Berkley</p>
        <p>Zip: 94720</p>    
        </div>

        <p>--------------------------</p>
        
        <div className="card z-depth-0 report-info">
        <p> City: Fresno</p>
        <p>Zip: 93706</p>    
        </div>
    </div>

)
}

export default ReportList 