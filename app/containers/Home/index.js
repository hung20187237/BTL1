import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyled, Flex, InputStyled, Text } from '../Login/stylesLogin';
import {
  ContentStyled,
  Box,
  ModalStyled,
  SelectStyled,
  RadioStyled,
  BoxIcon,
} from './stylesHome';
import { Searchicon } from '../../images/icon/Searchicon';
import { Addicon } from '../../images/icon/Addicon';
import Table from '../../res/components/Table';
import { Replayicon } from '../../images/icon/Replayicon';
import { Editicon } from '../../images/icon/Editicon';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import * as actions from './actionsHome';
import * as selectors from './selectorsHome';
import reducer from './reducerHome';
import saga from './sagaHome';
import { REDUX_KEY } from './constantsHome';

// const dataexam = [];
// for (let i = 0; i < 334; i++) {
//   dataexam.push({
//     stt: i,
//     key: i,
//     username: `098${i}${Math.floor(Math.random() * 100000) + 10000}`,
//     fullname: `Edrward ${i}`,
//     sdt: `098${i}${Math.floor(Math.random() * 100000) + 10000}`,
//     email: `Example${i}@gmail.com`,
//     diachi: 'Ha Noi',
//     ngaysinh: '29-02-2000',
//     quyen: 'Nhóm kỹ thuật viên',
//     phancap: 'ffasdd',
//   });
// }

