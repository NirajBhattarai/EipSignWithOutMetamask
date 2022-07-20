import { ethers } from "ethers";
import { TypedDataUtils } from "ethers-eip712";
// The typed data to sign
// prettier-ignore
const typedData = {
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' }
    ],
    set: [
      { name: 'sender', type: 'address' },
      { name: 'x', type: 'uint' },
      { name: 'deadline', type: 'uint' }
    ]
  },
  primaryType: 'set',
  domain: {
    name: 'Bullieverse',
    version: '1',
    chainId: 4,
    verifyingContract: '0x22933C7b853f0db4Db9424f9536d9d4708bf823A'
  },
  message: {
    sender:'0xFdEa6595143d327b251E39F58E617EF8dFAD9C25',
    x:1,
    deadline:1000
  }
};

const domain = {
  name: "Bullieverse",
  version: "1",
  chainId: 4,
  verifyingContract: "0x22933C7b853f0db4Db9424f9536d9d4708bf823A"
};

const types = {
  set: [
    { name: "sender", type: "address" },
    { name: "x", type: "uint" },
    { name: "deadline", type: "uint" }
  ]
};

const value = {
  sender: "0xFdEa6595143d327b251E39F58E617EF8dFAD9C25",
  x: 1,
  deadline: 1000
};

const wallet = new ethers.Wallet(
  "private key"
);

async function test() {
  const sig = await wallet._signTypedData(domain, types, value);

  console.log(sig);
}

test();
// Generate a random private key
// const digest = TypedDataUtils.encodeDigest(typedData);
// const digestHex = ethers.utils.hexlify(digest);

// console.log(wallet);
// const signature = wallet.signMessage(digestHex);

// console.log(signature);
