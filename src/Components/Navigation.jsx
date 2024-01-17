import TitleImage from '../images/title.jpg';
import NoteImage from '../images/notifications.jpg';
import Color from '../images/color.jpg'
import Adobe from '../images/Adobe.jpg'
import '../css/title.css'
import { Tabs, Button, Input, Popover, Divider, Select } from 'antd';
import { SearchOutlined, CaretDownOutlined, RocketOutlined, ToolOutlined, RadarChartOutlined, HomeOutlined, ShopOutlined, BarChartOutlined, TeamOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useState } from 'react';
import { SwatchesPicker } from 'react-color';

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
        const [expand, setExpand] = useState(null)
        const [rotate, setRotate] = useState(false)
        const [curIndex, setCurIndex] = useState(null)
        const toggle = (index) => {
            console.log('toggle', index)
            setCurIndex(index)
            setRotate(preRotate => !preRotate)
            setExpand(prevIndex => (prevIndex === index ? true : index));
        };
        //Popover里的内容以及是否可见
        const [visiblePopover, setVisiblePopover] = useState(null)
        const handlePopover = (index, visible) => {
            if (visible) {
                setVisiblePopover(index)
            } else {
                setVisiblePopover(null)
            }
        }
        //颜色选择器
        const ColorPickerComponent = () => {
            const [selectedColor, setSelectedColor] = useState('#ffffff');
            const handleColorChange = (color) => {
                setSelectedColor(color.hex);
            };
            return (
                <div>
                    <SwatchesPicker
                        color={selectedColor}
                        onChange={handleColorChange}
                    />
                </div>
            );
        };
        const options = [
            {
                value: '1',
                label: '选择国家/地区',
            },
            {
                value: '2',
                label: 'Closed',
            },
            {
                value: '3',
                label: 'Communicated',
            },
            {
                value: '4',
                label: 'Identified',
            },
            {
                value: '5',
                label: 'Resolved',
            },
            {
                value: '6',
                label: 'Cancelled',
            },
            {
                value: '7',
                label: 'Not Identified',
            },
            {
                value: '8',
                label: 'Closed',
            },
            {
                value: '9',
                label: 'Communicated',
            },
            {
                value: '10',
                label: 'Identified',
            },
            {
                value: '11',
                label: 'Resolved',
            },
            {
                value: '12',
                label: 'Cancelled',
            },
        ]
        //选择框禁止
        const [selectedCountry, setSelectedCountry] = useState(null);
        const handleChangeCountry = (value) => {
            // 更新选中的国家
            setSelectedCountry(value);
        };
        //清除按钮方法
        const handleClear = () => {
            setSelectedCountry(null); // 清除已选择的国家
            setVisiblePopover(null); // 关闭 Popover
        };
        //取消按钮方法
        const handleCanecl = () => {
            setVisiblePopover(null);
        }
        const rectangles = [
            { icon: <RocketOutlined />, text: '创意领域' },
            {
                icon: <ToolOutlined />, text: '工具', content: (
                    <div style={{ marginLeft: 30, marginRight: 30 }}>
                        <div className='rectangle-font' style={{ marginBottom: 5 }}>
                            搜素工具
                        </div>
                        <Input placeholder="开始键入以查看列表" style={{ width: 370 }} />
                        <div className='rectangle-font' style={{ marginTop: 30 }}>
                            热门工具
                        </div>
                        <div className='font-padding'>
                            Adobe Photoshop
                        </div>
                        <div className='font-padding'>
                            Adobe Illustrator
                        </div>
                        <div className='font-padding'>
                            Adobe InDesign
                        </div>
                        <div className='font-padding'>
                            Adobe After Effect
                        </div>
                        <div className='font-padding'>
                            Adobe Photoshop Lightroom
                        </div>
                    </div >)
            },
            {
                icon: <RadarChartOutlined />, text: '颜色', content: (
                    <>
                        <ColorPickerComponent />
                    </>
                )
            },
            {
                icon: <HomeOutlined />, text: '位置', content: (
                    <>
                        <div className='input-local' >
                            <div className='input-state'>
                                国家/地区
                            </div>
                            <div>
                                <Select
                                    showSearch
                                    style={{
                                        width: 180,
                                    }}
                                    placeholder="选择国家/地区"
                                    options={options}
                                    onChange={handleChangeCountry}
                                    value={selectedCountry}
                                />
                            </div>
                        </div>
                        <div className='input-local' style={{ marginTop: 10 }}>
                            <div className='input-citys'>
                                城市
                            </div >
                            <div>
                                <Input disabled={!selectedCountry} />
                            </div>
                        </div>
                        <Divider />
                        <div style={{ marginLeft: 10 }} >
                            <Button type="text" onClick={handleCanecl}>取消</Button>
                            {/* 清除按钮 */}
                            {selectedCountry && (
                                <Button type="text" onClick={handleClear}>
                                    清除筛选条件
                                </Button>
                            )}
                            <Button type="primary" shape="round" >应用筛选器</Button>
                        </div>
                    </>
                )
            },
            { icon: <ShopOutlined />, text: '学校', content: '学校的内容' },
            { icon: <BarChartOutlined />, text: '资源', content: '资源的内容' },
            { icon: <TeamOutlined />, text: '订阅', content: '订阅的内容' },
        ];
        console.log('expand', expand)
        return _.map(rectangles, (rectangle, index) => (
            <Popover
                key={index}
                arrow={false}
                content={rectangle.content}//显示对应的内容
                placement="bottomLeft"
                // 这个是让他点击才显示
                trigger="click" 
                open={visiblePopover === index}
                onOpenChange={(visible) => handlePopover(index, visible)}
                style={{ whiteSpace: 'nowrap', }}
            >
                <Button
                    className={`rectangle ${expand === index ? 'expanded' : ''}`}
                    onClick={() => toggle(index)}
                    onFocus={() => {
                        console.log('onFocus', index)
                        setExpand(index)
                    }}  // 处理焦点时的状态变化
                    key={index}
                    onBlur={() => {
                        setRotate(false)
                        setCurIndex(null)
                    }}
                >
                    <div style={{ marginRight: 8, marginLeft: 8 }} >{rectangle.icon}</div>
                    {/* 按钮内文字的变化 */}
                    <div className='rectangle-text'>{rectangle.text}</div>  
                    <CaretDownOutlined style={{ fontSize: 8, marginLeft: 8, marginRight: 8, transform: `rotate(${(rotate && curIndex === index) ? 180 : 0}deg)` }} />
                </Button>
            </Popover>
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