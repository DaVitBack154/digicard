import { Box, Text, Button, Center, Flex } from '@chakra-ui/react';
import { Form, Input } from 'antd';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import swal from 'sweetalert2';
import axiosConfig from '../../utils/axiosConfig';
import { setAccount } from '../../store/AccoutReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      console.log('🟢 Sending login request:', values);

      const resp = await axiosConfig.post('/login', values);
      console.log('🟢 Login response:', resp.data);

      const { user, token, status } = resp.data;

      if (!status || !user || !token) {
        throw new Error('Login failed, invalid response from server');
      }
      try {
        localStorage.setItem('token', token);
        localStorage.setItem('profile', JSON.stringify(user));

        dispatch(setAccount({ token: token, profile: user }));

        swal.fire({
          title: 'Success',
          text: 'Login Successful!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });

        // ✅ เปลี่ยนหน้าไป /homepage
        navigate('/homepage');
      } catch (decryptError) {
        throw new Error('Token decryption failed: ' + decryptError.message);
      }
    } catch (error) {
      console.error('🔴 Error logging in:', error);

      swal.fire({
        title: 'Error',
        text: error.message || 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

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
          color={'#FFF'}
        >
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            h={'160px'}
          >
            <Box textAlign={'center'}>
              <Text fontSize={'21px'} fontWeight={'bold'}>
                ยินดีต้อนรับ
              </Text>
            </Box>

            <Box textAlign={'center'} mt={2}>
              <Text fontSize={'16px'} color={'#d8d8d8'}>
                ลงชื่อเข้าใช้บัญชีของคุณ
              </Text>
            </Box>
            <Flex justifyContent={'centers'} alignItems={'center'} mt={3}>
              <Box>
                <img src="/cr.png" alt="C" width={'35px'} />
              </Box>
              <Box ml={2}>Digital Card</Box>
            </Flex>
          </Flex>
        </Box>

        <Center p={1} mt={2}>
          <img src="/logo.png" alt="C" width={'150px'} />
        </Center>

        <Box p={3} mt={2}>
          <Form form={form} onFinish={onFinish} autoComplete="off">
            <Form.Item
              name={'email'}
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
              name={'password'}
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

            {/* <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Box w={'100%'}>
              <Form.Item>
                <Button
                  type="submit"
                  w={'100%'}
                  bg={'#395D5D'}
                  color={'#FFFF'}
                  rounded={'20px'}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Box>
          </Form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
