const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/4298c740ca354fc0a1f45af6c2e4dafb"
);

const queryBlockchain = async () => {
  const block = await provider.getBlockNumber();
  console.log("Current Block Number:", block);

//Paste the account address you want to get balance of in the parameter of provider.getBalance()
  const balance = await provider.getBalance("0x01087f4e1dbc0c52690A9397677dD90983711c37"); 

//To convert balance from "Big Number format / Wei" to ether , we use ethers.utils.formatEther(balanceInWei)
  console.log("Current Account Balance:", ethers.utils.formatEther(balance));

//   To convert back to "Wei/ Big Number Format" , use ethers.utils.parseEther(balanceInEther)
};

queryBlockchain();
