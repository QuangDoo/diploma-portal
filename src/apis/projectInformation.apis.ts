// import http from './http';

import http from '../utils/http';

export type Information = {
  GioiThieu: {
    Value: {
      Value: string;
      Title: string;
    };
  };
  CreateDateTime: string;
  CreateDateTime_Text: string;
  DeleteAble: boolean;
  Id: string;
  IsDeleted: boolean;
  Key: string;
  Value: {
    Title: string;
    Value: string;
  };
  LienHe: {
    CoQuanChuQuan: string;
    DiaChi: string;
    Email: string;
    SoDienThoai: string;
    AvatarLink: string;
  };
  Menu: {
    Code: string;
    Name: string;
    IsActive: boolean;
    ListChilds: Array<{
      Code: string;
      Name: string;
      IsActive: boolean;
      ListChilds: Information['Menu'][0]['ListChilds'];
    }>;
  }[];
};

const CONTROLLER = 'CongTraCuu';

export const projectInformationApis = {
  getInformation: () => http<Information>(`${CONTROLLER}/CTC_GetInfo`),
  getNumberOfAccess: () => http<number>(`${CONTROLLER}/CountSoLuongTruyCap`),
};
