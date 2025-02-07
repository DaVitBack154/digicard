import { Box } from '@chakra-ui/react';
import Bottombar from '../../Components/Bottombar';
import Navbar from '../../Components/Navbar';
import { useState } from 'react';
import Mycard from '../Mycard/mycard';
import Bookcard from '../Bookcard/bookcard';
import Profile from '../Profile/profile';

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState('mycard');
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
    <>
      <Box display="flex" flexDirection="column" minH="100vh" bg={'gray.100'}>
        <Box>
          <Navbar />
        </Box>
        {/* ส่วนของเนื้อหา */}
        <Box flex={1} p={2} mt={4}>
          {renderContent()} {/* Render content based on currentPage */}
        </Box>

        {/* ส่วนของ Bottom Bar */}
        <Box position="fixed" bottom={0} width="100%">
          <Bottombar onPageChange={handlePageChange} />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
