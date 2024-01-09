import React from 'react';
import { Row, Col } from 'antd'; 
import '../css/image.css'
import _ from 'lodash';
import Good from '../images/good.jpg'
import View from '../images/view.jpg'

const photos = [
    { src: require('../photo/image1.webp'),title:'BMW M3 Competition',author:'Jack Schroeder', likes:161, views: '1.9千'},
    { src: require('../photo/image2.webp'),title: 'LOPE', author: 'Thai-Tu Nguyen', likes: 248, views: '2.1千' },
    { src: require('../photo/image3.webp'), title: 'Beignet Branding', author: 'Sviatiana Poliakh', likes: 773, views: '4.6千' },
    { src: require('../photo/image4.webp'), title: 'YANGCHEON FOUNDATION FOR ARTS AND CULTURE', author: 'maum studio', likes: 201, views: '1.9千' },
    { src: require('../photo/image5.webp'), title: 'PLAY PUBLIACATION 2023', author: 'Fonzy Nils', likes: 164, views: '1.8千' },
    { src: require('../photo/image6.webp'), title: 'Modan', author: 'More People', likes: 634, views: '8.9千' },
    { src: require('../photo/image7.webp'), title: 'Misc XXXVII', author: 'So Lazo', likes: 292, views: '2.4千' },
    { src: require('../photo/image8.webp'), title: 'Mikromusic', author: 'Marta Gawin', likes: 230, views: '2.3千' },
    { src: require('../photo/image9.webp'), title: 'Agra Seveb', author: 'Arsien Pilipcuk', likes: 120, views: '13.4' },
    { src: require('../photo/image10.webp'), title: 'a coffee brand design', author: 'More People', likes: 984, views: '12.2千' },
    { src: require('../photo/image11.webp'), title: '3D ALBUM ART & VISUALIZER OF ZIOR PARK ', author: 'More People', likes: 346, views: '3.2千' },
    { src: require('../photo/image12.webp'), title: 'KAIZEN ARCHI-Architecuture ', author: 'More People', likes: 545, views: '5.8千' },
    
    { src: require('../photo/image1.webp'), title: 'BMW M3 Competition', author: 'Jack Schroeder', likes: 161, views: '1.9千' },
    { src: require('../photo/image2.webp'), title: 'LOPE', author: 'Thai-Tu Nguyen', likes: 248, views: '2.1千' },
    { src: require('../photo/image3.webp'), title: 'Beignet Branding', author: 'Sviatiana Poliakh', likes: 773, views: '4.6千' },
    { src: require('../photo/image4.webp'), title: 'YANGCHEON FOUNDATION FOR ARTS AND CULTURE', author: 'maum studio', likes: 201, views: '1.9千' },
    { src: require('../photo/image5.webp'), title: 'PLAY PUBLIACATION 2023', author: 'Fonzy Nils', likes: 164, views: '1.8千' },
    { src: require('../photo/image6.webp'), title: 'Modan', author: 'More People', likes: 634, views: '8.9千' },
    { src: require('../photo/image7.webp'), title: 'Misc XXXVII', author: 'So Lazo', likes: 292, views: '2.4千' },
    { src: require('../photo/image8.webp'), title: 'Mikromusic', author: 'Marta Gawin', likes: 230, views: '2.3千' },
    { src: require('../photo/image9.webp'), title: 'Agra Seveb', author: 'Arsien Pilipcuk', likes: 120, views: '13.4' },
    { src: require('../photo/image10.webp'), title: 'a coffee brand design', author: 'More People', likes: 984, views: '12.2千' },
    { src: require('../photo/image11.webp'), title: '3D ALBUM ART & VISUALIZER OF ZIOR PARK ', author: 'More People', likes: 346, views: '3.2千' },
    { src: require('../photo/image12.webp'), title: 'KAIZEN ARCHI-Architecuture ', author: 'More People', likes: 545, views: '5.8千' },
];
const PhotoGallery = () => {
    return (
        <div style={{marginLeft:'15px',marginRight:'15px'}}>
            <Row gutter={[16, 16]}> 
                    {_.map(photos, (photo, index) => (
                        <Col span={6} key={index}>
                            <div >
                                <div className='image-container '>
                                    <img src={photo.src} alt={'这是图片'} style={{ width: '100%', borderRadius: '4px' }} />
                                </div>
        
                                <div className='layout'>
                                    <div className='title2' >{photo.title} </div>
                                    <div className='icons' > <img src={Good} alt='Good' style={{ height: '20px' }} />{photo.likes}</div>
                                    <div className='icons'> <img src={View} alt='View' style={{ height: '20px' }} />{photo.views}</div>
                                </div> 
                                <div className='author'>{photo.author}</div>
                            </div>
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default PhotoGallery;