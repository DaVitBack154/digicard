import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Switch } from 'antd';
import { useEffect, useState } from 'react';
import { IoMdDownload } from 'react-icons/io';
import axios from 'axios';
import html2canvas from 'html2canvas';

const Showcard = () => {
  const { token } = useParams();
  const [checked, setChecked] = useState(false);
  const [Profile, setProfile] = useState(null);
  console.log(token);

  const handleDownload = async () => {
    const element = document.getElementById('capture'); // ดึง element ที่มี id="capture"
    if (!element) return;

    const canvas = await html2canvas(element, {
      backgroundColor: '#f0f0f0', // เปลี่ยนสีพื้นหลังเป็นสีเทาอ่อน หรือสีที่ต้องการ
    });
    const dataURL = canvas.toDataURL('image/png'); // แปลงเป็นรูปภาพ PNG

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'profile-card.png'; // ตั้งชื่อไฟล์
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    console.log('useEffect ถูกเรียก', token);
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
          <Box>กรุณาขอ Qr-Code ใหม่</Box>
        </>
      ) : (
        <>
          <Box px={3} bg={'gray.100'} h={'100vh'}>
            <br />
            <Box
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
              ml={2}
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
              <Box ml={2} onClick={handleDownload} cursor="pointer">
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

            <Container maxW={'400px'} padding={3} id="capture">
              <Box>
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
                              color={'#175252'}
                              fontFamily={'Montserrat'}
                            >
                              {Profile?.tname || 'Loading...'}
                            </Text>
                          </Flex>

                          <Text
                            fontSize={'11px'}
                            color={'#9b9b9b'}
                            ml={3}
                            fontFamily={'Montserrat'}
                          >
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
                      <br />
                      <Flex w={'100%'} alignItems={'center'} mb={2} px={1}>
                        <Box w={'45%'}>
                          <Box display={'flex'} className="namethai">
                            <Text fontWeight={'bold'}>T:</Text>
                            <Text
                              ml={1}
                              className="detail"
                              fontFamily={'Montserrat'}
                            >
                              {Profile.phone_off || 'Loading...'}
                            </Text>
                          </Box>
                          <Box display={'flex'} className="namethai">
                            <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                              M:
                            </Text>
                            <Text
                              ml={1}
                              className="detail"
                              fontFamily={'Montserrat'}
                            >
                              {Profile?.phone || 'Loading...'}
                            </Text>
                          </Box>
                          <Box display={'flex'} className="namethai">
                            <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                              E:
                            </Text>
                            <Text
                              ml={1}
                              className="detail"
                              fontFamily={'Montserrat'}
                            >
                              {Profile?.email || 'Loading...'}
                            </Text>
                          </Box>
                        </Box>
                        <Box w={'55%'} className="namethai">
                          <Flex justifyContent={'end'}>
                            <Box
                              position={'relative'}
                              top={'-6px'}
                              right={'-8px'}
                            >
                              <img
                                src="/red.png"
                                alt="red"
                                width={'16px'}
                                // style={{ borderRadius: '10px' }}
                              />
                            </Box>
                            <Text
                              fontWeight={'600'}
                              className="namethai"
                              fontFamily={'Montserrat'}
                            >
                              บริษัท เชฏฐ์ เอเชีย จำกัด (มหาชน)
                            </Text>
                          </Flex>
                          <Box textAlign={'end'}>
                            <Text className="detail" fontFamily={'Montserrat'}>
                              34/6 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ
                            </Text>
                          </Box>
                          <Box textAlign={'end'}>
                            <Text className="detail" fontFamily={'Montserrat'}>
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
                              color={'#175252'}
                              fontFamily={'Montserrat'}
                            >
                              {Profile?.fname || 'Loading...'}
                            </Text>
                          </Flex>

                          <Text
                            fontSize={'11px'}
                            fontFamily={'Montserrat'}
                            color={'#9b9b9b'}
                            ml={3}
                          >
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
                        <Box w={'50%'} fontFamily={'Montserrat'}>
                          <Box display={'flex'} className="nameall">
                            <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                              T:
                            </Text>
                            <Text
                              ml={1}
                              className="detail"
                              fontFamily={'Montserrat'}
                            >
                              {Profile.phone_off || 'Loading...'}
                            </Text>
                          </Box>
                          <Box display={'flex'} className="nameall">
                            <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                              M:
                            </Text>
                            <Text
                              ml={1}
                              className="detail"
                              fontFamily={'Montserrat'}
                            >
                              {Profile?.phone || 'Loading...'}
                            </Text>
                          </Box>
                          <Box display={'flex'} className="nameall">
                            <Text fontWeight={'bold'} fontFamily={'Montserrat'}>
                              E:
                            </Text>
                            <Text
                              ml={1}
                              className="detail"
                              fontFamily={'Montserrat'}
                            >
                              {Profile?.email || 'Loading...'}
                            </Text>
                          </Box>
                        </Box>
                        <Box
                          w={'50%'}
                          className="nameall"
                          fontFamily={'Montserrat'}
                        >
                          <Box textAlign={'end'}>
                            <Text className="detail" fontFamily={'Montserrat'}>
                              34/6 Changwatana Road
                            </Text>
                          </Box>
                          <Box textAlign={'end'} fontFamily={'Montserrat'}>
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
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default Showcard;
