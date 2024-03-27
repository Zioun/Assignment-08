import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Read = () => {
  const [appliedReadData, setAppliedReadData] = useState([]);

  useEffect(() => {
    const getDefaultReadData = JSON.parse(localStorage.getItem("read")) || [];
    setAppliedReadData(getDefaultReadData);
  }, []);

  const data = appliedReadData.map((read, index) => ({
    name: read.bookName,
    uv: read.totalPages, // Assuming you have 'uv' property in your read data
    pv: read.pv, // Assuming you have 'pv' property in your read data
    amt: read.amt, // Assuming you have 'amt' property in your read data
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className='flex justify-center'>
      <BarChart
        width={1100}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Read;
