import React, { Component } from 'react'
import { fetchUSACountyData } from '../api';


class Info extends Component {
    constructor(props) {

        super(props)
        this.state = {
            countryData: props.CountryData,
            countyData: {},
            isCountyDataLoaded: true,
        }
        
    }

    async componentDidMount() {
        const countyData = await fetchUSACountyData();
        
        this.setState({ countyData: countyData});
        this.setState({ isCountyDataLoaded: true});
        
    }
    // createCountyTable = () => {
        
    //     if(this.state.isCountyDataLoaded == false)
    //     {
    //         return;
    //     }
    //     let table = [];
        
    //     console.log(this.state.countyData.message);
    //     for (const county of this.state.countyData.message)
    //     {
    //         if (county.state_name === "California")
    //         {
    //             console.log("Success");
    //             return;
    //         }
    //     }

    // }
    //generate a table displaying each country
    //along with it's confirmed case total and death toll
    createCountryTable = (props) => {
        //   }
        let table = [];
        
        for (const country of this.state.countryData.Countries) {
            let children = [];
            let key = country.CountryCode;
            children.push(<td>{country.Country}</td>);
            children.push(<td>{country.TotalConfirmed}</td>);
        children.push(<td>{country.TotalDeaths}</td>)
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
                {/* <table>
                    {this.createCountyTable()}
                </table> */}
            </div>
            
            
        )
    }
}



export default Info

