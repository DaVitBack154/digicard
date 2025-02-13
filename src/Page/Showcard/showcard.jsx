import { Box, Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Switch } from 'antd';
import { useEffect, useState } from 'react';
import { IoMdDownload } from 'react-icons/io';
import axios from 'axios';

const Showcard = () => {
  const { token } = useParams();
  const [checked, setChecked] = useState(false);
  const [Profile, setProfile] = useState(null);
  // console.log(token);

  useEffect(() => {
    // console.log('useEffect ถูกเรียก', token);
    if (token) {
      getProfile();
    }
  }, [token]);

  const getProfile = async () => {
    if (!token) return;
    try {
      const _res = await axios.get(
        import.meta.env.VITE_REACT_APP_API_USER + '/getProfileCard',
        {
          params: { token },
        }
      );
      // console.log(_res, 'oopoo');

      if (_res.status === 200 && _res.data?.data) {
        setProfile(_res.data.data);
      } else {
        console.log('API Response ไม่มีข้อมูลที่ถูกต้อง');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {Profile == null || undefined ? (
        <>
          <br />
          <Box>กรุณาขอ Qr-Code ใหม่</Box>
        </>
      ) : (
        <>
          <Box px={3}>
            <Box
              my={5}
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
            >
              <Switch
                checked={checked}
                onChange={setChecked}
                checkedChildren="TH"
                unCheckedChildren="EN"
                style={{
                  backgroundColor: checked ? '#25605D' : '#25605D',
                  borderColor: checked ? '#25605D' : '#25605D',
                }}
              />
              <Box ml={2}>
                <Box
                  p={2}
                  background={'#dbf3f2'}
                  color={'#086f69'}
                  rounded={'10px'}
                >
                  <IoMdDownload size={20} />
                </Box>
              </Box>
            </Box>
            <hr />

            {checked ? (
              <>
                {/* หน้า card ภาษาไทย */}
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
                          {Profile?.tname || 'Loading...'}
                        </Text>
                      </Flex>

                      <Text fontSize={'11px'} color={'#9b9b9b'} ml={3}>
                        {Profile?.position || 'Loading...'}
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
                          02-558-9009 ({Profile?.phone_off || 'Loading...'})
                        </Text>
                      </Box>
                      <Box display={'flex'} className="namethai">
                        <Text fontWeight={'bold'}>M:</Text>
                        <Text ml={1} className="detail">
                          {Profile?.phone || 'Loading...'}
                        </Text>
                      </Box>
                      <Box display={'flex'} className="namethai">
                        <Text fontWeight={'bold'}>E:</Text>
                        <Text ml={1} className="detail">
                          {Profile?.email || 'Loading...'}
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
                        <Text className="detail">
                          34/6 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ
                        </Text>
                      </Box>
                      <Box textAlign={'end'}>
                        <Text className="detail">
                          อำเภอปากเกร็ด จังหวัดนนทบุรี 11120
                        </Text>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
                {/* หน้า card ภาษาไทย */}
              </>
            ) : (
              <>
                {/* หน้า card ภาษาอังกฤษ */}
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
                          {Profile?.fname || 'Loading...'}
                        </Text>
                      </Flex>

                      <Text fontSize={'11px'} color={'#9b9b9b'} ml={3}>
                        {Profile?.position || 'Loading...'}
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

                  <Flex w={'100%'} alignItems={'center'} mb={2} px={1}>
                    <Box w={'50%'}>
                      <Box display={'flex'} className="nameall">
                        <Text fontWeight={'bold'}>D:</Text>
                        <Text ml={1} className="detail">
                          02-558-9009 ({Profile?.phone_off || 'Loading...'})
                        </Text>
                      </Box>
                      <Box display={'flex'} className="nameall">
                        <Text fontWeight={'bold'}>M:</Text>
                        <Text ml={1} className="detail">
                          {Profile?.phone || 'Loading...'}
                        </Text>
                      </Box>
                      <Box display={'flex'} className="nameall">
                        <Text fontWeight={'bold'}>E:</Text>
                        <Text ml={1} className="detail">
                          {Profile?.email || 'Loading...'}
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
                {/* หน้า card ภาษาอังกฤษ */}
              </>
            )}

            <br />
            <Box w={'100%'}>
              <img
                src="/back_card.png"
                alt="back_chase"
                style={{ borderRadius: '8px' }}
              />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Showcard;
