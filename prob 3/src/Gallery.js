import React,{useState} from 'react';
import './gallery.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';

const Gallery = () => {
    let data = [
        {
            id : 1,
            imgSrc : Img1,
        },
        {
            id : 2,
            imgSrc : Img2,
        },
        {
            id : 3,
            imgSrc : Img3,
        },
        {
            id : 4,
            imgSrc : Img4,
        },
        {
            id : 5,
            imgSrc : Img5,
        },
        {
            id : 6,
            imgSrc : Img6,
        },
    ]

    const[model,setModel] = useState(false);
    const[tempImgSrc,setTempImgSrc]=useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className={model?"model open" : "model"}>
                <img Src = {tempImgSrc}/>
                    <HighlightOffIcon onClick={() => setModel(false)}/>
            </div>
            <div className="gallery">
                {data.map((item,index) => {
                    return(
                        <div className="pics" key={index} onClick = {()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width:'100%'}}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Gallery;