interface RepoBase {
  // 业务处理是否成功
  success?: boolean
  message?: string
}

interface DataListStructure<DataItem> extends RepoBase {
  list: DataItem[],
  total: number
}

export declare type DataListPromiseRet<DataItem> = Promise<DataListStructure<DataItem>>

export declare type RetriveDataList<DataItem> = () => DataListPromiseRet<DataItem>
