/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { IoClose } from 'react-icons/io5';

// import '../../../styles/qr-style.css';
import { Box } from '@chakra-ui/react';

const QrReader = ({ setIsScanner, setResScaner }) => {
  const scannerRef = useRef(null);
  const htmlQrRef = useRef(null);

  useEffect(() => {
    const initScanner = async () => {
      if (scannerRef.current && !htmlQrRef.current) {
        try {
          console.log('Scanner Start...');
          const devices = await Html5Qrcode.getCameras();
          if (devices.length > 0) {
            // const cameraId = devices[devices.length - 1].id;
            htmlQrRef.current = new Html5Qrcode(scannerRef.current.id);

            await htmlQrRef.current.start(
              // { deviceId: { exact: cameraId } },
              { facingMode: 'environment' },
              { fps: 10, qrbox: { width: 200, height: 200 } },
              (decodedText) => {
                console.log('QR Code detected:', decodedText);
                setResScaner(decodedText);
              }
              // (errorMessage) => {
              //   console.warn('QR Code scan error:', errorMessage);
              // }
            );
          }
        } catch (error) {
          console.error('Error initializing QR scanner:', error);
        }
      }
    };

    initScanner();

    return () => {
      if (htmlQrRef.current) {
        htmlQrRef.current
          .stop()
          .then(() => {
            console.log('Scanner stopped');
            htmlQrRef.current.clear();
            htmlQrRef.current = null;
          })
          .catch((err) => console.error('Error stopping scanner:', err));
      }
    };
  }, []);

  return (
    <Box position={'relative'} bgColor={'black'}>
      <div
        ref={scannerRef}
        id="qr-reader"
        style={{ position: 'relative', backgroundColor: 'black' }}
      />
      <IoClose
        onClick={() => setIsScanner(false)}
        color="white"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          zIndex: '99',
        }}
        size={32}
      />
    </Box>
  );
};

export default QrReader;
