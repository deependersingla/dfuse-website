import React, { Component } from 'react';
import "./../Css/main.css"

class Teams extends Component {
    render() {
        return <div
            id='Teams'
            // className="row"
            style={{ marginRight: "5em" }}
        >
            <span className="heading1">Teams</span>
            <p
                className="p_text2"
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
    }
}

export default Teams;