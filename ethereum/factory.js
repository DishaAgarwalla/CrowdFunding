import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x64B1e705c2ED7791f0EB34C8766c20297Bc2a597'
);

export default instance;