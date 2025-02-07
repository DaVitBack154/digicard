import { Box, Flex, Text } from '@chakra-ui/react';

const FontCard = () => {
  return (
    <>
      <Box bg={'#FFF'} p={1}>
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
                Waruen Wanwanich
              </Text>
            </Flex>

            <Text className="namelek" ml={3}>
              Programmer
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
        <br />
        <Flex justifyContent={'end'} px={1}>
          <Box position={'relative'} top={'-6px'} right={'-8px'}>
            <img
              src="/red.png"
              alt="red"
              width={'18px'}
              // style={{ borderRadius: '10px' }}
            />
          </Box>
          <Text fontSize={'small'} fontWeight={'bold'}>
            CHASE ASIA PCL
          </Text>
        </Flex>

        <Flex w={'100%'} alignItems={'center'} mb={4} px={1}>
          <Box w={'50%'}>
            <Box display={'flex'} fontSize={'smaller'}>
              <Text fontWeight={'bold'}>D:</Text>
              <Text ml={1}>02-558-9009 Ext 1031</Text>
            </Box>
            <Box display={'flex'} fontSize={'smaller'}>
              <Text fontWeight={'bold'}>M:</Text>
              <Text ml={1}>098-090-0099</Text>
            </Box>
            <Box display={'flex'} fontSize={'smaller'}>
              <Text fontWeight={'bold'}>E:</Text>
              <Text ml={1}>waruen.css@gmail.com</Text>
            </Box>
          </Box>
          <Box w={'50%'}>
            <Box fontSize={'smaller'} textAlign={'end'}>
              <Text>34/6 Changwatana Road</Text>
            </Box>
            <Box fontSize={'smaller'} textAlign={'end'}>
              <Text>Klong kluea Paket</Text>
            </Box>
            <Box fontSize={'smaller'} textAlign={'end'}>
              <Text>Nontaburi 10130</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FontCard;
