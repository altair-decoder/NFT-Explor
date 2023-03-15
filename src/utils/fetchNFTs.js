const apiKey = "9OYF0ocZ1teC4TxJlzeQTdbZPwAzH6-c";
const endpoint = `https://eth-goerli.g.alchemy.com/v2/${apiKey}`;

export const fetchNFTs = async (
  owner,
  contractAddress,
  setNFTs,
  retryAttempt
) => {
  if (retryAttempt === 5) {
    return;
  }
  if (owner) {
    let data;
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json());
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then((data) =>
          data.json()
        );
      }
    } catch (e) {
      fetchNFTs(endpoint, owner, contractAddress, setNFTs, retryAttempt + 1);
    }

    setNFTs(data.ownedNfts);
    console.log(data);
    return data;
  }
};
