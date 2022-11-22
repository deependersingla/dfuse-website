import React, { Component } from 'react';
import Teams from './teams';
import "./../Css/main.css"


class About extends Component {
    render() {
        return <div
            id='HowItWorks'
            className="pt-5"
            style={{ marginRight: "5em" }}
        >
            <span className="heading1">How it works</span>
            <p className="p_text pt-5">
                dFuse will maintain one vault per asset. Each vault has multiple strategies,
                that we select based on Risk Parity. For more details, see our whitepaper.
                <br />
                <br />
                Our team will manage reinvesting profits, capital allocation and rebalancing of
                capital the strategies based on our market analysis.
                <br />
                <br />
                When you deposit your ATOM into a vault, you will be issued dfATOM tokens
                that indicate your ownership of the vault.
                <br />
                <br />
                dFuse charges 2% fees annually to manage gas, salaries and other costs.
                This 2% is deducted from the vault on each harvest by minting new dfATOM tokens.

            </p>
        </div >
    }
}

export default About;