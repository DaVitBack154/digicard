import { Box } from '@chakra-ui/react';
import Bottombar from '../../Components/Bottombar';
import Navbar from '../../Components/Navbar';
import { useState, useEffect } from 'react'; // Import useEffect
import Mycard from '../Mycard/mycard';
import Bookcard from '../Bookcard/bookcard';
import Profile from '../Profile/profile';

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState('mycard'); // ค่าเริ่มต้นเป็น 'mycard'

  useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []); // useEffect นี้จะทำงานแค่ครั้งแรกที่ component mount

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]); // useEffect นี้จะทำงานเมื่อ currentPage เปลี่ยนแปลง

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'mycard':
        return <Mycard />;
      case 'bookcard':
        return <Bookcard />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" flexDirection="column" minH="100vh" bg={'#f1f1fa'}>
      <Box>
        <Navbar />
      </Box>
      <Box flex={1} p={2} mt={4}>
        {renderContent()}
      </Box>
      <Box position="fixed" bottom={0} width="100%">
        <Bottombar onPageChange={handlePageChange} currentPage={currentPage} />
        {/* Pass currentPage to Bottombar */}
      </Box>
    </Box>
  );
};

export default Homepage;
