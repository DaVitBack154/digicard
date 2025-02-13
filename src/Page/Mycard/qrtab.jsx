import { Box } from '@chakra-ui/react';
import { Tabs } from 'antd';
import { FaIdCard } from 'react-icons/fa6';
import { FaUserFriends } from 'react-icons/fa';
import QrcodeData from './components/qrlink/qrcode';
import Telephone from './components/tele/telephone';

// eslint-disable-next-line react/prop-types
const QrTab = ({ tokenQrCode }) => {
  // console.log('tokenQrCode', tokenQrCode);
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: (
        <>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box>Qr-Card</Box>
            <Box ml={2}>
              <FaIdCard size={20} />
            </Box>
          </Box>
        </>
      ),
      children: tokenQrCode !== null && tokenQrCode !== '' && (
        <QrcodeData tokenQrCode={tokenQrCode} />
      ),
    },
    {
      key: '2',
      label: (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box>Qr-Phone</Box>
          <Box ml={2}>
            <FaUserFriends size={20} />
          </Box>
        </Box>
      ),
      children: <Telephone />,
    },
  ];
  return (
    <>
      <Box>
        <Tabs
          defaultActiveKey="1"
          items={items}
          type="card"
          onChange={onChange}
        />
      </Box>
    </>
  );
};

export default QrTab;
