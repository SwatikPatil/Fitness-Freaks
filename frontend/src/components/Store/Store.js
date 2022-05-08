import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import Card from './card/Card'
import Styles from './Store.module.css'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineShop } from 'react-icons/ai'
import { BiHome } from 'react-icons/bi'
import pic from '../../images/temp/temp.png'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Store = () => {
    const [items, setItems] = useState();
    useEffect(() => {
        setItems([
            {

                img: pic,
                name: "Nike Airmax 90 SE",
                type: "Men's Shoe",
                ctn: "2 Colours",
                price: "₹11,495",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/71g4bpjEfwL._SL1500_.jpg",
                type: "Dumbbell",
                name: "REEBOK Dumbbell",
                ctn: "1,blue color",
                price: "₹1,142",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/51JXwLZajeL._SL1000_.jpg",
                type: "Resistance fitness",
                name: "Adidas Resistance Tube",
                ctn: "1,black",
                price: "₹988.0",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/61lwp0va8lL._SL1500_.jpg",
                name: "Oddish non slip yoga mat",
                type: "yoga mat",
                ctn: "2 Colours",
                price: "₹1,499",
            },
            {
                img: "https://image.freepik.com/free-vector/wake-up-work-out-look-hot-kick-ass-with-shaker_93150-1068.jpg",
                name: "Nike AC4081 Hyperfuel water bottle",
                type: "Water bottel",
                ctn: "1 Colours",
                price: "₹990.0",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/71aCaN1wAwL._UL1500_.jpg",
                name: "Nike Women’s react miler running shoes",
                type: "Women’s Shoe",
                ctn: "1 Colours",
                price: "₹10,995",
            },
            {
                img: "https://image.freepik.com/free-vector/bathroom-towels-pile-flat-colorful-illustration_198278-5377.jpg",
                name: " JOCKEY Cotton 450 GSM Face Towel Set  (Pack of 3) ",
                type: "Gym towel",
                ctn: "5 Colours",
                price: "₹199",
            },
            {
                img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/077750/01/fv/fnd/IND/fmt/png",
                name: "One8Gym bag",
                type: "Duffel Bag",
                ctn: "1 Colours",
                price: "₹519",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/71Cw%2BUpeo0L._SL1500_.jpg",
                name: "Boldfit skipping Rope",
                type: "Skipping rope",
                ctn: "1 Colours",
                price: "₹699.0",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/612LZNH%2BaoL._SL1200_.jpg",
                name: " Chocolate",
                type: "Protein Powder ",
                ctn: "3 Flavour",
                price: "₹2,400",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/71J--TV099L._SL1500_.jpg",
                name: "Ayurvedic Herbs",
                type: "Nutrition Powder",
                ctn: "3 Flavour",
                price: "₹2,499",
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/51hNx0Seb3L._SL1000_.jpg",
                name: "Plain strips black",
                type: "Weighing Scale",
                ctn: "1 Colours",
                price: "₹1,199 ",
            },

        ])
    }, [])


    return (
        <div className={Styles.majorContainer}>
            <Navbar />
            <div className={Styles.main}>
                <div className={Styles.header}>
                    <div className={Styles.searchbox}>
                        <AiOutlineSearch />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className={Styles.cartbox}>
                        <AiOutlineShoppingCart />
                    </div>
                    <div className={Styles.cartbox1}>
                        <FontAwesomeIcon icon={faSlidersH} />
                    </div>
                </div>
                <div className={Styles.header1}>
                    <ul>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                        >
                            <h3>Shoes</h3>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                        >
                            <h3>Sport Utilities</h3>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                        >
                            <h3>Gym Equipments</h3>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                        >
                            <h3>Diet Supplements</h3>
                        </motion.li>
                    </ul>

                </div>
                <div className={Styles.content}>
                    {
                        items &&
                        items.map((item, index) =>
                            <div className={Styles.cardCtn} key={index}>
                                <Link className={Styles.link} to="/shopproduct"><Card item={item} /></Link>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={Styles.navBarPhn}>
                <div className={Styles.iconCtn}>
                    <BiHome />
                </div>
                <div className={Styles.iconCtn}>
                    <AiOutlineShop />
                </div>
                <div className={Styles.iconCtn}>
                    <AiOutlineShoppingCart />
                </div>
            </div>
        </div>
    )
}

export default Store;