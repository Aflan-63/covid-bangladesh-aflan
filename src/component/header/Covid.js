import React, { Component } from 'react'
import '../../style.css'
export default class Covid extends Component {
    render() {
        return (
            <div>
                <div className="headercomponent">
                    <div className="covid19Bangladesh">
                        <span className="covid19Bangladesh-0">COVID-19 </span><span className="covid19Bangladesh-9">Bangladesh</span>
                    </div>
                    <a type="button" target="_blank" rel="noopener noreferrer" className="sourceLink" href="https://www.iedcr.gov.bd/">
                        <div className="activateState">
                            <div className="sourceHttpswwwiedcrgovbd">Source: https://www.iedcr.gov.bd/</div>
                        </div>
                        <div className="hoverState">
                            <div className="sourceHttpswwwiedcrgovbd2a846db7">Source: https://www.iedcr.gov.bd/</div>
                        </div>
                        <div className="defaultState">
                            <div className="sourceHttpswwwiedcrgovbd1c08a5de">Source: https://www.iedcr.gov.bd/</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
