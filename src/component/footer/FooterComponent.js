import React, { Component } from 'react'
import '../../style.css'
import Helpline from './Helpline'
import WHO from './WHO'
import IEDCR from './IEDCR'
export default class FooterComponent extends Component {
    render() {
        return (

            <div className="footer">
                <Helpline></Helpline>
                <WHO></WHO>
                <IEDCR></IEDCR>
            </div>

        )
    }
}
