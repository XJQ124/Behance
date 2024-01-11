import TitleImage from '../images/title.jpg';
import NoteImage from '../images/notifications.jpg';
import Color from '../images/color.jpg'
import Adobe from '../images/Adobe.jpg'
import '../css/title.css'
import { Tabs, Button, Input } from 'antd';
import { SearchOutlined, CaretDownOutlined, RocketOutlined, ToolOutlined, RadarChartOutlined, HomeOutlined, ShopOutlined, BarChartOutlined, TeamOutlined } from '@ant-design/icons';


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
  
    return(
        <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <img src={TitleImage} alt="title" className='title' />

                <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ marginTop: '3px', marginLeft: '20px' }} />

                <img src={NoteImage} alt='note' className='note' style={{marginLeft:'570px'}}/>

                <Button shape='round' style={{ color: '#1356f9'}} className='button'>登录</Button>
                <Button type="primary" shape="round" className='button'>注册</Button>

                <span className='vertical-Line' style={{marginTop:'15px',marginLeft:'20px'}}/>

                <Button shape='round' className='button'>
                    <img src={Color} alt="color" style={{ width: '25px', height: '25px' }} />
                    免费试用
                </Button>
                <img src={Adobe} alt="adobe" style={{ width: 'auto', height: '40px' }} className='button' />
        </div>
                <Input addonBefore={<SearchOutlined />} addonAfter={
                    <>
                        <Button shape='round' type="text" className='roundButton' style={{marginRight:'10px'}}>项目</Button>
                        <Button shape='round' type="text" className='otherButton' style={{ marginRight: '10px' }} >资源</Button>
                        <Button shape='round' type="text" className='otherButton' style={{ marginRight: '10px' }} >图像</Button>
                        <Button shape='round' type="text" className='otherButton' style={{ marginRight: '10px' }} >人物</Button>
                        <Button shape='round' type="text" className='otherButton' style={{ marginRight: '10px' }} >原型</Button>
                        <Button shape='round' type="text" className='otherButton' style={{ marginRight: '10px' }} >直播</Button>
                        <Button shape='round' type="text" className='otherButton' style={{ marginRight: '10px' }} >情绪板</Button>
                    </>
                } placeholder="探索工作中的创意世界" style={{ width: '1405px', height: '40px', marginLeft: '15px'}}  size='large'/>

            <div className='outer'>

            <div className='rectangle-container' style={{marginTop:'25px',marginBottom:'25px',marginLeft:'15px'}}>
                <div className='rectangle' >
                    <RocketOutlined style={{marginRight:'8px'}} /> 创意领域<CaretDownOutlined style={{ fontSize: '8px',marginLeft:'8px' }} />
                </div>
                <div className='rectangle-other' >
                        <ToolOutlined style={{ marginRight: '8px' }} />工具<CaretDownOutlined style={{ fontSize: '8px', marginLeft: '8px' }} />
                </div>
                <div className='rectangle-other' >
                        <RadarChartOutlined style={{ marginRight: '8px' }} />颜色<CaretDownOutlined style={{ fontSize: '8px', marginLeft: '8px' }} />
                </div>
                <div className='rectangle-other' >
                        <HomeOutlined style={{ marginRight: '8px' }} />位置<CaretDownOutlined style={{ fontSize: '8px', marginLeft: '8px' }} />
                </div>
                <div className='rectangle-other' >
                        <ShopOutlined style={{ marginRight: '8px' }} />学校<CaretDownOutlined style={{ fontSize: '8px', marginLeft: '8px' }} />
                </div>
                <div className='rectangle-other' >
                        <BarChartOutlined style={{ marginRight: '8px' }} />资源<CaretDownOutlined style={{ fontSize: '8px', marginLeft: '8px' }} />
                </div>
                <div className='rectangle-other' >
                        <TeamOutlined style={{ marginRight: '8px' }} /> 订阅<CaretDownOutlined style={{ fontSize: '8px', marginLeft: '8px' }} /> 
                </div>
            </div>


                <div style={{ marginTop: '25px', marginBottom: '25px',marginRight:'50px'}}>
                    
                <div style={{fontSize:'10px'}}>
                  分类 
                </div>
                    <div style={{ fontSize: '14px' }}>
                    推荐&nbsp;&nbsp;<CaretDownOutlined style={{ fontSize: '8px'}} />
                </div>
            </div>

            </div>

        </>
    )
}

export default Navigation