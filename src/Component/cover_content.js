import React, { Component } from 'react';
import "./../Css/main.css"


class CoverContent extends Component {
    render() {
        return <div>
            <br />
            <br />

            <span className="heading1">Hi! We're dFuse</span>
            <p>
                <br />
                <span className="heading2" >An Interchain Yield Optimizer on IBC assets.</span>
                <br />
                <br />
                <span className="p_text">
                    dFuse is the simplest way to make money from your IBC assets.
                    dFuse allows you to deploy your ATOM and other tokens into vaults
                    that earn yield through multiple strategies across all chains.
                    dFuse takes care of all the hard parts like protecting against
                    Impermanent loss, maintaining a healthy collateral ratio, auto compounding
                    and rebalancing your portfolio.
                    <br />
                    <br />
                    <span className="heading3" >We dFuse the risks and stress of DeFi investing.</span>
                </span>
            </p>
            <br />
            <br />
            <a
                href="#HowItWorks"
            >
                <button type="button" className="button-1">More About Us</button>
            </a>
        </div>
    }
}

export default CoverContent;