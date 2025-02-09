import { Box, Center, Button } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';
import { FaEdit } from 'react-icons/fa';
import { Modal, Form, Input } from 'antd';
import { useState } from 'react';

const Profile = () => {
  const [profiledata, setProfiledata] = useState(false);
  const UpdateprofileModal = () => {
    setProfiledata(true);
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
        <br />
        <Box
          display={'flex'}
          justifyContent={'start'}
          alignItems={'center'}
          mb={3}
          w={'100%'}
        >
          <Box w={'20%'}>
            <Box p={1}>
              <img src="/cr.png" alt="C" width={'50px'} />
            </Box>
          </Box>
          <Box w={'65%'}>
            <Box fontWeight={'bold'} fontSize={'12px'}>
              Waruen Wanwanich
            </Box>
            <Box fontSize={'11px'}>Programmer</Box>
            <Box display={'flex'}>
              <Box color={'#086f69'}>
                <MdEmail size={16} />
              </Box>
              <Box fontSize={'11px'} ml={1}>
                waruen.css@gmail.com
              </Box>
            </Box>
          </Box>
          <Box w={'15%'}>
            <Center
              bg={'#FEF5E5'}
              color={'#F5BC00'}
              w={30}
              rounded={'5px'}
              h={'30px'}
              mr={2}
              border={'1px'}
              cursor={'pointer'}
              onClick={UpdateprofileModal}
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
              <Box fontSize={'small'} fontWeight={'bold'}>
                Name-TH
              </Box>
              <Box fontSize={'small'}>นายวรุณ วรรณวานิช</Box>
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
              <Box fontSize={'small'} fontWeight={'bold'}>
                Mobile
              </Box>
              <Box fontSize={'small'}>098-099-0999</Box>
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
              <Box fontSize={'small'} fontWeight={'bold'}>
                Office-Phone
              </Box>
              <Box fontSize={'small'}>02-099-0990 (Ext-1303)</Box>
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
              <Box>
                <Box>เบอร์มือถือ</Box>
                <Form.Item
                  name={'name_contract'}
                  rules={[
                    {
                      required: true,
                      message: 'กรอกข้อมูลให้ครบ',
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </Box>
              <Box>
                <Box>เบอร์ที่ OFFICE</Box>
                <Form.Item
                  name={'name_contract'}
                  rules={[
                    {
                      required: true,
                      message: 'กรอกข้อมูลให้ครบ',
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </Box>
              <Box>
                <Box>รหัสผ่าน</Box>
                <Form.Item
                  name={'name_contract'}
                  rules={[
                    {
                      required: true,
                      message: 'กรอกข้อมูลให้ครบ',
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </Box>
              <Box>
                <Button w={'100%'}>Save</Button>
              </Box>
            </Box>
          </Box>
        </>
      </Modal>
      {/* ในส่วน Modal showCard */}
    </>
  );
};

export default Profile;
