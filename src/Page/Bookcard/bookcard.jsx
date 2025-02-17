import { Box, Text } from '@chakra-ui/react';

const Bookcard = () => {
  return (
    <>
      <Box w={'100%'}>
        {/* chase */}
        <Box
          h="200px"
          bgImage="/bg_tax.png"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius={'10px'}
          // color={'#FFF'}
          w={'100%'}
          fontSize={'13px'}
        >
          <Box p={4}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              // alignItems={'center'}
            >
              <Box>
                <Text fontWeight={'bold'}>CHASE ASIA PCL</Text>
                <Text>บริษัท เชฎฐ์ เอเชีย จำกัด (มหาชน)</Text>
              </Box>
              <Box position={'relative'} right={'-10px'}>
                <img src="/logo.png" alt="bg_tax" width={90} />
              </Box>
            </Box>

            <Box my={3}>
              <Box color={'gray.400'}>ที่อยู่ :</Box>
              <Box>
                <Text>34/6 หมู่ที่ 1 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ</Text>
              </Box>
              <Box>
                <Text>อำเภอปากเกร็ด จังหวัดนนทบุรี 11120</Text>
              </Box>
            </Box>
            <Box
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
              mt={2}
            >
              <Text color={'gray.400'}>Tax : </Text>
              <Text ml={2}>0105546031394</Text>
            </Box>
            <Box
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
            >
              <Text color={'gray.400'}>Phone : </Text>
              <Text ml={2}>02 855 8222</Text>
            </Box>
          </Box>
        </Box>
        {/* chase */}
        <br />
        {/* rway */}
        <Box
          h="200px"
          bgImage="/bg_tax.png"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius={'10px'}
          // color={'#FFF'}
          w={'100%'}
          fontSize={'13px'}
        >
          <Box p={4}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              // alignItems={'center'}
            >
              <Box>
                <Text fontWeight={'bold'}>RESOLUTION WAY CO.,LTD.</Text>
                <Text>บริษัท รีโซลูชั่น เวย์ จำกัด</Text>
              </Box>
              <Box>
                <img src="/rway.png" alt="bg_tax" width={60} />
              </Box>
            </Box>

            <Box my={3}>
              <Box color={'gray.400'}>ที่อยู่ :</Box>
              <Box>
                <Text>102/10 หมู่ที่ 4 ซอย 5 แยก 1 ถนนกำแพงเพชร 6</Text>
              </Box>
              <Box>
                <Text>แขวงตลาดบางเขน เขต หลักสี่ กรุงเทพมหานคร 10210</Text>
              </Box>
            </Box>
            <Box
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
              mt={2}
            >
              <Text color={'gray.400'}>Tax : </Text>
              <Text ml={2}>0105546031394</Text>
            </Box>
            <Box
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
            >
              <Text color={'gray.400'}>Phone : </Text>
              <Text ml={2}>02 821 1055</Text>
            </Box>
          </Box>
        </Box>
        {/* rway */}
        <br />
        {/* CFAM */}
        <Box
          h="200px"
          bgImage="/bg_tax.png"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius={'10px'}
          // color={'#FFF'}
          w={'100%'}
          fontSize={'13px'}
        >
          <Box p={4}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              // alignItems={'center'}
            >
              <Box>
                <Text fontSize={'12px'} fontWeight={'bold'}>
                  CF ASIA ASSET MANAGEMENT CO.,LTD.
                </Text>
                <Text fontSize={'12px'}>
                  บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด
                </Text>
              </Box>
              <Box>
                <img src="/cfam.png" alt="bg_tax" width={60} />
              </Box>
            </Box>

            <Box my={3}>
              <Box color={'gray.400'}>ที่อยู่ :</Box>
              <Box>
                <Text>34/6 หมู่ที่ 1 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ</Text>
              </Box>
              <Box>
                <Text>อำเภอปากเกร็ด จังหวัดนนทบุรี 11120</Text>
              </Box>
            </Box>
            <Box
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
              mt={2}
            >
              <Text color={'gray.400'}>Tax : </Text>
              <Text ml={2}>0135555007263</Text>
            </Box>
            <Box
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
            >
              <Text color={'gray.400'}>Phone : </Text>
              <Text ml={2}>02 826 5377</Text>
            </Box>
          </Box>
        </Box>
        {/* CFAM */}
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};

export default Bookcard;
