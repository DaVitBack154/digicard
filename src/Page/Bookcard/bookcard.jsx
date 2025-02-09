import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import QrReader from './components/qr-scan';
import { FourSquare } from 'react-loading-indicators';

const Bookcard = () => {
  const [isScanner, setIsScanner] = useState(false);
  const [resScaner, setResScaner] = useState(null);
  const [resData, setResData] = useState();
  const [loading, setLoading] = useState(false);
  const mockDat = {
    name_img_user: "2025-2-5-62642.jpg",
    namefile: "2025-2-5-62642.jpg",
    name_user: "นาย สมชาย ใจดี",
  }

  const postImage = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name_img_user: mockDat.name_img_user,
          namefile: resScaner,
          name_user: mockDat.name_user,
        }),
      })
      const data = await res.json();
      setResData(data.data);
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (resScaner) {
      postImage();
    }
  }, [resScaner]);
  console.log(resData);
  return (
    <>
      {resScaner ? (
        loading && !resData ? (
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width="100%" height="10rem">
            <FourSquare color="#25605D" size="small" text="" textColor="" />
          </Box>
        ) : (
          resData?.imge && (
            <img src={`data:image/png;base64,${resData.imge}`} alt="preview" />
          )
        )
      )
        : !isScanner ? (
          <Box
            onClick={() => setIsScanner(true)}
            width="100%"
            height="100%"
            display="flex"
            justifyContent="start"
            alignItems="center"
          >
            <MdOutlineQrCodeScanner size={32} />
          </Box>
        ) : (
          <QrReader setIsScanner={setIsScanner} setResScaner={setResScaner} />
        )}

    </>
  );
};

export default Bookcard;
