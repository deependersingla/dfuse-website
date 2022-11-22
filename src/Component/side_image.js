import React, { Component } from 'react';
import "./../Css/main.css"


class SideImage extends Component {

    render() {
        return <img
            // src={require('../Assets/astronaut-PNG.png')}
            src={this.props.image_src}
            className={this.props.cl_name}
            alt="dFuse"
            align="middle"

        />

    }
}

export default SideImage;