import QRCode from 'react-qr-code';
import { Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const QrcodeData = ({ tokenQrCode }) => {
  const url = window.location.origin + '/showcard/' + tokenQrCode;
  // console.log(tokenQrCode, 'oooo');
  return (
    <>
      <Box
        p={3}
        borderRadius="lg"
        display={'flex'}
        justifyContent={'center'}
        mt={3}
      >
        <QRCode value={url} size={180} />
      </Box>
    </>
  );
};

export default QrcodeData;
