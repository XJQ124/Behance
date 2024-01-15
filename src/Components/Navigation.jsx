import TitleImage from '../images/title.jpg';
import NoteImage from '../images/notifications.jpg';
import Color from '../images/color.jpg'
import Adobe from '../images/Adobe.jpg'
import '../css/title.css'
import { Tabs, Button, Input } from 'antd';
import { SearchOutlined, CaretDownOutlined, RocketOutlined, ToolOutlined, RadarChartOutlined, HomeOutlined, ShopOutlined, BarChartOutlined, TeamOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useState } from 'react';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: '为您呈现',
    },
    {
        key: '2',
        label: '发现',
    },
    {
        key: '3',
        label: '聘请',
    },
    {
        key: '4',
        label: '资源',
    },
    {
        key: '5',
        label: '职位',
    },
];
const Navigation = () => {
    const GetButtons = () => {
        const texts = ['项目', '资源', '图像', '人物', '原型', '直播', '情绪板']
        return _.map(texts, (button, index) => (
            <Button
                key={index}
                shape='round'
                type="text"
                className='otherButton'
                style={{ marginRight: 10 }}
            >
                {button}
            </Button>
        ))
    }
    const GitDiv = () => {
        const [expand, setExpand] = useState(true)
        const toggle = (index) => {
            setExpand(prevIndex => (prevIndex === index ? true : index));
        };
        const rectangles = [
            { icon: <RocketOutlined />, text: '创意领域' },
            { icon: <ToolOutlined />, text: '工具' },
            { icon: <RadarChartOutlined />, text: '颜色' },
            { icon: <HomeOutlined />, text: '位置' },
            { icon: <ShopOutlined />, text: '学校' },
            { icon: <BarChartOutlined />, text: '资源' },
            { icon: <TeamOutlined />, text: '订阅' },
        ];
        return _.map(rectangles, (rectangle, index) => (
            <button
                className={`rectangle ${expand === index ? 'expanded' : ''}`}

                onClick={() => toggle(index)}
                onFocus={() => setExpand(index)} 
                key={index}
    
            >
                <div style={{ marginRight: 8, marginLeft: 8 }} >{rectangle.icon}</div>
                <div className='rectangle-text'>{rectangle.text}</div>
                <CaretDownOutlined style={{ fontSize: 8, marginLeft: 8, marginRight: 8, transform: `rotate(${expand === index ? 180 : 0}deg)` }} />
            </button>
        ))
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={TitleImage} alt="title" className='title' />
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ marginTop: 3, marginLeft: 20 }} />
                <img src={NoteImage} alt='note' className='note' style={{ marginLeft: 570 }} />
                <Button shape='round' style={{ color: '#1356f9' }} className='button'>登录</Button>
                <Button type="primary" shape="round" className='button'>注册</Button>
                <span className='vertical-Line' style={{ marginTop: 10, marginLeft: 10 }} />
                <Button shape='round' className='button'>
                    <img src={Color} alt="color" style={{ width: 25, height: 25 }} />
                    免费试用
                </Button>
                <img src={Adobe} alt="adobe" style={{ width: 'auto', height: 40 }} className='button' />
            </div>
            <Input addonBefore={<SearchOutlined />} addonAfter={
                <>
                    {GetButtons()}
                </>
            } placeholder="探索工作中的创意世界" style={{ width: 1405, height: 40, marginLeft: 15 }} size='large' />
            <div className='outer'>
                <div className='rectangle-container' style={{ marginTop: 25, marginBottom: 25, marginLeft: 15 }}>
                    {GitDiv()}
                </div>
                <div style={{ marginTop: 25, marginBottom: 25, marginRight: 50 }}>
                    <div style={{ fontSize: 10 }}>
                        分类
                    </div>
                    <div style={{ fontSize: 14 }}>
                        推荐&nbsp;&nbsp;<CaretDownOutlined style={{ fontSize: 8 }} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navigation