import { extendTheme } from '@chakra-ui/react';

// สร้างธีมใหม่ที่กำหนดให้ใช้ Public Sans
const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif', // ฟอนต์สำหรับหัวข้อ
    body: 'Montserrat, Montserrat', // ฟอนต์สำหรับเนื้อหาหลัก
    color: '#433C50',
  },
});

export default theme;
