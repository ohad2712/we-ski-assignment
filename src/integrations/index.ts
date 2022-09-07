// import config from '../config';

// TODO: remove this as this is a hack for the config.ts issue
import weSki from './providers/weSki';

export default (providerName: String = 'weSki') => {
  // Original implementation
  // const providerInfo = config.get(`providers:${providerName}`);
  // if (!providerInfo) throw new Error('No provider was found');
  // return require(`./${providerName}`)(providerInfo);
  
  // TODO: the following is a hard coded version of the above. Need to fix and remove
  return weSki({
    i: 1,
    name: "WeSki",
    baseAPI: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default",
    roomSizeLimitationCompareGroupSize: 3
  })
    
}