export default function Home() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [value, setValue] = useState(1);
  const [valueData, setValueData] = useState(data[1]);
  const key = REDUX_KEY;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading());
  const listUser = useSelector(selectors.selectListUser());

  useEffect(() => {
    dispatch(actions.getList());
  }, []);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: '1',
      width: 50,
    },
    {
      title: 'Tên đăng nhập',
      width: 100,
      dataIndex: 'username',
      key: 'username',
      fixed: 'left',
    },
    {
      title: 'Tên đầy đủ',
      width: 150,
      dataIndex: 'fullname',
      key: 'fullname',
      fixed: 'left',
    },

    {
      title: 'Số điện thoại',
      dataIndex: 'sdt',
      key: '2',
      width: 100,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '3',
      width: 150,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'ngaysinh',
      key: '4',
      width: 100,
    },
    {
      title: 'Nhóm quyền',
      dataIndex: 'quyen',
      key: '5',
      width: 150,
    },
    {
      title: 'Phân cấp',
      dataIndex: 'phancap',
      key: '6',
      width: 100,
    },
    {
      title: 'Trạng thái',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (
        <Flex>
          <BoxIcon onClick={showModal1}>
            <Editicon />
          </BoxIcon>
          <BoxIcon>
            <Replayicon />
          </BoxIcon>
        </Flex>
      ),
    },
  ];

  console.log(valueData);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const dateFormat = 'DD-MM-YYYY';
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
    // setValuedata(data[i]);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <>
      <ContentStyled>
        <Flex wid="50%" mgb="24px">
          <InputStyled
            placeholder="Tìm kiếm theo Tên đăng nhập, Tên đầy đủ, Số điện thoại"
            suffix={<Searchicon />}
          />
        </Flex>
        <Flex wid="100%" justify="space-between" mgb="24px">
          <Text fw="600">Quản lý tài khoản: {data.length}</Text>
          <ButtonStyled className="buttonadd" wid="160px" onClick={showModal}>
            <Addicon />
            <Text>Thêm mới</Text>
          </ButtonStyled>
        </Flex>
        <Flex position="relative">
          <Table
            columns={columns}
            data={data}
            pagination={{ pageSize: 50 }}
            scroll={{ y: `calc(100vh - 72px - 42px - 36px - 136px - 77px)` }}
          />
        </Flex>
      </ContentStyled>
      {isModalOpen && (
        <ModalStyled
          title="Thêm mới tài khoản"
          visible
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <ButtonStyled
              key="back"
              onClick={handleCancel}
              className="buttonesc"
            >
              Đóng(Esc)
            </ButtonStyled>,
            <ButtonStyled key="submit" onClick={handleOk} className="buttonadd">
              Ghi lại(Ctrl+5)
            </ButtonStyled>,
          ]}
        >
          <Box className="modalbox">
            <Box className="modalforminput">
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  placeholder="Tên đăng nhâp *"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  placeholder="Tên đầy đủ *"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  placeholder="Số điện thoại *"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled required="" placeholder="Email" type="text" />
              </Box>
              <Box className="modalboxinput">
                <InputStyled required="" placeholder="Địa chỉ" type="text" />
              </Box>
              <Box className="modalboxinput">
                <DatePicker
                  defaultValue={moment('2015-06-06', dateFormat)}
                  style={{
                    width: '100%',
                    borderRadius: '6px',
                    padding: '7.9px 11px',
                  }}
                />
              </Box>
              <Box className="modalboxinput">
                <SelectStyled
                  showSearch
                  style={{
                    width: '100%',
                  }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  options={[
                    {
                      value: '1',
                      label: 'Not Identified',
                    },
                    {
                      value: '2',
                      label: 'Closed',
                    },
                    {
                      value: '3',
                      label: 'Communicated',
                    },
                    {
                      value: '4',
                      label: 'Identified',
                    },
                    {
                      value: '5',
                      label: 'Resolved',
                    },
                    {
                      value: '6',
                      label: 'Cancelled',
                    },
                  ]}
                />
              </Box>
              <Flex justify="space-between">
                <Text>Trạng Thái:</Text>
                <Flex wid="70%" justify="space-between" pd="0 30px 0 0">
                  <RadioStyled.Group onChange={onChange} value={value}>
                    <RadioStyled value={1}>Đang hoạt động</RadioStyled>
                    <RadioStyled value={2}>Không hoạt động</RadioStyled>
                  </RadioStyled.Group>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </ModalStyled>
      )}
      {isModalOpen1 && (
        <ModalStyled
          title="Chỉnh sửa thông tin tài khoản"
          visible
          onOk={handleOk1}
          onCancel={handleCancel1}
          footer={[
            <ButtonStyled
              key="back"
              onClick={handleCancel1}
              className="buttonesc"
            >
              Đóng(Esc)
            </ButtonStyled>,
            <ButtonStyled
              key="submit"
              onClick={handleOk1}
              className="buttonadd"
            >
              Ghi lại(Ctrl+5)
            </ButtonStyled>,
          ]}
        >
          <Box className="modalbox">
            <Box className="modalforminput">
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue={valueData.username}
                  placeholder="Tên đăng nhâp *"
                  type="text"
                  disabled
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue={valueData.fullname}
                  placeholder="Tên đầy đủ *"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue={valueData.sdt}
                  placeholder="Số điện thoại *"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue={valueData.email}
                  placeholder="Email"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue="Ha Noi"
                  placeholder="Địa chỉ"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <DatePicker
                  defaultValue={moment(valueData.ngaysinh, dateFormat)}
                  style={{
                    width: '100%',
                    borderRadius: '6px',
                    padding: '7.9px 11px',
                  }}
                />
              </Box>
              <Box className="modalboxinput">
                <SelectStyled
                  showSearch
                  defaultValue={valueData.quyen}
                  style={{
                    width: '100%',
                  }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  options={[
                    {
                      value: '1',
                      label: 'Not Identified',
                    },
                    {
                      value: '2',
                      label: 'Closed',
                    },
                    {
                      value: '3',
                      label: 'Communicated',
                    },
                    {
                      value: '4',
                      label: 'Identified',
                    },
                    {
                      value: '5',
                      label: 'Resolved',
                    },
                    {
                      value: '6',
                      label: 'Cancelled',
                    },
                  ]}
                />
              </Box>
              <Flex justify="space-between">
                <Text>Trạng Thái:</Text>
                <Flex wid="70%" justify="space-between" pd="0 30px 0 0">
                  <RadioStyled.Group onChange={onChange} value={value}>
                    <RadioStyled value={1}>Đang hoạt động</RadioStyled>
                    <RadioStyled value={2}>Không hoạt động</RadioStyled>
                  </RadioStyled.Group>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </ModalStyled>
      )}
    </>
  );
}
