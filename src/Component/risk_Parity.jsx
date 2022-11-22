import React, { Component } from 'react';
import "./../Css/main.css"
import Latex from 'react-latex';

class Risk_Parity extends Component {
    render() {
        return <div className="componenet_bg">
            <div
                id="Risk_Parity"
                className="row"
                style={{ margin: "5em" }}
            >

                <div className='col-1 col-sm-none'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <span className="heading1">What is Risk Parity?</span>
                    <p
                        className="p_text2"
                    >
                        Risk parity is an approach for portfolio construction which focuses on allocating an equal amount
                        of risk across the various assets. Risk Parity portfolios rely on risk-based diversification, seeking
                        to generate both higher and more consistent returns. The assertion is that when a portfolio is
                        constructed with an asset mix that diversifies the risk, rather than capital, across various
                        assets/strategies, the overall portfolio achieves a high sharpe i.e. risk adjusted reward.
                        <br />
                        <br />
                        Given a portfolio &nbsp;
                        <Latex>{`$$  w \\in \\mathcal{R^{N}}$$`}</Latex>
                        &nbsp;
                        where  represents the capital allocated to each asset/strategy and the return
                        covariance matrix  &nbsp;

                        <Latex>{`$$ \\sum$$`}</Latex>, the portfolio volatility is

                        <Latex displayMode={true}>{`$$\\sigma (\\omega) = \\sqrt{\\omega ^T\\sum \\omega }$$`}</Latex>
                        <br />
                        The volatility can be decomposed across various strategies:
                        <Latex displayMode={true}>{`$$\\sigma(\\omega) = \\sum_{i=1}^{N}\\omega_i\\delta\\sigma/\\delta\\omega_i = \\sum_{i=1}^{N}\\omega_i(\\sum\\omega)_i/\\sqrt{\\omega^T\\sum\\omega}$$`}</Latex>

                        <br />
                        The marginal risk contribution(MRC) of each strategy can be calculated as:
                        <Latex displayMode={true}>{`$$MRC_i = \\delta\\sigma/ \\delta \\omega_i = (\\sum\\omega)_i/ \\sqrt{\\omega^T\\sum\\omega}$$`}</Latex>

                        <br />
                        The risk contribution of each strategy to the overall risk &nbsp;
                        <Latex>{`$$  \\sigma(\\omega)$$`}</Latex>
                        &nbsp; can be calculated as:

                        <Latex displayMode={true}>{`$$RC_i = \\omega_i*MRC_i = \\omega_i(\\delta\\sigma/ \\delta \\omega_i) = \\omega_i(\\sum\\omega)_i/ \\sqrt{\\omega^T\\sum\\omega}$$`}</Latex>

                        <br />
                        The net risk of portfolio would be the sum of individual risk contributions
                        <Latex displayMode={true}>{`$$\\sigma(\\omega) = \\sum(RC_i)$$`}</Latex>

                        <br />
                        Assuming there are &nbsp;
                        <Latex>{`$$ N $$`}</Latex>
                        &nbsp; strategies in place to deploy the capital in the vault into.
                        In risk parity approach, a portfolio of strategy is created in a way to ensure that
                        equal-risk is distributed across each of them i.e.

                        <Latex displayMode={true}>{`$$RC_i = \\sigma(\\omega)/N$$`}</Latex>

                        <br />
                        We have &nbsp; &nbsp;
                        <Latex >{`$$\\omega_i(\\sum\\omega)i/ \\sqrt{\\omega^T\\sum\\omega}=\\sigma(\\omega)/N$$`}</Latex>
                        &nbsp; &nbsp;for i in 1, 2, …, N

                        <br />
                        <br />
                        The result capital allocation &nbsp;
                        <Latex>{`$$  \\omega_i$$`}</Latex>
                        &nbsp;
                        would allocate more capital to less risky strategies such as staking and lending and
                        lower capital to high risk albeit potentially high return LP pools.
                        <Latex displayMode={true}>{`$$$$`}</Latex>


                    </p>
                </div>
            </div>
        </div>
    }
}

export default Risk_Parity;