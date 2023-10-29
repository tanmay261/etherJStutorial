const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/4298c740ca354fc0a1f45af6c2e4dafb"
);

const walletAddress = "0xf4e193378acff298e781fd9c0067265d3e290695";
const walletAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "senEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractInteraction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );

  const contactName = await walletContract.name();
  console.log("Contract Name is :", contactName);

  const num = await walletContract.getValue();
  console.log("Number value: ", String(num));

  const contractBalance = await walletContract.contractBalance();
  console.log("Contract Balance is:", contractBalance);
  console.log(
    "Current Contract Balance in ether:",
    ethers.utils.formatEther(contractBalance)
  );
  const userBalance = await walletContract.accountBalance(
    "0xeA6877502c4B387eCc6C2EE5F3e4afb9D3637A3e"
  );
  console.log(
    "Current Account Balance in ether: ",
    ethers.utils.formatEther(userBalance)
  );
  console.log("Account balance: ", userBalance);
};
contractInteraction();
