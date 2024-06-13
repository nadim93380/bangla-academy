/* eslint-disable react/prop-types */

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Rechart = ({allbooks}) => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    console.log(allbooks)
    

    const data = [
        {
            name: `${allbooks[0].bookName}`,
            uv: `${allbooks[0].totalPages}`,
            pv: 2400,
            amt: 2400,
        },
        {
            name: `${allbooks[1].bookName}`,
            uv: `${allbooks[1].totalPages}`,
            pv: 1398,
            amt: 2210,
        },
        {
            name: `${allbooks[2].bookName}`,
            uv: `${allbooks[2].totalPages}`,
            pv: 9800,
            amt: 2290,
        },
        {
            name: `${allbooks[3].bookName}`,
            uv: `${allbooks[3].totalPages}`,
            pv: 3908,
            amt: 2000,
        },
        {
            name: `${allbooks[4].bookName}`,
            uv: `${allbooks[4].totalPages}`,
            pv: 4800,
            amt: 2181,
        },
        {
            name: `${allbooks[5].bookName}`,
            uv: `${allbooks[5].totalPages}`,
            pv: 3800,
            amt: 2500,
        },
    ];

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
        <BarChart
      width={1170}
      height={556}
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
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    );
};

export default Rechart;