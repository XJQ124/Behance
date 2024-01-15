import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import '../css/buttom.css'
import Adobe from '../images/Adobe.jpg'
const Buttom =() =>{
    return (
        <>
                <div className='buttom'>
                <div style={{ marginLeft: 20}} className='interval'>更多</div>
                <div>Behance </div>
                <div className='interval'>
                    <CaretDownOutlined style={{ fontSize: 8 }} /> <Divider type="vertical" /> 中文（简体）
                    <CaretDownOutlined style={{ fontSize: 8 }} />   <Divider type="vertical" />
                </div>
                   
                <div className='interval'>
                    使用条款
                    </div>
                <div className='interval'>
                    隐私 
                    </div>
                <div className='interval'>
                     社区 
                    </div>
                <div className='interval'>
                    帮助 
                    </div>
                <div className='interval'>  
                    Cookie偏好设置 
                    </div>
                <div className='interval'>  
                    不得出售或共享我的个人信息
                    </div>
                    <img src={Adobe} alt="adobe" style={{ width: 'auto', height: 30, marginLeft: 600 }} />
                </div>
        </>
    )
}

export default Buttom