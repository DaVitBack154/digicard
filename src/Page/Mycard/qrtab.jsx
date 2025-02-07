import { Box } from '@chakra-ui/react';
import { Tabs } from 'antd';

const QrTab = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Qr-Code Card',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Qr-Code Phone',
      children: 'Content of Tab Pane 2',
    },
  ];
  return (
    <>
      <Box>
        <Tabs
          defaultActiveKey="1"
          items={items}
          type="card"
          onChange={onChange}
        />
      </Box>
    </>
  );
};

export default QrTab;
