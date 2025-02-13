import { Box, Text, Flex } from '@chakra-ui/react';
import { FaCreditCard } from 'react-icons/fa6';
import { Modal } from 'antd';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GoArrowSwitch } from 'react-icons/go';
import { IoQrCode } from 'react-icons/io5';
import axiosInstance from '../../utils/axiosConfig';
// import { RiDeleteBin6Fill } from 'react-icons/ri';
import FontCard from './fontcarad';
import QrTab from './qrtab';
// import Swal from 'sweetalert2';

const Mycard = () => {
  // const [addCard, setaddCard] = useState(false);
  const [showCard, setshowCard] = useState(false);
  const [flipCard, setflipCard] = useState(false);
  const [showQrcode, setshowQrcode] = useState(false);
  const [tokenQrCode, setTokenQrCode] = useState('');

  // const addCardModal = () => {
  //   setaddCard(true);
  // };

  const showCardModal = () => {
    setshowCard(true);
  };

  const toggleFlip = () => {
    setflipCard(!flipCard);
  };

  const showQrCode = async () => {
    try {
      const _res = await axiosInstance.get('/genTokenQrCode');
      if (_res.status === 200) {
        setTokenQrCode(_res.data?.data);
        setshowQrcode(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDelete = () => {
  //   Swal.fire({
  //     // title: 'คุณต้องการลบข้อมูลหรือไม่?',
  //     text: 'คุณต้องการลบข้อมูลหรือไม่?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#d33',
  //     cancelButtonColor: '#3085d6',
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'Cancel',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire('ลบแล้ว!', 'ข้อมูลของคุณถูกลบเรียบร้อยแล้ว.', 'success');
  //       // ทำคำสั่งลบข้อมูลที่นี่
  //     }
  //   });
  // };

  return (
    <>
      <Flex w={'100%'} justifyContent={'start'} alignItems={'center'}>
        <Box
          p={1}
          bg={'#FEF5E5'}
          color={'#F5BC00'}
          cursor={'pointer'}
          rounded={'5px'}
          border={'1px'}
        >
          <FaCreditCard size={20} />
        </Box>
        <Text ml={2}>รายการนามบัตรของคุณ</Text>
        {/* <Center
          p={1}
          bg={'#25605d'}
          color={'#FFFF'}
          rounded={'10px'}
          cursor={'pointer'}
          onClick={addCardModal}
        >
          <IoMdAddCircle size={24} />
        </Center> */}
      </Flex>

      {/* ในส่วนฟังชั่น บัตร */}
      <Box mt={3}>
        {flipCard ? (
          <Box w={'100%'}>
            <FontCard />
          </Box>
        ) : (
          <Box w={'100%'}>
            <img
              src="/back_card.png"
              alt="back_chase"
              style={{ borderRadius: '8px' }}
            />
          </Box>
        )}
      </Box>

      <Box bg={'#FFF'} w={'100%'} mt={3} rounded={'6px'}>
        <Flex
          w={'100%'}
          justifyContent={'space-around'}
          py={2}
          // boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px;'}
        >
          <Box cursor={'pointer'} onClick={showCardModal}>
            <Box
              p={2}
              background={'#dbf3f2'}
              color={'#086f69'}
              rounded={'10px'}
            >
              <FaSearch size={18} />
            </Box>
          </Box>
          <Box cursor={'pointer'} onClick={toggleFlip}>
            <Box
              p={2}
              background={'#dbf3f2'}
              color={'#086f69'}
              rounded={'10px'}
            >
              <GoArrowSwitch size={18} />
            </Box>
          </Box>
          <Box cursor={'pointer'} onClick={showQrCode}>
            <Box
              p={2}
              background={'#dbf3f2'}
              color={'#086f69'}
              rounded={'10px'}
            >
              <IoQrCode size={18} />
            </Box>
          </Box>
          {/* <Box cursor={'pointer'} onClick={handleDelete}>
            <Box
              p={2}
              background={'#dbf3f2'}
              color={'#086f69'}
              rounded={'10px'}
            >
              <RiDeleteBin6Fill size={18} />
            </Box>
          </Box> */}
        </Flex>
      </Box>
      {/* ในส่วนฟังชั่น บัตร */}

      {/* ในส่วน Modal สร้างบัตร */}
      {/* <Modal
        title="สร้างนามบัตร"
        open={addCard}
        onCancel={() => setaddCard(false)}
        footer={null}
      >
        <>
          <Box>
            <Box w={'100%'} mt={5}>
              <Box
                rounded={'10px'}
                boxShadow={' rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
              >
                <img src="/theme_chase.jpg" alt="chase" />
              </Box>
            </Box>
          </Box>
        </>
      </Modal> */}
      {/* ในส่วน Modal สร้างบัตร */}

      {/* ในส่วน Modal showCard */}
      <Modal
        title="View Card"
        style={{
          top: 20,
        }}
        open={showCard}
        onCancel={() => setshowCard(false)}
        footer={null}
      >
        <>
          <Box>
            <Box w={'100%'} mt={5}>
              <FontCard />
            </Box>
            <Box w={'100%'} mt={5}>
              <Box w={'100%'}>
                <img
                  src="/back_card.png"
                  alt="back_chase"
                  style={{ borderRadius: '8px' }}
                />
              </Box>
            </Box>
          </Box>
        </>
      </Modal>
      {/* ในส่วน Modal showCard */}

      {/* ในส่วน qr code */}
      <Modal
        title="QR-Code"
        style={{
          top: 20,
        }}
        open={showQrcode}
        onCancel={() => setshowQrcode(false)}
        footer={null}
      >
        <>
          <Box>
            <Box w={'100%'} mt={5}>
              <QrTab tokenQrCode={tokenQrCode} />
            </Box>
          </Box>
        </>
      </Modal>
      {/* ในส่วน qr code */}
    </>
  );
};

export default Mycard;
