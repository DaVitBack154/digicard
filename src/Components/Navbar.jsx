import { Box, Flex, Text } from '@chakra-ui/react';
import { IoMdLogOut } from 'react-icons/io';

const Navbar = () => {
  return (
    <>
      <Box
        w={'100%'}
        bg={'#25605D'}
        color={'#FFF'}
        h="80px"
        bgImage="/bglogin.png"
        bgSize="cover"
        bgPosition="center bottom"
        bgRepeat="no-repeat"
        borderBottomLeftRadius="10px"
        borderBottomRightRadius="10px"
      >
        <Flex p={2}>
          <Box w={'70%'} mt={3}>
            <Flex>
              <Box>
                <img src="/cr.png" alt="C" width={'40px'} />
              </Box>
              <Box ml={2}>
                <Text fontSize={'small'} fontWeight={'bold'}>
                  Waruen Wanwanich
                </Text>
                <Text fontSize={'smaller'}>Programmer</Text>
              </Box>
            </Flex>
          </Box>
          <Box w={'30%'} mt={3}>
            <Box display={'flex'} justifyContent={'end'} alignItems={'center'}>
              <Box
                p={1}
                background={'#dbf3f2'}
                color={'#086f69'}
                cursor={'pointer'}
                rounded={'10px'}
                mr={3}
              >
                <IoMdLogOut size={20} />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
