import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ConfigProvider } from 'antd';
import vi from 'antd/locale/vi_VN';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('vi', {
  months: [
    'T1',
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'T8',
    'T9',
    'T10',
    'T11',
    'T12',
  ],
  weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
});

const PRIMARY_COLOR = '#0000C5';
const SHADOW = 'rgba(0, 0, 197, 0.5)';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={vi}
      theme={{
        token: {
          colorPrimary: PRIMARY_COLOR,
          borderRadius: 2,
          boxShadow: `0 0 0 2px ${SHADOW}`,
        },
        components: {
          Input: {
            borderRadius: 2,
            padding: 4,
            controlHeight: 40,
          },
          DatePicker: {
            controlHeight: 40,
            borderRadius: 2,
            padding: 2,
            cellActiveWithRangeBg: '#C6DEFF',
          },
          Table: {
            // headerBorderRadius: 12,
            // headerColor: '#fff',
            // headerBg: SHADOW,
            headerBorderRadius: 8,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
