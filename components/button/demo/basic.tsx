import React from 'react';
import { Button, Space } from 'antd';

const App: React.FC = () => (
  <Space wrap style={{ margin: 32 }}>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

export default App;
