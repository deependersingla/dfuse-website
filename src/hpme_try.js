import React, { Component } from 'react';
import "./../Css/main.css"
var Latex = require('react-latex')




class HomeScreen extends Component {
    render() {
        return <div className=''>
            <div className="row ">
                <div className='col-1'></div>
                <div className="col-md-4 col-sm-5 p-5">
                    <br />
                    <br />
                    <h2>Hi! We're <br /> dFuse</h2>
                    <p
                        // className="text-justify"
                        style={{
                            margin: '0 0 13px',
                            color: 'black',
                            display: 'inline-block',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '1.7em',
                            textAlign: 'justify'
                        }}
                    >
                        <br />
                        <h5>An Interchain Yield Farming Protocol built on Juno.</h5>
                        <br />
                        dFuse is the simplest way to make money on your IBC assets.dFuse allows you to deploy your
                        ATOM and other tokens into vaults that earn yield through multiple strategies across the various
                        IBC protocols.dFuse takes care of all the hard parts like protecting against Impermanent loss,
                        maintaining a healthy collateral ratio, auto compounding and rebalancing your portfolio across
                        multiple opportunites in multiple chains.We dFuse the risks and stress of DeFi investing.
                    </p>
                    <a
                        href="#HowItWorks"
                    >
                        <button type="button" class="btn btn-outline-dark">More About Us</button>
                    </a>
                </div>
                <div
                    // className='col-md-7 image_block'
                    className='col-md-7 '
                >
                    <img
                        // src="https://www.larvalabs.com/public/images/mattjohn-homepage-2x.png"
                        // src="https://thumbs.dreamstime.com/z/soccer-stuff-182425593.jpg"
                        src={require('../Assets/dFuse_bomb.jpeg')}
                        // width='800'
                        // height='600'
                        width="1000"
                        height="300"
                        // height='auto'
                        alt="dFuse"
                        style={{
                            maxWidth: "100%",
                            height: "85%"
                        }}
                    />
                </div>
            </div>
            <div
                id='HowItWorks'
                className="row"
                style={{
                    // backgroundColor: "#cae3e8",
                    backgroundImage: "linear-gradient(to right, #2193b0,#cae3e8)",
                }}
            >
                <div className='col-1'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <h2>How it works</h2>
                    <p
                        // className="text-justify"
                        style={{
                            margin: '0 0 13px',
                            color: 'black',
                            display: 'inline-block',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '1.7em',
                            textAlign: 'justify'
                        }}
                    >
                        dFuse will maintain one vault per asset. Each vault has multiple strategies such as Staking,
                        Lending and investing in LP pools. Our team will manage reinvesting profits, capital allocation
                        and rebalancing of capital the strategies based on our market analysis.
                        <br />
                        <br />
                        We will begin with a vault for ATOM, and deploy more as we develop strategies for other assets.
                        <br />
                        <br />
                        When you deposit your ATOM into a vault, you will be issued dfATOM tokens that indicate your
                        ownership of the vault.
                        <br />
                        <br />
                        dFuse charges 2% fees annually to manage gas, salaries and other costs. This 2% is deducted
                        from the vault on each harvest by minting new dfATOM tokens.

                    </p>
                </div>
            </div>
            <div
                id='Strategies'
                className="row"
                style={{
                    // backgroundColor: "#cae3e8",
                    backgroundImage: "linear-gradient(to right, #ee9ca7 ,#ffdde1)",
                }}
            >
                <div className='col-1'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <h2>Strategies we will invest in</h2>
                    <p
                        // className="text-justify"
                        style={{
                            margin: '0 0 13px',
                            color: 'black',
                            display: 'inline-block',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '1.7em',
                            textAlign: 'justify'
                        }}
                    >
                        dFuse, through its vaults, aims to maximise the return generated on the vault’s base asset.
                        For eg the dFuse’s ATOM vault aims to maximise the ATOM rewards generated by intelligently
                        allocating ATOM to a variety of options available such as Staking, Liquid Staking, Lending and
                        becoming LP of an ATOM AMM pool such as ATOM/OSMO and ATOM/JUNO.
                        <br />
                        <br />
                        The aim is to maximise return while keeping the risk below a certain threshold. While the APR of
                        LP pools are high(mostly) in comparison to staking/lending APR, the risks associated with allocating
                        to LP pools are also higher. The major risk is getting an unwanted exposure to coins other than the
                        base vault coin. For example, in order to contribute ATOM to ATOM/OSMO pool, the user has to first sell
                        half of their ATOM for OSMO and contribute to the pool. If OSMO underperforms ATOM, the pool will end up
                        with less ATOM and more OSMO. The user is also exposed to impermanence loss associated with the LP pool.
                        If the LP pool APR is not able to offset the risks associated with putting the base vault asset into the
                        LP pool, it will be wise to not allocate capital to the pool. Typically, staking/lending have low APR and
                        low risk whereas LP pools have high APR and higher risk. Deciding on the optimal mix is a rather tough
                        problem. A simple rule based approach for eg: allocating equal capital i.e. 50% to staking/lending and
                        50% to LP pool has a much higher risk contribution({'>90%'}) concentrated to the LP pool.
                        <br />
                        <br />
                        In order to solve this, dFuse aims to use the ‘Risk Parity’ Approach to come up with an optimal
                        allocation for each of the options.

                    </p>
                </div>
            </div>
            <div
                id="Risk_Parity"
                className="row text-white"
                style={{
                    // backgroundColor: "#cae3e8",
                    // backgroundImage: "linear-gradient(to bottom, #ddd6f3 ,#faaca8)",
                    backgroundImage: "linear-gradient(to right, #141e30 ,#243b55)",

                }}
            >
                <div className='col-1'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <h2>What is Risk Parity?</h2>
                    <p
                        // className="text-justify"
                        style={{
                            margin: '0 0 13px',
                            color: 'white',
                            display: 'inline-block',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '1.7em',
                            textAlign: 'justify'
                        }}
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
            <div
                id="Tokenomics"
                className="row"
                style={{
                    // backgroundColor: "#cae3e8",
                    // backgroundImage: "linear-gradient(to bottom, #ddd6f3 ,#faaca8)",
                }}
            >
                <div className='col-1'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <h2>Tokenomics
                    </h2>
                    <p
                        // className="text-justify"
                        style={{
                            margin: '0 0 13px',
                            color: 'black',
                            display: 'inline-block',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '1.7em',
                            textAlign: 'justify'
                        }}
                    >
                        There are two native tokens on the dFuse platform.The first is $BOMB and the second is
                        $veBOMB or voting escrowed Bomb.$BOMB is the primary token of dFUSE platform.It is earned by
                        depositing money into the vault.
                        <br />
                        <br />
                        $veBOMB is similar to Curve’s voting escrowed token $veCRV.It is earned by staking $BOMB.
                        0.01 $veBOMB is earned for every hour that you stake $BOMB.More $veBOMB means more LP rewards.
                        $veBOMB can not be traded or transferred.Whenever the underlying $BOMB is unstaked, the $veBOMB
                        balance drops to 0.
                        <br />
                        <br />
                        There is a total supply of 100 million tokens of $BOMB.These tokens are distributed as:
                        <br />
                        <br />
                        <div className="justify-content-center d-flex text-center table">
                            <table className="border">
                                <tr >
                                    <th ></th>
                                    <th >%</th>
                                    <th>{'Initial Unlock & Vesting Schedule'}</th>
                                </tr>
                                <tr>
                                    <td>{'Team & Advisors'}</td>
                                    <td>15</td>
                                    <td>0%, 12 months lockup, 30 months linear</td>
                                </tr>
                                <tr>
                                    <td>Private Sale</td>
                                    <td>10</td>
                                    <td>10%, 3 months lockup, 18 months monthly vesting</td>
                                </tr>
                                <tr>
                                    <td>Public Sale</td>
                                    <td>5</td>
                                    <td>10%, 12 months monthly vesting</td>
                                </tr>
                                <tr>
                                    <td>Reward Pool</td>
                                    <td>40</td>
                                    <td>Unlocked based on market conditions</td>
                                </tr>
                                <tr>
                                    <td>Treasury</td>
                                    <td>30</td>
                                    <td>5% 6 months cliff, 36 months linear vesting.</td>
                                </tr>
                            </table>
                        </div>
                    </p>
                </div>
            </div >

            <div
                id='Teams'
                className="row"
                style={{
                    // backgroundColor: "#cae3e8",
                    backgroundImage: "linear-gradient(to right, #ffd89b ,#19547b)",
                }}
            >
                <div className='col-1'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <h2>Teams</h2>
                    <p
                        // className="text-justify"
                        style={{
                            margin: '0 0 13px',
                            color: 'black',
                            display: 'inline-block',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '1.7em',
                            textAlign: 'justify'
                        }}
                    >
                        A was the first technical hire of a Y Combinator backed, Ed-tech startup based in Silicon
                        Valley where he was the sole Back End engineer. He took the company to 2M+ paid users. A is a
                        self-taught programmer who wrote his first AI algorithms to automate video gameplay. His next AI
                        automation project was with trading systems and his open source project based on Reinforcement
                        learning featured as one of github’s top 5 projects. A is leading technical development for dFuse
                        <br />
                        <br />
                        B has a CFA, an M.Tech in Computer Science
                        and a MSc in Financial Economics. B has worked as a Quantitative Researcher
                        at a $1B+ AUM systematic hedge fund. B brings an insider’s perspective of quantitative
                        trading environments. He automated the entire trading system at the fund by developing a
                        trade execution algorithm. The system intelligently placed orders, saving around 50% in slippage costs,
                        and cut down the number of traders from 5 to 1. B leads the research and quant efforts at dFuse.
                        He manages the entire pipeline from strategy generation to robustness analysis to capital allocation.
                        <br />
                        <br />
                        A{'&'}B have experience working together and running HFT systems. They have also written market
                        making algorithms for multiple regional centralised exchanges and have a market share of
                        high single digit in multiple crypto markets.
                        <br />
                        <br />
                        C has worked in and co founded startups for 10 years including working with A{'&'}B.
                        He brings in product management and technical experience. He has experience writing
                        smart contracts and has been an active DeFi Yield Farmer since early 2020.
                    </p>
                </div>
            </div>

        </div >;
    }
}

export default HomeScreen;