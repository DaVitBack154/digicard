import { Box, Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const FontThaiCard = () => {
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
                {account.profile.tname}
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
              width={'90px'}
              // style={{ borderRadius: '10px' }}
            />
          </Box>
        </Flex>
        <br />
        <br />
        <br />

        <Flex w={'100%'} alignItems={'center'} mb={2} px={1}>
          <Box w={'45%'}>
            <Box display={'flex'} className="namethai">
              <Text fontWeight={'bold'}>D:</Text>
              <Text ml={1} className="detail">
                02-558-9009 ({account.profile.phone_off})
              </Text>
            </Box>
            <Box display={'flex'} className="namethai">
              <Text fontWeight={'bold'}>M:</Text>
              <Text ml={1} className="detail">
                {account.profile.phone}
              </Text>
            </Box>
            <Box display={'flex'} className="namethai">
              <Text fontWeight={'bold'}>E:</Text>
              <Text ml={1} className="detail">
                {account.profile.email}
              </Text>
            </Box>
          </Box>
          <Box w={'55%'} className="namethai">
            <Flex justifyContent={'end'}>
              <Box position={'relative'} top={'-6px'} right={'-8px'}>
                <img
                  src="/red.png"
                  alt="red"
                  width={'16px'}
                  // style={{ borderRadius: '10px' }}
                />
              </Box>
              <Text fontWeight={'600'} className="namethai">
                บริษัท เชฏฐ์ เอเชีย จำกัด (มหาชน)
              </Text>
            </Flex>
            <Box textAlign={'end'}>
              <Text className="detail">34/6 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ</Text>
            </Box>
            <Box textAlign={'end'}>
              <Text className="detail">อำเภอปากเกร็ด จังหวัดนนทบุรี 11120</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FontThaiCard;
