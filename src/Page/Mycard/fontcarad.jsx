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
                fontSize={'smaller'}
                fontWeight={'bold'}
              >
                {account.profile.fname}
              </Text>
            </Flex>

            <Text fontSize={'11px'} color={'#9b9b9b'} ml={3}>
              {account.profile.position}
            </Text>
          </Box>
          <Box>
            <img
              src="/logo.png"
              alt="logo"
              width={'100px'}
              // style={{ borderRadius: '10px' }}
            />
          </Box>
        </Flex>
        <br />
        <br />

        <Flex justifyContent={'end'} px={1} mt={2}>
          <Box position={'relative'} top={'-6px'} right={'-10px'}>
            <img
              src="/red.png"
              alt="red"
              width={'18px'}
              // style={{ borderRadius: '10px' }}
            />
          </Box>
          <Text fontSize={'13px'} fontWeight={'600'}>
            CHASE ASIA PCL
          </Text>
        </Flex>

        <Flex w={'100%'} alignItems={'center'} mb={4} px={1}>
          <Box w={'50%'}>
            <Box display={'flex'} className="nameall">
              <Text fontWeight={'bold'}>D:</Text>
              <Text ml={1} className="detail">
                02-558-9009 ({account.profile.phone_off})
              </Text>
            </Box>
            <Box display={'flex'} className="nameall">
              <Text fontWeight={'bold'}>M:</Text>
              <Text ml={1} className="detail">
                {account.profile.phone}
              </Text>
            </Box>
            <Box display={'flex'} className="nameall">
              <Text fontWeight={'bold'}>E:</Text>
              <Text ml={1} className="detail">
                {account.profile.email}
              </Text>
            </Box>
          </Box>
          <Box w={'50%'} className="nameall">
            <Box textAlign={'end'}>
              <Text className="detail">34/6 Changwatana Road</Text>
            </Box>
            <Box textAlign={'end'}>
              <Text className="detail">Klong kluea Paket</Text>
            </Box>
            <Box textAlign={'end'}>
              <Text className="detail">Nontaburi 10130</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FontCard;
