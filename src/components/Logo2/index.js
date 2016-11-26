import React, {Component} from 'react';
import {Blazon, Ellipsis1, Ellipsis2, Ellipsis3} from './styles';


class Logo extends Component {
  state = {
    first: 0,
    second: 0,
    third: 0,
  }

  attachStrokeLength = (stateName) => (ref) => {
    if (!this.state[stateName]) {
      this.setState({[stateName]: ref.getTotalLength()});
    }
  }

  render() {
    const {attachStrokeLength} = this;
    const {width = 600, height = 600} = this.props;
    const {first, second, third} = this.state;

    return (
      <svg width={width} height={height} viewBox="0 0 600 600">
        <title>ReactJS Vienna</title>
        <g fill="none">
          <Ellipsis1
            d="M299.529,197.628 C366.885,197.628 429.457,207.293 476.636,223.535 C533.48,243.104 568.43,272.768 568.43,299.628 C568.43,327.619 531.389,359.131 470.347,379.356 C424.196,394.647 363.468,402.628 299.529,402.628 C233.975,402.628 171.899,395.136 125.239,379.187 C66.193,359.005 30.628,327.084 30.628,299.628 C30.628,272.986 63.998,243.552 120.043,224.012 C167.398,207.503 231.515,197.628 299.529,197.628 Z"
            strokeDasharray={first}
            strokeDashoffset={first}
            innerRef={attachStrokeLength('first')}
          />
          <Ellipsis2
            d="M210.736,248.922 C244.385,190.574 284.017,141.198 321.656,108.442 C367.006,68.976 410.163,53.519 433.431,66.937 C457.679,80.92 466.473,128.751 453.498,191.733 C443.688,239.351 420.264,295.945 388.322,351.334 C355.573,408.122 318.072,458.153 280.945,490.606 C233.964,531.674 188.545,546.535 164.76,532.819 C141.681,519.509 132.854,475.898 143.926,417.586 C153.281,368.316 176.758,307.841 210.736,248.922 Z"
            strokeDasharray={second}
            strokeDashoffset={second}
            innerRef={attachStrokeLength('second')}
          />
          <Ellipsis3
            d="M210.821,351.482 C177.075,293.19 154.09,234.195 144.509,185.227 C132.965,126.228 141.127,81.118 164.373,67.661 C188.597,53.637 234.428,69.905 282.513,112.601 C318.869,144.881 356.201,193.438 388.236,248.774 C421.08,305.507 445.697,362.983 455.272,411.356 C467.389,472.569 457.581,519.34 433.819,533.096 C410.762,546.444 368.57,532.312 323.58,493.597 C285.567,460.886 244.898,410.344 210.821,351.482 Z"
            strokeDasharray={third}
            strokeDashoffset={third}
            innerRef={attachStrokeLength('third')}
          />
          <Blazon
            d="M313.350363,233 L313.350363,272.29217 L353.464197,272.29217 C354.562009,255.182481 354.938471,236.410782 355,233 L313.350363,233 Z M286.650176,272.29217 L286.650176,233 L245,233 C245.062069,236.410782 245.43934,255.182481 246.536882,272.29217 L286.650176,272.29217 Z M350.601468,298.007497 L313.350633,298.007497 L313.350633,366.724604 C320.965688,361.97085 327.791927,353.990621 332.557205,346.341555 C340.469651,333.639907 347.306954,315.106947 350.601468,298.007497 Z M286.650176,366.724604 L286.650176,298.007497 L249.399342,298.007497 C252.693585,315.106947 259.531698,333.639907 267.444144,346.341825 C272.209962,353.990891 279.034852,361.971119 286.650176,366.724604 Z"
          />
        </g>
      </svg>
    );
  }
}


export default Logo;
