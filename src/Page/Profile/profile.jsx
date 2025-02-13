import { Box, Center, Button } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';
import { FaEdit } from 'react-icons/fa';
import { Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaUnlock } from 'react-icons/fa';
import swal from 'sweetalert2';
import axios from 'axios';

const Profile = () => {
  const [form] = Form.useForm();
  const [profiledata, setProfiledata] = useState(false);
  const account = useSelector((state) => state.account);
  const [selectedUserId, setSelectedUserId] = useState(null);

  console.log(account.profile.Password, 'ppp');

  const UpdateprofileModal = () => {
    setSelectedUserId(account.profile._id); // เก็บค่า id
    setProfiledata(true);
  };

  const onFinish = async (values) => {
    try {
      let result = await axios.put(
        `${
          import.meta.env.VITE_REACT_APP_API_USER
        }/updateprofile/${selectedUserId}`,
        values
      );

      if (result?.data?.status) {
        swal
          .fire({
            title: 'Update Success',
            text: result.data.message,
            icon: 'success',
          })
          .then(() => window.location.reload());
      }
    } catch (error) {
      swal.fire({
        text: 'เกิดข้อผิดพลาดในการอัปเดต',
        icon: 'error',
      });
      console.error(error);
    }
  };
  return (
    <>
      <Box
        w={'100%'}
        bg={'#FFF'}
        bottom={0}
        minH="80vh"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        boxShadow={' rgba(0, 0, 0, 0.16) 0px 1px 4px;'}
      >
        <Box
          display={'flex'}
          justifyContent={'start'}
          alignItems={'center'}
          mb={3}
          w={'100%'}
        >
          <Box w={'20%'} mt={2}>
            <Box p={1}>
              <img src="/cr.png" alt="C" width={'60px'} />
            </Box>
          </Box>
          <Box w={'65%'} mt={4}>
            <Box fontWeight={'600'} fontSize={'12px'}>
              {account.profile.fname}
            </Box>
            <Box fontSize={'11px'} color={'gray.500'}>
              {account.profile.position}
            </Box>
            <Box display={'flex'}>
              <Box color={'#086f69'}>
                <MdEmail size={16} />
              </Box>
              <Box fontSize={'11px'} ml={1} color={'gray.500'}>
                {account.profile.email}
              </Box>
            </Box>
          </Box>
          <Box w={'15%'} mt={2}>
            <Center
              bg={'#FEF5E5'}
              color={'#F5BC00'}
              w={30}
              rounded={'5px'}
              h={'30px'}
              mr={2}
              border={'1px'}
              cursor={'pointer'}
              onClick={() => UpdateprofileModal(selectedUserId)}
            >
              <FaEdit size={16} />
            </Center>
          </Box>
        </Box>
        <hr />

        <Box mt={3}>
          <Box display={'flex'} justifyContent={'start'} alignItems={'center'}>
            <Box bg={'#dbf3f2'} color={'#086f69'} p={2} rounded={'5px'} ml={3}>
              <FaUser size={16} />
            </Box>

            <Box ml={3}>
              <Box fontSize={'small'} fontWeight={'600'}>
                Name-TH
              </Box>
              <Box fontSize={'small'} color={'gray.500'} fontWeight={'500'}>
                {account.profile.tname}
              </Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'start'}
            alignItems={'center'}
            mt={2}
          >
            <Box bg={'#dbf3f2'} color={'#086f69'} p={2} rounded={'5px'} ml={3}>
              <FaMobileAlt size={16} />
            </Box>

            <Box ml={3}>
              <Box fontSize={'small'} fontWeight={'600'}>
                Mobile
              </Box>
              <Box fontSize={'small'} color={'gray.500'} fontWeight={'300'}>
                {account.profile.phone}
              </Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'start'}
            alignItems={'center'}
            mt={2}
          >
            <Box bg={'#dbf3f2'} color={'#086f69'} p={2} rounded={'5px'} ml={3}>
              <HiOfficeBuilding size={16} />
            </Box>

            <Box ml={3}>
              <Box fontSize={'small'} fontWeight={'600'}>
                Office-Phone
              </Box>
              <Box fontSize={'small'} color={'gray.500'} fontWeight={'300'}>
                0-2855-8222 (Ex {account.profile.phone_off})
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ในส่วน Modal showCard */}
      <Modal
        title="อัพเดทข้อมูลส่วนตัว"
        style={{
          top: 20,
        }}
        open={profiledata}
        onCancel={() => setProfiledata(false)}
        footer={null}
      >
        <>
          <Box>
            <hr />
            <Box w={'100%'} mt={2}>
              <Form
                form={form}
                onFinish={(values) => onFinish(values, selectedUserId)}
                autoComplete="off"
              >
                <Box>
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                    mb={2}
                  >
                    <Box
                      background={'#dbf3f2'}
                      color={'#086f69'}
                      p={2}
                      rounded={'5px'}
                    >
                      <FaUnlock />
                    </Box>
                    <Box ml={2}>สร้างรหัสผ่านสำหรับคุณ</Box>
                  </Box>

                  <Form.Item
                    name={'password'}
                    rules={[
                      {
                        required: true,
                        message: 'กรอกข้อมูลให้ครบ',
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                </Box>

                <Form.Item>
                  <Button
                    w={'100%'}
                    bg={'#395D5D'}
                    color={'#FFFF'}
                    type="submit"
                  >
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </Box>
          </Box>
        </>
      </Modal>
      {/* ในส่วน Modal showCard */}
    </>
  );
};

export default Profile;
