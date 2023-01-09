import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { DatePicker, Form, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyled, Flex, InputStyled, Text } from '../Login/stylesLogin';
import {
  Box,
  ModalStyled,
  RadioStyled,
  SelectStyled,
} from '../Home/stylesHome';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import * as actions from './actionsModalAdd';
import * as selectors from './selectorsModalAdd';
import reducer from './reducerModalAdd';
import saga from './sagaModalAdd';
import { REDUX_KEY } from '../../utils/constants';

const ModalAddUsers = ok => {
  const [valueRadio, setValueRadio] = useState(1);
  const listValue = [];
  const [form] = Form.useForm();
  const key = REDUX_KEY.add;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const listUser = useSelector(selectors.selectAddUser());
  const listRole = useSelector(selectors.selectGetRole());
  console.log(listUser);

  useEffect(() => {
    dispatch(actions.getRole());
  }, []);

  listRole.map(role => {
    const values = {
      value: role.RoleGroupID,
      label: role.RoleGroupName,
    };
    return listValue.push(values);
  });

  const handleOk = ok.ok;
  const handleCancel = ok.cancel;
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValueRadio(e.target.value);
  };

  const onFinish = values => {
    const body = {
      UserName: values.UserName,
      FullName: values.FullName,
      Phone: values.Phone,
      Email: values.Email,
      Birthday: moment(values.Birthday).format(),
      Address: values.Address,
      RoleID: values.RoleID,
    };

    dispatch(actions.postUser(body));
    console.log('Success:', body);
    handleOk();
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <ModalStyled
      title="Thêm mới tài khoản"
      visible
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Box className="modalbox">
        <Box className="modalforminput">
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="UserName"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
                { type: 'string', min: 8 },
              ]}
            >
              <InputStyled
                required=""
                placeholder="Tên đăng nhâp *"
                type="text"
              />
            </Form.Item>
            <Form.Item
              name="FullName"
              rules={[
                {
                  required: true,
                  message: 'Please input your fullname!',
                },
                { type: 'string', min: 8 },
              ]}
            >
              <InputStyled required="" placeholder="Tên đầy đủ *" type="text" />
            </Form.Item>
            <Form.Item
              name="Phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone!',
                },
                { type: 'string', min: 10 },
              ]}
            >
              <InputStyled
                required=""
                placeholder="Số điện thoại *"
                type="text"
              />
            </Form.Item>
            <Form.Item
              name="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
                { type: 'email', warningOnly: true },
              ]}
            >
              <InputStyled required="" placeholder="Email" type="text" />
            </Form.Item>
            <Form.Item
              name="Address"
              rules={[
                {
                  message: 'Please input your Address!',
                },
                { type: 'string' },
              ]}
            >
              <InputStyled required="" placeholder="Địa chỉ" type="text" />
            </Form.Item>
            <Form.Item
              name="Birthday"
              rules={[
                {
                  required: true,
                  message: 'Please input your Birthday!',
                },
                { type: 'date' },
              ]}
            >
              <DatePicker
                style={{
                  width: '100%',
                  borderRadius: '6px',
                  padding: '7.9px 11px',
                }}
              />
            </Form.Item>
            <Form.Item
              name="RoleID"
              rules={[
                {
                  required: true,
                  message: 'Please input your fullname!',
                },
                { type: 'number' },
              ]}
            >
              <SelectStyled
                showSearch
                style={{
                  width: '100%',
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                options={listValue}
              />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between">
                <Text>Trạng Thái:</Text>
                <Flex wid="70%" justify="space-between" pd="0 30px 0 0">
                  <RadioStyled.Group onChange={onChange} value={valueRadio}>
                    <RadioStyled value={1}>Đang hoạt động</RadioStyled>
                    <RadioStyled value={2}>Không hoạt động</RadioStyled>
                  </RadioStyled.Group>
                </Flex>
              </Flex>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Space size={20}>
                <ButtonStyled
                  wid="200px"
                  key="back"
                  onClick={handleCancel}
                  className="buttonesc"
                >
                  Đóng(Esc)
                </ButtonStyled>
                <ButtonStyled
                  wid="200px"
                  key="submit"
                  htmlType="submit"
                  className="buttonadd"
                >
                  Ghi lại(Ctrl+5)
                </ButtonStyled>
              </Space>
            </Form.Item>
          </Form>
        </Box>
      </Box>
    </ModalStyled>
  );
};

export default ModalAddUsers;
