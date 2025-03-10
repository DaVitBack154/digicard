import { Box, Button } from '@chakra-ui/react';
import { Table } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function TableData() {
  const [listUserdata, setlistUserdata] = useState([]);

  useEffect(() => {
    const exp = async () => {
      try {
        let expdata = await axios.get(
          import.meta.env.VITE_REACT_APP_API_USER + '/getUser_admin'
        );

        if (expdata.data.status) {
          let data = expdata.data.data;
          // console.log('gt:', data);

          setlistUserdata(data);
        } else {
          console.log('Error: Failed to fetch data');
        }
      } catch (error) {
        console.log(error);
      }
    };
    exp();
  }, []);

  const columns = [
    {
      title: '',
      dataIndex: '',
      width: 30,
      render: (_, record) => (
        <NavLink to={'/form_visitor/' + record.id}>
          <Button
            background={'#FFCA2C'}
            color={'#FFFF'}
            fontWeight={'bold'}
            p={0}
            size={'sm'}
          >
            <FaRegEdit size={18} />
          </Button>
        </NavLink>
      ),
    },

    {
      title: 'EN-Name',
      dataIndex: 'fname',
      key: 'fname',
      align: 'center',
    },
    {
      title: 'TH-Name',
      dataIndex: 'tname',
      key: 'tname',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center',
    },
    {
      title: 'Phone_OFFICE',
      dataIndex: 'phone_off',
      key: 'phone_off',
      align: 'center',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
    },
  ];

  return (
    <>
      <Box p={2}>
        <Box ml={5}>
          <Button bg={'#FFF3DC'} color={'#FDB528'} _hover={'none'}>
            <Box ml={2}>รายชื่อพนักงานใช้งาน</Box>
          </Button>
        </Box>
        <Box p={5}>
          <Table
            columns={columns}
            dataSource={listUserdata}
            size="small"
            rowKey={'_id'}
            pagination={{
              defaultPageSize: 20,
              showSizeChanger: true,
              pageSizeOptions: ['20', '40', '50', '100'],
            }}
          />
        </Box>
      </Box>
    </>
  );
}
