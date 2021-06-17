/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'antd';
import axios from 'axios';
import User from '../../Containers/userContainer';

const EditingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 10px;
    }
`;

const EditingRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Edit = ({ children, setEditing, initialValues }) => {
  const [loading, setLoading] = useState(false);
  const user = User.useContainer();

  const onFinish = (values) => {
    setLoading(true);
    axios.post('http://localhost:9000/user/edit', values).then((data) => {
      setLoading(false);
      setEditing('');
      if (data.data.user) {
        user.setUser(data.data.user);
      }
    }).catch(() => {
      setLoading(false);
    });
  };

  const onFinishFailed = () => {
    console.log('finish failed');
  };

  return (
    <Form
      name="edit"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <EditingContainer>
        {children}
        <EditingRow>
          <Form.Item style={{ width: '100%', paddingRight: 5 }}>
            <Button
              style={{ width: '100%' }}
              onClick={() => {
                setEditing('');
              }}
            >
              Cancel
            </Button>
          </Form.Item>
          <Form.Item style={{ width: '100%', paddingLeft: 5 }}>
            <Button type="primary" style={{ width: '100%' }} htmlType="submit" loading={loading}>Save</Button>
          </Form.Item>
        </EditingRow>
      </EditingContainer>
    </Form>
  );
};

export default Edit;
