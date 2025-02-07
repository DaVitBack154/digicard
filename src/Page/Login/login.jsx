import { Box, Text, Button } from '@chakra-ui/react';
import { Checkbox, Form, Input } from 'antd';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FaUnlockAlt } from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <Box>
        <Box
          w="100%"
          h="250px"
          bgImage="/bglogin.png"
          bgSize="cover"
          bgPosition="center bottom"
          bgRepeat="no-repeat"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="10px"
        >
          <Text>ยินดีต้อนรับ</Text>
          <Text>ลงชื่อเข้าใช้บัญชีของคุณ</Text>
        </Box>
        <br />
        <Box p={3}>
          <Form.Item
            name={'EUserName'}
            rules={[
              {
                required: true,
                message: 'Please input your username !',
              },
            ]}
          >
            <Input
              style={{ padding: '10px' }}
              prefix={
                <BsFillPersonCheckFill
                  style={{
                    fontSize: '22px',
                    marginRight: '10px',
                    color: '#015352',
                  }}
                />
              }
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name={'UserPassword'}
            rules={[
              {
                required: true,
                message: 'Please input your password !',
              },
            ]}
          >
            <Input.Password
              style={{ padding: '10px' }}
              prefix={
                <FaUnlockAlt
                  style={{
                    fontSize: '22px',
                    marginRight: '10px',
                    color: '#015352',
                  }}
                />
              }
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Box w={'100%'}>
            <Button w={'100%'} rounded={'10px'}>
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
