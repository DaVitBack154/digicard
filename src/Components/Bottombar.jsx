import { Box } from '@chakra-ui/react';
import { FaCreditCard } from 'react-icons/fa6';
import { FaUserEdit } from 'react-icons/fa';
import { ImDownload } from 'react-icons/im';

// eslint-disable-next-line react/prop-types
const Bottombar = ({ onPageChange, currentPage }) => {
  // รับ currentPage prop
  return (
    <Box
      w={'100%'}
      bg={'#25605D'}
      color={'#FFF'}
      h="80px"
      bgImage="/bglogin.png"
      bgSize="cover"
      bgPosition="center bottom"
      bgRepeat="no-repeat"
      borderTopLeftRadius="10px"
      borderTopRightRadius="10px"
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box display={'flex'} justifyContent={'space-around'} w={'100%'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          alignItems={'center'}
          onClick={() => onPageChange('mycard')}
          style={{
            // เพิ่ม style เพื่อ highlight tab ปัจจุบัน
            color: currentPage === 'mycard' ? '#FFFF' : '#c4c4c4',
            borderBottom: currentPage === 'mycard' ? '2px solid red' : 'none',
            paddingBottom: '2px',
          }}
        >
          <Box>
            <FaCreditCard size={22} />
          </Box>
          <Box fontSize={'smaller'}>MyCard</Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          alignItems={'center'}
          onClick={() => onPageChange('bookcard')}
          style={{
            color: currentPage === 'bookcard' ? '#FFFF' : '#c4c4c4',
            borderBottom: currentPage === 'bookcard' ? '2px solid red' : 'none',
            paddingBottom: '2px',
          }}
        >
          <Box>
            <ImDownload size={22} />
          </Box>
          <Box fontSize={'smaller'}>BookCard</Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'start'}
          alignItems={'center'}
          onClick={() => onPageChange('profile')}
          style={{
            color: currentPage === 'profile' ? '#FFFF' : '#c4c4c4',
            borderBottom: currentPage === 'profile' ? '2px solid red' : 'none',
            paddingBottom: '2px',
          }}
        >
          <Box>
            <FaUserEdit size={22} />
          </Box>
          <Box fontSize={'smaller'}>Profile</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Bottombar;
