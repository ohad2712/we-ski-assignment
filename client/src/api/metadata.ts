import Api from './index';

export const getMetadata = async () => await Api.get('/metadata');
