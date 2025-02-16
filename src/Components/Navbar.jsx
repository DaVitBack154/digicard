import { Box, Flex, Text, Container } from '@chakra-ui/react';
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../store/actionDispatch';
import { persistor } from '../store/index';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  // console.log(account.profile.fname, 'ooo');
  const onSignOutPress = async () => {
    await persistor.purge();
    dispatch(resetState());
    localStorage.removeItem('token');
    history('/');
    window.location.reload();
  };

  return (
    <Container maxW="full" display={{ base: 'block', lg: 'none' }} p={0}>
      <Box
        w={'100%'}
        bg={'#25605D'}
        color={'#FFF'}
        h="90px"
        bgImage="/bglogin.png"
        bgSize="cover"
        bgPosition="center bottom"
        bgRepeat="no-repeat"
        borderBottomLeftRadius="20px"
        borderBottomRightRadius="20px"
      >
        <Flex p={2}>
          <Box w={'70%'} mt={3} ml={2}>
            <Flex>
              <Box>
                <img src="/cr.png" alt="C" width={'50px'} />
              </Box>
              <Box ml={2}>
                <Text fontWeight={'600'}>
                  {account.profile.fname}
                  {/* Waruen Wanwanich */}
                </Text>
                <Text fontWeight={'300'} fontSize={'13px'} color={'#d9e1fa'}>
                  {account.profile.position}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box w={'30%'} mt={4}>
            <Box display={'flex'} justifyContent={'end'} alignItems={'center'}>
              <Box
                p={1}
                background={'#dbf3f2'}
                color={'#086f69'}
                cursor={'pointer'}
                rounded={'10px'}
                mr={3}
                onClick={() => onSignOutPress()}
              >
                <IoMdLogOut size={25} />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
