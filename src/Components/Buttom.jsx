import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import '../css/buttom.css'
import Adobe from '../images/Adobe.jpg'
const Buttom =() =>{
    return (
        <>
                <div className='buttom'>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多&nbsp;&nbsp;Behance &nbsp;
                    <CaretDownOutlined style={{ fontSize: '8px' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Divider type="vertical" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中文（简体）
                    <CaretDownOutlined style={{ fontSize: '8px' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Divider type="vertical" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用条款 &nbsp;&nbsp;&nbsp;隐私 &nbsp;&nbsp;&nbsp;
                    社区 &nbsp;&nbsp;&nbsp;
                    帮助&nbsp;&nbsp;&nbsp; Cookie偏好设置 &nbsp;&nbsp;&nbsp;
                    不得出售或共享我的个人信息&nbsp;&nbsp;&nbsp;
                    <img src={Adobe} alt="adobe" style={{ width: 'auto', height: '30px', marginLeft: '660px' }} />

                </div>

       

        </>
    )
}

export default Buttom