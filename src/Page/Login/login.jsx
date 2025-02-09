import { Box, Text, Button, Center } from '@chakra-ui/react';
import { Checkbox, Form, Input } from 'antd';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <Box>
        <Box
          w="100%"
          h="160px"
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

        <Center p={1}>
          <img src="/logo.png" alt="C" width={'150px'} />
        </Center>

        <Box p={3} mt={2}>
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
              style={{
                padding: '10px',
                borderRadius: '20px',
                background: '#F0F0F0',
              }}
              prefix={
                <MdEmail
                  style={{
                    fontSize: '18px',
                    marginRight: '8px',
                    color: '#ACACAC',
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
              style={{
                padding: '10px',
                borderRadius: '20px',
                background: '#F0F0F0',
              }}
              prefix={
                <FaLock
                  style={{
                    fontSize: '18px',
                    marginRight: '8px',
                    color: '#ACACAC',
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
            <Button w={'100%'} bg={'#395D5D'} color={'#FFFF'} rounded={'20px'}>
              LOGIN
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
