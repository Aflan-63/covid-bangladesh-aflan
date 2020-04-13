import React, { Component } from 'react'
import axios from 'axios'
import '../../style.css'
export default class Information extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        axios.get('https://corona-bd.herokuapp.com/district')
            .then(response => {
                // console.log(response.data.data);
                this.setState({ data: response.data.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Used in side "totalinfectedcomponent" 
    countTotal() {
        let total = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
            total = total + myList[key].count;
        });
        return total;
    }

    render() {
        return (
            <div>
                <div className="informationcomponent">
                    <div className="totalinfectedcomponent">
                        {/* API USED */}
                        <div className="infectedrect" />
                        <div className="x100000">000{this.countTotal()}</div>
                        <div className="totalInfectedInBd">
                            <span className="totalInfectedInBd-0">Total Infected</span><span className="totalInfectedInBd-14"> in BD</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
