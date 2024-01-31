import { ethers } from "ethers";
import { providers } from "ethers"; // Add this line

import Web3Modal from 'web3modal'
import { ChatAppAddress, ChatAppABI } from "../Context/constants";


export const ChechIfWalletConnected = async()=> {
    try {
      if(!window.ethereum) return console.log("Install MateMask");
      const accounts =await window.ethereum.request({
        method: "eth_account",
      });

      const firstAccount = accounts[0];
      return firstAccount;
    }
    catch (error) {
        console.log(error);
    }
};
export  const connectWallet = async() => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts =await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (error) {
        console.log(error);
    }
};


const fetchContract = (signerOrProvider) => new ethers.Contract(ChatAppAddress, ChatAppABI , signerOrProvider);

export const connectingWithContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        
        if (!connection || !connection.provider || !connection.provider.request || !connection.provider.on) {
            console.error("Invalid or missing provider properties in the connection object:", connection);
            throw new Error("Invalid or missing provider properties in the connection object");
        }

        const provider = new providers.Web3Provider(connection); // Use providers here
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        return contract;
    } catch (error) {
        console.error("Error connecting with contract:", error);
        throw error; // rethrow the error
    }
};




export const converTime = (time) => {

const newTime =new Date(time.toNumber());
const realTime =newTime.getHours() + "/ " + newTime.getMinutes() + "/" + newTime.getSeconds() + " Date:"
 + newTime.getDate() + "/" + (newTime.getMonth() +1) +"/" + newTime.getFullYear();
 return realTime;


};