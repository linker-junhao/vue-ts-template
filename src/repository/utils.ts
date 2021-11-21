// eslint-disable-next-line import/prefer-default-export
import { v5 as uuidv5 } from 'uuid';
import { localforageConf } from './conf';

interface ExtraPart {
  _order: number
}

type DataWithExtra<T> = T & ExtraPart


export const handleRepoStoreErr = (err: Error) => {
  // eslint-disable-next-line no-console
  console.error(err);
};

export const iterateGetStoreDataList = async <T>(localforage: any) => {
  try {
    return await localforage.iterate((() => {
      const ret: DataWithExtra<T>[] = [];
      return (value: any, _id: string, _order: number) => ret.concat([{ _order, ...value }]);
    })()) || [] as DataWithExtra<T>[];
  } catch (e) {
    return [] as DataWithExtra<T>[];
  }
};

export const genRepoStoreUUID = (namespace: string = '') => uuidv5(localforageConf.name, namespace);

export const storeSetItem = <T>(localforage: any, _id: string, item: T) => {
  try {
    return localforage.setItem(_id, { ...item, _id });
  } catch (e: any) {
    handleRepoStoreErr(e);
    return false;
  }
};

