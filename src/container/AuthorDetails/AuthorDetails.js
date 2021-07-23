import React from 'react';
import {NavLink } from 'react-router-dom';
import AuthorImg from '../../Img/author.png';
import BookImg from '../../Img/book_cover.png';
import Starred from '../../Img/star.png';
import Arrow from '../../Img/arrow.png';
import Bookmark from '../../Img/bookmark.png';
import classes from './AuthorDetails.module.css'

export default function AuthorDetails(){
    return (
        <div className={classes.AuthorDetailsBody}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <h1 style={{color: '#C9AC8C'}}>Badiiyat</h1>
                </div>
                <ul>
                    <NavLink exact to='./'>Bosh Sahifa</NavLink>
                    <NavLink exact to='./'>Nasr</NavLink>
                    <NavLink exact to='./'>Nazm</NavLink>
                    <NavLink exact to='./'>Maqolalar</NavLink>
                    <NavLink exact to='./'>Forum</NavLink>
                </ul>
                <div id={classes.author}>
                    <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src={AuthorImg} alt="authorImg" />
                    <img style={{width: '12px', height: '10px', marginLeft: '3px'}} src={Arrow} alt="arrow" />
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.AuthorDetails}>
                    <div className={classes.AuthorPic}>
                        <img src={AuthorImg} alt="authorImg" />
                        <div className={classes.AuthorBirthInfo}>
                            <div>
                                <p>Tavallud sanasi</p>
                                <h1>5-AVG 1941</h1>
                                <p>Toshkent, Uzbekistan</p>
                            </div>
                            <div>
                                <h1>-</h1>
                            </div>
                            <div>
                                <p>Dafn sanasi</p>
                                <h1>24-MAY 2013</h1>
                                <p>Toshkent, Uzbekistan</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.AuthorInfo}>
                        <div className={classes.AuthorInfoWrapper1}>
                            <h1>O'tkir Hoshimov</h1>
                            <p>Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor)
                                tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta 
                                boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning 
                                jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan
                                1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida 
                                xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” 
                                gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri 
                                (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir
                                oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga 
                                bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy
                                Majlisining Matbuot va axborot qoʻmitasi raisi
                                lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.
                            </p>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <img style={{marginRight: '10px'}} src={Bookmark} alt="bookmark" />
                                <h3>Ijodi</h3>
                            </div>
                            <p style={{margin:'0 0px 0px 30px'}}>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami 
                                tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat 
                                keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.
                            </p>
                        </div>
                        <div className={classes.AuthorInfoWrapper2}>
                            <div className={classes.AuthorInfoWrapper2_item}>
                                <h1>Asarlari</h1>
                                <p>Barchasini Ko'rish</p>
                            </div>
                            <div className={classes.AuthorsBook}>
                                <div className={classes.book_item}>
                                    <img src={BookImg} alt="BookImg"/>
                                    <div>
                                        <h2>Ikki Eshik Orasida</h2>
                                        <p><img style={{width: '10px',height:'10px'}} src={Starred} alt="star" /> 4,3 - 2340 ta fikrlar</p>
                                    </div>
                                </div>
                                <div className={classes.book_item}>
                                    <img src={BookImg} alt="BookImg"/>
                                    <div>
                                        <h2>Ikki Eshik Orasida</h2>
                                        <p><img style={{width: '10px',height:'10px'}} src={Starred} alt="star" /> 4,3 - 2340 ta fikrlar</p>
                                    </div>
                                </div>
                                <div className={classes.book_item}>
                                    <img src={BookImg} alt="BookImg"/>
                                    <div>
                                        <h2>Ikki Eshik Orasida</h2>
                                        <p><img style={{width: '10px',height:'10px'}} src={Starred} alt="star" /> 4,3 - 2340 ta fikrlar</p>
                                    </div>
                                </div>
                                <div className={classes.book_item}>
                                    <img src={BookImg} alt="BookImg"/>
                                    <div>
                                        <h2>Ikki Eshik Orasida</h2>
                                        <p><img style={{width: '10px',height:'10px'}} src={Starred} alt="star" /> 4,3 - 2340 ta fikrlar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}