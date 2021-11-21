import localforage from 'localforage';

export const localforageConf: any = {
  // TODO change the name
  name: 'name'
};

export const useInstance = (storeName: string) => localforage.createInstance({
  ...localforageConf,
  storeName
});

export default {
  localforageConf,
  useInstance
};
