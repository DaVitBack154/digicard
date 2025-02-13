import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import QRCode from 'react-qr-code';

const Telephone = () => {
  const account = useSelector((state) => state.account);

  const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${account.profile.fname}\nTITLE:${account.profile.position}\nADR:;;34/6 Chaengwattana Road, Khlong Kluea, Pakkret;;;;\nTEL;CELL:${account.profile.phone}\nEMAIL;TYPE=INTERNET:${account.profile.email}\nURL:www.chase.co.th\nEND:VCARD`;

  return (
    <>
      <Box
        p={3}
        borderRadius="lg"
        display={'flex'}
        justifyContent={'center'}
        mt={3}
      >
        <QRCode value={vcard} size={180} />
      </Box>
    </>
  );
};

export default Telephone;
