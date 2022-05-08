import React, { useState } from 'react'
import Styles from './Product.module.css'
import Navbar from '../../NavBar/Navbar'
import pic from '../../../images/temp/temp2.png'
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import { AiFillHeart } from 'react-icons/ai'



const Product = () => {

    const [pics, setPics] = useState(
        [
            pic,
            pic,
            pic,
            pic,
            pic,
        ]
    )



    return (
        <div className={Styles.majorContainer}>
            <Navbar />
            <div className={Styles.main}>
                <div className={Styles.header}>
                    <h3>Product View</h3>
                </div>
                <div className={Styles.content}>
                    <div className={Styles.img}>
                        <div className={Styles.CarouselCtn}>
                            <Slider>
                                {
                                    pics &&
                                    pics.map(pic =>
                                        <div className={Styles.imgCar}>
                                            <img src={pic} />
                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className={Styles.details}>
                        <div className={Styles.p1}>
                            <div className={Styles.p1p1}>
                                <h2>Nike Airmax 90 SE</h2>
                                <h3>Men's Shoe</h3>
                                <h4>2 Colours</h4>
                            </div>
                            <div className={Styles.p1p2}>
                                <h3><AiFillHeart /></h3>
                                <h4>₹11,495</h4>
                            </div>
                        </div>
                        <div className={Styles.p2}>
                            <h3>
                                Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 SE stays true to its OG roots while taking a fresh step forwards.
                            </h3>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;