import React, { Component } from 'react'

class Info extends Component {
    constructor(props) {super(props);
        console.log(props.CountryData);
        this.state = {
            countryData: props.CountryData,
            countyData: props.CountyData,
            }
        }

    createCountyTable = () => {
        let table = [];
        console.log(this.state.countyData);
        for (const county of this.state.countyData)
        {
            if (county.state_name === "California")
            {
                let children = [];
                let key = county.county_name;
                children.push(<td>{county.county_name}</td>);
                children.push(<td>{county.confirmed}</td>);
                children.push(<td>{county.death}</td>);
                table.push(<tr key={key}>{children}</tr>);
            }
        }
        return table;
    }
    
    //generate a table displaying each country
    //along with it's confirmed case total and death toll
    createCountryTable = (props) => {
        let table = [];
        for (const country of this.state.countryData) {
            let children = [];
            let key = country.CountryCode;
            children.push(<td>{country.Country}</td>);
            children.push(<td>{country.TotalConfirmed}</td>);
            children.push(<td>{country.TotalDeaths}</td>);
            table.push(<tr key={key}>{children}</tr>);
        }

        return table;
    }
    
    
    render (props) {
        return (
            <div className="container">
                <h4 className="center">Information</h4>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Enter zipcode:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                    <p>Here are the nearest location:</p>
                    <p>(List places here)</p>
                </form>
                <table>
                    {this.createCountryTable()}
                </table>
                <table>
                    {this.createCountyTable()}
                </table>
            </div>
        )
    }
}



export default Info;

