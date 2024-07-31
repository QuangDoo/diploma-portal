import http from '../utils/http';

type NewsData = { ListTinTuc: News[]; DateTimeFetch: string };

const CONTROLLER = 'CongTraCuu';

export const newsApis = {
  getNews: () =>
    http<NewsData>(`${CONTROLLER}/CTC_GetListTinTuc`, {
      cache: 'no-cache',
    }),
  getNew: (id: string) =>
    http<News>(`${CONTROLLER}/CTC_GetTinTucById?id=${id}`),
};
