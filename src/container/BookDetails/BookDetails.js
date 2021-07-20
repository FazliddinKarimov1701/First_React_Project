import React from 'react';
import {} from './BookDetails.css';
import BookImg from '../../Img/addbook.png';
import AuthorImg from '../../Img/ulugbek.png';
import AudioBook from '../../Img/audio.png';
import Ebook from '../../Img/eversion.png';
import PaperBook from '../../Img/book.png';
import Starred from '../../Img/star.png';
import Share from '../../Img/share.png';
import BookCover from '../../Img/book_cover.png';
import Heart from '../../Img/heart.png';

export default function BookDetails(){
    return (
        <div id="BookDetailsBody">
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
            <div className="body">
                <div className="BookDetails">
                    <div className="BookPic">
                        <img src={BookCover} alt="bookimg" />
                    </div>
                    <div className="BookInfo">
                        <div className="BookInfoWrapper1">
                            <h1>Qo'rqma</h1>
                            <h2>Javlon Joliyev | <img src={Starred} alt="star" /> 45</h2>
                            <p>Sahifalar Soni : <span>345</span></p>
                            <p>Chop Etilgan : <span>2021</span></p>
                            <p>Janri : <span>Tarixiy</span></p>
                            <p>Nashriyot : <span>Nihol Nashr</span></p>
                        </div>
                        <div className="BookInfoWrapper2">
                            <h3>To'liq Malumot ↓</h3>
                            <p>Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи 
                                томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.
                            </p>
                            <p>
                                Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар 
                                тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис 
                                қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг 
                                бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар
                                сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  
                                Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги
                                ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
                            </p>
                            <div>
                                <h3>Mavjud Formatlar</h3>
                                <div className="Formats">
                                    <div className="Formats-Item">
                                        <img src={PaperBook} alt="Paperbook" />
                                        <span>Qog'oz Kitob</span>
                                        <p>27000 so'm</p>
                                    </div>
                                    <div className="Formats-Item">
                                        <img src={AudioBook} alt="Audiobook" />
                                        <span>Audiokitob</span>
                                        <p>6.23 soat</p>
                                    </div>
                                    <div className="Formats-Item">
                                        <img src={Ebook} alt="Ebook" />
                                        <span>Elektron</span>
                                        <p>pdf, epub</p>
                                    </div>
                                    <button>Javonga Qo'shish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comments-section">
                    <ul className="comment-menu">
                        <li><a href="#">Muallif Haqida</a></li>
                        <li><a href="#" className='active-comment-menu'>Kitobdan Iqtiboslar</a></li>
                        <li><a href="#">Kitobxonlar Taqrizi</a></li>
                    </ul>
                    <div className="comments">
                        <div>
                            <blockquote></blockquote>
                            <p>Inson bolasi ne kunlarni ko‘rmaydi?!
                                Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                                Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                            </p>
                            <div>
                                <img src={Heart} alt="Like" />
                                <img src={Share} alt="Share" />
                            </div>
                        </div>
                        <div>
                            <blockquote></blockquote>
                            <p>Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq
                                tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
                            </p>
                            <div>
                                <img src={Heart} alt="Like" />
                                <img src={Share} alt="Share" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommendation">
                    <ul>
                        <li><a style={{color: '#d4b696'}} href="#">Sizga yoqishi mumkin</a></li>
                        <li><a href="#">Barchasini Ko'rish</a></li>   
                    </ul>    
                    <div className="recommended-books">
                        <div className="recommended-books-item">
                            <img src={BookImg} alt="BookImg"/>
                            <div>
                                <h2>Ikki Eshik Orasida</h2>
                                <p>O'tkir Hoshimov</p>
                                <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                            </div>
                        </div>
                        <div className="recommended-books-item">
                            <img src={BookImg} alt="BookImg"/>
                            <div>
                                <h2>Ikki Eshik Orasida</h2>
                                <p>O'tkir Hoshimov</p>
                                <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                            </div>
                        </div>
                        <div className="recommended-books-item">
                            <img src={BookImg} alt="BookImg"/>
                            <div>
                                <h2>Ikki Eshik Orasida</h2>
                                <p>O'tkir Hoshimov</p>
                                <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                            </div>
                        </div>
                        <div className="recommended-books-item">
                            <img src={BookImg} alt="BookImg"/>
                            <div>
                                <h2>Ikki Eshik Orasida</h2>
                                <p>O'tkir Hoshimov</p>
                                <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                            </div>
                        </div>
                        <div className="recommended-books-item">
                            <img src={BookImg} alt="BookImg"/>
                            <div>
                                <h2>Ikki Eshik Orasida</h2>
                                <p>O'tkir Hoshimov</p>
                                <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                            </div>
                        </div>
                        <div className="recommended-books-item">
                            <img src={BookImg} alt="BookImg"/>
                            <div>
                                <h2>Ikki Eshik Orasida</h2>
                                <p>O'tkir Hoshimov</p>
                                <p><b className="like">♥</b> 4,3 - 2340 ta fikrlar</p>
                            </div>
                        </div>
                        <div className="recommended-books-item">
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
        </div>
    )
}