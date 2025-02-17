import { Box, Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const FontCard = () => {
  const account = useSelector((state) => state.account);
  return (
    <>
      <Box
        bg={'#FFF'}
        p={1}
        rounded={'8px'}
        boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px;'}
      >
        <Flex
          w={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mt={2}
        >
          <Box>
            <Flex>
              <Box position={'relative'} top={'-8px'}>
                <img
                  src="/red.png"
                  alt="red"
                  width={'20px'}
                  // style={{ borderRadius: '10px' }}
                />
              </Box>

              <Text
                position={'relative'}
                left={'-10px'}
                fontWeight={'bold'}
                color={'#175252'}
                fontFamily={'Montserrat'}
              >
                {account.profile.fname}
              </Text>
            </Flex>

            <Text
              fontSize={'13px'}
              color={'#9b9b9b'}
              ml={3}
              fontFamily={'Montserrat'}
            >
              {account.profile.position}
            </Text>
          </Box>
          <Box>
            <img
              src="/logo.png"
              alt="logo"
              width={'90px'}
              // style={{ borderRadius: '10px' }}
            />
          </Box>
        </Flex>
        <br />
        <br />
        <br />
        <Flex justifyContent={'end'} px={1}>
          <Box position={'relative'} top={'-6px'} right={'-10px'}>
            <img
              src="/red.png"
              alt="red"
              width={'18px'}
              // style={{ borderRadius: '10px' }}
            />
          </Box>
          <Text fontSize={'14px'} fontWeight={'600'} fontFamily={'Montserrat'}>
            CHASE ASIA PCL
          </Text>
        </Flex>

        <Flex w={'100%'} alignItems={'center'} mb={2} px={1}>
          <Box w={'50%'} fontFamily={'Montserrat'}>
            <Box display={'flex'} className="nameall">
              <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                D:
              </Text>
              <Text ml={1} className="detail" fontFamily={'Montserrat'}>
                0 28555 8222 ({account.profile.phone_off})
              </Text>
            </Box>
            <Box display={'flex'} className="nameall">
              <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                M:
              </Text>
              <Text ml={1} className="detail" fontFamily={'Montserrat'}>
                {account.profile.phone}
              </Text>
            </Box>
            <Box display={'flex'} className="nameall">
              <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                E:
              </Text>
              <Text ml={1} className="detail" fontFamily={'Montserrat'}>
                {account.profile.email}
              </Text>
            </Box>
          </Box>
          <Box w={'50%'} className="nameall" fontFamily={'Montserrat'}>
            <Box textAlign={'end'}>
              <Text className="detail" fontFamily={'Montserrat'}>
                34/6 Changwatana Road
              </Text>
            </Box>
            <Box textAlign={'end'}>
              <Text className="detail" fontFamily={'Montserrat'}>
                Klong kluea Paket
              </Text>
            </Box>
            <Box textAlign={'end'}>
              <Text className="detail" fontFamily={'Montserrat'}>
                Nontaburi 11120
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FontCard;
