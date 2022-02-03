export interface lInvoiceData {
  name: string;
  number: number;
  amount: string;
  due: string;
}
export interface lAssets {
  name: string;
  info: lAssetInfo;
}

export interface lAssetInfo {
  src: string;
  alt: string;
}

export interface lHome {
  id: number;
  video: string;
  videoTitle: string;
  itemIdx: number;
}
