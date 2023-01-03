import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';

import moment from 'moment';
import {
  ButtonStyled,
  Checkboxstyled,
  Flex,
  InputPassword,
  InputStyled,
  Text,
} from '../Login/stylesLogin';
import {
  ContentStyled,
  Box,
  ModalStyled,
  SelectStyled,
  RadioStyled,
  BoxIcon,
} from './stylesProduct';

import { Searchicon } from '../../images/icon/Searchicon';
import { Addicon } from '../../images/icon/Addicon';
import Table from '../../res/components/Table';
import { Replayicon } from '../../images/icon/Replayicon';
import { Editicon } from '../../images/icon/Editicon';
import { Deleteicon } from '../../images/icon/Deleteicon';
import { Erroricon } from '../../images/icon/Erroricon';

const dataexam = [];
for (let i = 0; i < 30; i++) {
  dataexam.push({
    stt: i,
    key: i,
    makh: `${i}${Math.floor(Math.random() * 10000) + 1000}`,
    fullname: `Hieu Nguyễn ${i}`,
    sdt: `098${i}${Math.floor(Math.random() * 100000) + 10000}`,
    madk: `***********`,
    loai: 'Pro',
    ngayban: '29-02-2000',
    thoihan: 'Hết hạn',
    taikhoan: 'AnhDuong',
  });
}

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(dataexam);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [valuedata, setValuedata] = useState(data[1]);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: '1',
      width: 50,
    },
    {
      title: 'Mã khách hàng',
      width: 100,
      dataIndex: 'makh',
      key: 'makh',
      fixed: 'left',
    },
    {
      title: 'Tên khách hàng',
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
      title: 'Mã đăng ký',
      dataIndex: 'madk',
      key: '3',
      width: 150,
    },
    {
      title: 'Loại',
      dataIndex: 'loai',
      key: '4',
      width: 80,
    },
    {
      title: 'Ngày bán',
      dataIndex: 'ngayban',
      key: '5',
      width: 150,
    },
    {
      title: 'Thời hạn',
      dataIndex: 'thoihan',
      key: '6',
      width: 100,
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taikhoan',
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
          <BoxIcon onClick={showModal2}>
            <Deleteicon />
          </BoxIcon>
          <BoxIcon>
            <Replayicon />
          </BoxIcon>
        </Flex>
      ),
    },
  ];

  console.log(valuedata);

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
  const showModal2 = () => {
    setIsModalOpen2(true);
    // setValuedata(data[i]);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
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
          title="Thêm mới thẻ"
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
                  placeholder="Mã khách hàng *"
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
                <InputPassword
                  required=""
                  placeholder="Mã đăng ký"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  placeholder="Tên khách hàng"
                  type="text"
                />
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
                <InputStyled required="" placeholder="Email" type="text" />
              </Box>
              <Box>
                <InputStyled required="" placeholder="Địa chỉ" type="text" />
              </Box>
            </Box>
          </Box>
        </ModalStyled>
      )}
      {isModalOpen1 && (
        <ModalStyled
          title="Chỉnh sửa thông tin thẻ"
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
                  defaultValue={valuedata.makh}
                  placeholder="Mã khách hàng *"
                  type="text"
                  disabled
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue={valuedata.sdt}
                  placeholder="Số điện thoại *"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputPassword
                  required=""
                  defaultValue={valuedata.madk}
                  placeholder="Mã đăng ký *"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue={valuedata.fullname}
                  placeholder="Tên khách hàng"
                  type="text"
                />
              </Box>
              <Box className="modalboxinput">
                <DatePicker
                  defaultValue={moment(valuedata.ngayban, dateFormat)}
                  style={{
                    width: '100%',
                    borderRadius: '6px',
                    padding: '7.9px 11px',
                  }}
                />
              </Box>

              <Box className="modalboxinput">
                <InputStyled
                  required=""
                  defaultValue="Example.@gmail.com"
                  placeholder="Email"
                  type="text"
                />
              </Box>
              <Box>
                <InputStyled
                  required=""
                  defaultValue="Ha Noi"
                  placeholder="Địa chỉ"
                  type="text"
                />
              </Box>
            </Box>
          </Box>
        </ModalStyled>
      )}
      {isModalOpen2 && (
        <ModalStyled
          title="Xóa thẻ"
          visible
          onOk={handleOk2}
          onCancel={handleCancel2}
          footer={[
            <ButtonStyled
              key="back"
              onClick={handleCancel2}
              className="buttonesc"
            >
              Đóng(Esc)
            </ButtonStyled>,
            <ButtonStyled
              key="submit"
              onClick={handleOk2}
              className="buttonadd"
            >
              Ghi lại(Ctrl+5)
            </ButtonStyled>,
          ]}
        >
          <Box className="modalbox">
            <Box className="modalforminput">
              <Flex justify="center">
                <Erroricon />
                <Text>
                  Bạn có chắc chắn muốn xóa Thẻ "{valuedata.makh}" không ?
                </Text>
              </Flex>
            </Box>
          </Box>
        </ModalStyled>
      )}
    </>
  );
}
