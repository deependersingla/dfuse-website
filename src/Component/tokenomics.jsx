import React, { Component } from 'react';
import "./../Css/main.css"

class Tokenomics extends Component {
    render() {
        return <div className="componenet_bg">
            <div
                id="Tokenomics"
                className="row"
                style={{ margin: "5em" }}
            >
                <div className='col-1 col-sm-none'>
                </div>
                <div className="col-md-11 col-sm-11 p-5">
                    <span className="heading1">Tokenomics
                    </span>
                    <p
                        className="p_text"
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
        </div>
    }
}

export default Tokenomics;