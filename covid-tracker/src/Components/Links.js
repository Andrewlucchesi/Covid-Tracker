import React, {Component} from 'react';


class List extends Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            links: [
                { link: "report a diagnosis" },
                { link: "view recent cases" }
            ]
        }
    }

    renderTableData() {
        return this.state.links.map((option, index) => {
            const { link } = option
            return (
                <tr key={link}>
                    <td>{link}</td>
                </tr>
            )
            
        })
    }
    
    render() {
        return (
            <div>
                <h1>What would you like to do?</h1>
                <table id = 'options' >
                    <tbody style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 'bold',
                        fontFamily: 'Times New Roman',
                        lineHeight: 10,
                        fontSize: 50
                        }}>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;