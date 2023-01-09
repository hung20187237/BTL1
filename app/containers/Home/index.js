import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyled, Flex, InputStyled, Text } from '../Login/stylesLogin';
import { ContentStyled, BoxIcon } from './stylesHome';
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
import { REDUX_KEY } from '../../utils/constants';
import ModalAddUsers from '../ModalAddUsers';
import ModalFixUsers from '../ModalFixUsers';

export default function Home() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const key = REDUX_KEY.home;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const listUser = useSelector(selectors.selectListUser());
  // const infoUser = useEffect(selectors.selectGetInfo());
  useEffect(() => {
    const body = {
      PageSize: 50,
      CurrentPage: 1,
      SortCol: 'UserName',
      IsDesc: true,
    };
    dispatch(
      actions.getList(body, res => {
        setData(res.Users);
      }),
    );
  }, []);

  useEffect(() => {
    console.log(listUser);
  }, [listUser]);
  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'index',
      width: 50,
      render: (text, record, index) => index,
    },
    {
      title: 'Tên đăng nhập',
      width: 100,
      dataIndex: 'UserName',
      key: 'username',
      fixed: 'left',
    },
    {
      title: 'Tên đầy đủ',
      width: 150,
      dataIndex: 'FullName',
      key: 'fullname',
      fixed: 'left',
    },

    {
      title: 'Số điện thoại',
      dataIndex: 'Phone',
      key: '2',
      width: 100,
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: '3',
      width: 150,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'Birthday',
      key: '4',
      width: 100,
    },
    {
      title: 'Nhóm quyền',
      dataIndex: 'RoleGroupName',
      key: '5',
      width: 150,
    },
    {
      title: 'Phân cấp',
      dataIndex: 'HierarchyName',
      key: '6',
      width: 100,
    },
    {
      title: 'Trạng thái',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <Flex>
          <BoxIcon onClick={() => showModal1(record)}>
            <Editicon />
          </BoxIcon>
          <BoxIcon>
            <Replayicon />
          </BoxIcon>
        </Flex>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal1 = datainfo => {
    console.log(datainfo.UserGUID);
    const body = {
      UserGUID: datainfo.UserGUID,
    };
    dispatch(actions.getInfo(body));
    setIsModalOpen1(true);
  };
  // console.log(infoUser);
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
      {isModalOpen && <ModalAddUsers ok={handleOk} cancel={handleCancel} />}
      {isModalOpen1 && <ModalFixUsers ok={handleOk1} cancel={handleCancel1} />}
    </>
  );
}
