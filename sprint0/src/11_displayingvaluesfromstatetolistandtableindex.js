import React from 'react';
import ReactDOM from 'react-dom';

class One extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ['balamurugan', 'cognizant', 'newyork'],
            loan: [
                {
                    interestrate: '10%',
                    initialamoutn: 100
                },
                {
                    interestrate: '20%',
                    initialamoutn: 222
                }
            ]
        }
    }
    render() {
        return <div>
            hi
            {this.state.data}
            <ul>
                {this.state.data.map(e => <li>{e}</li>)}
            </ul>
            <ul>
                {this.state.loan.map(e => <li>{e.initialamoutn}</li>)}
            </ul>
            <table>
                <tr>
                    <td>
                        interest rate
                    </td>
                    <td>
                        iitial amount
                    </td>
                </tr>
                {this.state.loan.map(e =>
                    <tr>
                        <td>{e.interestrate}</td>
                        <td>{e.initialamoutn}</td>
                    </tr>
                )}
            </table>
        </div>
    }
}
export default One;

ReactDOM.render(<One></One>, document.getElementById("root"))


// rendering array in map 

// first one is simple list with array of values 

// second one array of differnt values list 

// thrid table show from values in stat e


//Note. the last one state works better. 
// you cant render state like this with two state in same constructor

            // this.state = {
            //     data: ['balamurugan','cognizant','newyork']
            // }
            // this.state = {
            //     loan: [
            //         {
            //             interestrate:'10%',
            //             initialamoutn: 100
            //         },
            //         {
            //             interestrate:'20%',
            //             initialamoutn: 222
            //         }
            //     ]
            // }
            // }