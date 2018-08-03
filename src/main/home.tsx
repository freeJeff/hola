import * as React from "react";
import { ZeroEx } from "0x.js";
var Web3 = require('web3')

export default class Home extends React.Component {
  zeroEx = null;
  componentDidMount() {
    this.show();
    this.state = {
      address: []
    };
    let web3js;
    window.addEventListener("load", () => {
      if (typeof web3 !== "undefined") {
        // Use Mist/MetaMask's provider
        console.log(web3)
        web3js = new ZeroEx(web3.currentProvider,null);
      } else {
        console.log("No web3? You should consider trying MetaMask!");
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(
          new Web3.providers.HttpProvider("http://localhost:8545")
        );
      }
    });
  }
  state = {
    address: []
  };

  show = async () => {
    try {
    //   var availableAddresses = await this.zeroEx.getAvailableAddressesAsync();
    //   console.log(availableAddresses);
    //   this.setState({ address: availableAddresses });
    } catch (error) {
      console.log("Caught error: ", error);
    }
  };

  render() {
    return <p>{this.state.address}}</p>;
  }
}
