import { DownOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, type MenuProps } from 'antd';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuBarIcon } from '../../assets/icons';
import { useQueryClient } from '@tanstack/react-query';

const mappedLinks: Record<string, string> = {
  'Giới thiệu': '/',
  'Tin tức': '/tin-tuc',
  'Hướng dẫn sử dụng': 'huong-dan-su-dung',
};
function MenuBar() {
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<ApiResponse<Information>>([
    'project-information',
  ]);

  const menu = data?.Item.Menu;

  const toggleDrawer = () => setVisible((prev) => !prev);

  const items: MenuProps['items'] = [
    {
      key: 'tra-cuu-ho-so',
      label: (
        <NavLink
          to={'/tra-cuu-ho-so'}
          className={({ isActive }) =>
            isActive
              ? 'text-active-link font-bold'
              : 'text-slate-600 font-semibold'
          }
        >
          Tra cứu hồ sơ
        </NavLink>
      ),
    },
    {
      key: 'tra-cuu-van-bang',
      label: (
        <NavLink
          to={'/tra-cuu-van-bang'}
          className={({ isActive }) =>
            isActive
              ? 'text-active-link font-bold'
              : 'text-slate-600 font-semibold'
          }
        >
          Tra cứu văn bằng
        </NavLink>
      ),
    },
  ];

  const itemsService: MenuProps['items'] = [
    {
      key: 'dang-ky-chinh-sua-van-bang',
      label: (
        <NavLink
          to={'/dang-ky-chinh-sua-van-bang'}
          className={({ isActive }) =>
            isActive
              ? 'text-active-link font-bold'
              : 'text-slate-600 font-semibold'
          }
        >
          Đăng ký chỉnh sửa văn bằng
        </NavLink>
      ),
    },
    {
      key: 'dang-ky-cap-ban-sao',
      label: (
        <NavLink
          to={'/dang-ky-cap-ban-sao'}
          className={({ isActive }) =>
            isActive
              ? 'text-active-link font-bold'
              : 'text-slate-600 font-semibold'
          }
        >
          Đăng ký cấp bản sao
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <div className="hidden lg:flex items-center space-x-6">
        {menu
          ?.filter((item) => item.IsActive)
          ?.map((item) => {
            if (!item.ListChilds.length && item.Code !== '02') {
              return (
                <NavLink
                  key={item.Code}
                  to={mappedLinks[item.Name]}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-active-link font-bold'
                      : 'text-white font-semibold'
                  }
                >
                  {item.Name}
                </NavLink>
              );
            }

            if (!item.ListChilds.length && item.Code === '02') {
              return (
                <Dropdown menu={{ items }} trigger={['click', 'hover']}>
                  <p
                    className={`hover:cursor-pointer ${location.pathname.includes('tra-cuu') ? 'text-active-link font-bold' : 'text-white font-semibold'}`}
                  >
                    Tra cứu
                    <DownOutlined
                      color="white"
                      size={12}
                      className="w-3 h-3 ml-1"
                    />
                  </p>
                </Dropdown>
              );
            }

            if (item.ListChilds.length) {
              return (
                <Dropdown
                  menu={{ items: itemsService }}
                  trigger={['click', 'hover']}
                >
                  <p
                    className={`hover:cursor-pointer ${location.pathname.includes('tra-cuu') ? 'text-active-link font-bold' : 'text-white font-semibold'}`}
                  >
                    {item.Name}
                    <DownOutlined
                      color="white"
                      size={12}
                      className="w-3 h-3 ml-1"
                    />
                  </p>
                </Dropdown>
              );
            }
          })}

        {/* <NavLink
          to={'/tin-tuc'}
          className={({ isActive }) =>
            isActive ? 'text-active-link font-bold' : 'text-white font-semibold'
          }
        >
          Tin tức
        </NavLink>

        <Dropdown menu={{ items: itemsService }} trigger={['click', 'hover']}>
          <p
            className={`hover:cursor-pointer ${location.pathname.includes('dang-ky') ? 'text-active-link font-bold' : 'text-white font-semibold'}`}
          >
            Dịch vụ
            <DownOutlined color="white" size={12} className="w-3 h-3 ml-1" />
          </p>
        </Dropdown> */}
      </div>

      <Button
        className="lg:hidden block bg-transparent"
        type="default"
        shape="circle"
        icon={<MenuBarIcon />}
        onClick={toggleDrawer}
      />

      {/* mobile */}
      <Drawer
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        open={visible}
      >
        <div className="lg:flex items-center flex-col gap-y-3">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'text-active-link font-bold'
                : 'text-gradient font-semibold'
            }
          >
            Giới thiệu
          </NavLink>

          <Dropdown menu={{ items }} trigger={['click', 'hover']}>
            <p
              className={`hover:cursor-pointer ${location.pathname.includes('tra-cuu') ? 'text-active-link font-bold' : 'text-gradient font-semibold'}`}
            >
              Tra cứu
              <DownOutlined color="white" size={12} className="w-3 h-3 ml-1" />
            </p>
          </Dropdown>

          <NavLink
            to={'/tin-tuc'}
            className={({ isActive }) =>
              isActive
                ? 'text-active-link font-bold'
                : 'text-gradient font-semibold'
            }
          >
            Tin tức
          </NavLink>

          <Dropdown menu={{ items: itemsService }} trigger={['click', 'hover']}>
            <p
              className={`hover:cursor-pointer ${location.pathname.includes('dang-ky') ? 'text-active-link font-bold' : 'text-gradient font-semibold'}`}
            >
              Dịch vụ
              <DownOutlined color="white" size={12} className="w-3 h-3 ml-1" />
            </p>
          </Dropdown>
        </div>
      </Drawer>
    </>
  );
}

export default MenuBar;
