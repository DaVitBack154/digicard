import { Box, Flex } from '@chakra-ui/react';
import { Riple } from 'react-loading-indicators';

const Spinload = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="rgba(0, 0, 0, 0.5)" // พื้นหลังโปร่งแสง สามารถปรับเปลี่ยนได้
      zIndex="9999" // เพื่อให้ Spinner อยู่เหนือองค์ประกอบอื่นๆ
    >
      <Box>
        {/* <Atom color="#25605D" size="medium" text="" textColor="" /> */}
        <Riple color="#25605D" size="medium" text="" textColor="" />
      </Box>
    </Flex>
  );
};

export default Spinload;
