import React from 'react';
import classes from './Book.module.css';
import BookImg from '../../Img/addbook.png';
import IntroImg from '../../Img/intro.svg';
import AuthorImg from '../../Img/ulugbek.png';
import Arrow from '../../Img/arrow.png';

export default function BooksPage(){
    return (
        <div id={classes.BooksPageBody}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <h1 style={{color: '#C9AC8C'}}>Badiiyat</h1>
                </div>
                <ul>
                    <li><a href="#">Bosh Sahifa</a></li>
                    <li><a href="#">Nasr</a></li>
                    <li><a href="#">Nazm</a></li>
                    <li><a href="#">Maqolalar</a></li>
                    <li><a href="#">Forum</a></li>
                </ul>
                <div id={classes.author}>
                    <img src={AuthorImg} alt="authorImg" />
                    <img style={{width: '12px', height: '10px', marginLeft: '3px'}} src={Arrow} alt="arrow" />
                </div>
            </div>
            <div id={classes.intro}>
                <div className={classes.intro_background}>
                </div>
                <div id={classes.search_sec}>
                    <h1 style={{color: '#C9AC8C'}}>Qidirish</h1>
                    <div>
                        <input className={classes.search_input} type="text" name="search" placeholder="Adiblar, kitoblar, audiolar, maqolalar"/>
                        <button className={classes.submit_btn} type="submit">Izlash</button>
                    </div>
                </div>
            </div>
            <div id={classes.body}>
                <h1 style={{color: '#C9AC8C'}}>Asosiy Kategoriyalar</h1>
                <ul>
                    <li><a className={classes.active_section} href="#">Temuriylar Davri</a></li>
                    <li><a href="#">Jadid adabiyoti</a></li>
                    <li><a href="#">Sovet Davri</a></li>
                    <li><a href="#">Mustaqillik Davri</a></li>
                </ul>
                <div id={classes.books_wrapper}>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className={classes.book_item}>
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className={classes.like}>♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}