import { extendTheme } from '@chakra-ui/react';

// สร้างธีมใหม่ที่กำหนดให้ใช้ Public Sans
const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif', // ฟอนต์สำหรับหัวข้อ
    body: 'Inter, sans-serif', // ฟอนต์สำหรับเนื้อหาหลัก
    color: '#433C50',
  },
});

export default theme;
