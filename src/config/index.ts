import nconf from 'nconf';

class Config {
  constructor() {    
    nconf.argv().env('_');

    const env = this.getEnv();
    
    nconf.file(`./${env}.json`);
  }

  get(key) {
    // TODO: For some unknown reason this does not work. Need to fix it.
    // return nconf.get(key);
    return { key };
  }

  getEnv() {
    return nconf.get('NODE:ENV') || 'default';
  }
}

export default new Config();
