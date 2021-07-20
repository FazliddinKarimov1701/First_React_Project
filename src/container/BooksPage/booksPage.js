import React from 'react';
import './Book.css';
import BookImg from '../../Img/addbook.png';
import IntroImg from '../../Img/intro.svg';
import AuthorImg from '../../Img/ulugbek.png';

export default function BooksPage(){
    return (
        <div id="BooksPageBody">
            <div className="header">
                <div className="logo">
                    <h1 style={{color: '#C9AC8C'}}>Badiiyat</h1>
                </div>
                <ul>
                    <li><a href="#">Bosh Sahifa</a></li>
                    <li><a href="#">Nasr</a></li>
                    <li><a href="#">Nazm</a></li>
                    <li><a href="#">Maqolalar</a></li>
                    <li><a href="#">Forum</a></li>
                </ul>
                <div id="author">
                    <img src={AuthorImg} alt="authorImg" />
                    <p>↓</p>
                </div>
            </div>
            <div id="intro">
                <div className="intro_background">
                </div>
                <div id="search_sec">
                    <h1 style={{color: '#C9AC8C'}}>Qidirish</h1>
                    <div>
                        <input className="search_input" type="text" name="search" placeholder="Adiblar, kitoblar, audiolar, maqolalar"/>
                        <button className="submit_btn" type="submit">Izlash</button>
                    </div>
                </div>
            </div>
            <div id="body">
                <h1 style={{color: '#C9AC8C'}}>Asosiy Kategoriyalar</h1>
                <ul>
                    <li><a className="active_section" href="#">Temuriylar Davri</a></li>
                    <li><a href="#">Jadid adabiyoti</a></li>
                    <li><a href="#">Sovet Davri</a></li>
                    <li><a href="#">Mustaqillik Davri</a></li>
                </ul>
                <div id="books_wrapper">
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                    <div className="book-item">
                        <img src={BookImg} alt="BookImg"/>
                        <div>
                            <h2>Ikki Eshik Orasida</h2>
                            <p>O'tkir Hoshimov</p>
                            <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}