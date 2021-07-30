import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dashboard.module.css';
import AuthorImg from '../../Img/ulugbek.png';
import UserImg from '../../Img/user.jpg'
import Starred from '../../Img/starred.svg';
import Arrow from '../../Img/arrow.png';
import BoxMenu from '../../Img/box_menu.png';
import RefreshImg from '../../Img/refresh.png';
import TrackLine from '../../Img/track_line.png';
import Track from '../../Img/track.png';
import BookImg from '../../Img/book_cover.png';
import PlayBtn from '../../Img/play.png';
import PrevBtn from '../../Img/prev.png';
import NextBtn from '../../Img/next.png';
import Volume from '../../Img/volume.svg';
import Menu from '../../Img/menu.png';
import Progress from '../../Img/Progress.svg'

export default function Dashboard(){
    return (
        <div className={classes.DashboardBody}>
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
                <div style={{display:'flex',alignItems:'center'}} id={classes.author}>
                    <img style={{width: '40px',height:'40px',borderRadius:'50%'}} src={AuthorImg} alt="authorImg" />
                    <img style={{width: '12px', height: '10px', marginLeft: '3px'}} src={Arrow} alt="arrow" />
                </div>
            </div>
            <div className={classes.UserInfo}>
                <div className={classes.UserInfoFirstChild}>
                    <div className={classes.UserImgCover}>
                        <img className={classes.User_Img} src={UserImg} alt="userImg" />
                        <img className={classes.UserLevel} src={Starred} alt="star" />
                    </div>
                    <div className={classes.UserLevelInfo}>
                        <h3>Oddiy Kitobxon</h3>
                        <p>1  tayam kitob o'qimagan</p>
                    </div>
                </div>
                <div className={classes.UserInfoSecondChild}>
                    <h2>Hosilbek  Jumanov</h2>
                    <p><span>Tavallud:</span> Fevral 31, 3002</p>
                    <p><span>Manzil: </span>Yupiter 1230AF Dom</p>
                    <p><span>Bio: </span>Matematikadan bawqasini bilmedi</p>
                </div>
            </div>
            <div className={classes.UserBook}>
                <div className={classes.LeftSection}>
                    <div className={classes.BookStatus}>
                        <div className={classes.BookStatusMenu}>
                            <h3>Hozir O'qilmoqda</h3>
                            <img src={BoxMenu} alt="boxmenu" />
                        </div>
                        <div className={classes.BookStatusBooks}>
                            <div className={classes.BookStatusBooksItem}>
                                <div>
                                    <img className={classes.BookStatusImg} src={BookImg} alt="bookimg" />
                                </div>
                                <div>
                                    <h5>Ikki Eshik Orasida</h5>
                                    <img className={classes.ProgressImg} src={Progress} alt="progress" />
                                </div>
                                <div>
                                    <p>96%</p>
                                    <button>Yangilash <img src={RefreshImg} alt="refresh" /></button>
                                </div>
                            </div>
                            <div className={classes.BookStatusBooksItem}>
                                <div>
                                    <img className={classes.BookStatusImg} src={BookImg} alt="bookimg" />
                                </div>
                                <div>
                                    <h5>Ikki Eshik Orasida</h5>
                                    <img className={classes.ProgressImg} src={Progress} alt="progress" />
                                </div>
                                <div>
                                    <p>96%</p>
                                    <button>Yangilash <img src={RefreshImg} alt="refresh" /></button>
                                </div>
                            </div>
                            <div className={classes.BookStatusBooksItem}>
                                <div>
                                    <img className={classes.BookStatusImg} src={BookImg} alt="bookimg" />
                                </div>
                                <div>
                                    <h5>Ikki Eshik Orasida</h5>
                                    <img className={classes.ProgressImg} src={Progress} alt="progress" />
                                </div>
                                <div>
                                    <p>96%</p>
                                    <button>Yangilash <img src={RefreshImg} alt="refresh" /></button>
                                </div>
                            </div>
                            <div className={classes.BookStatusBooksItem}>
                                <div>
                                    <img className={classes.BookStatusImg} src={BookImg} alt="bookimg" />
                                </div>
                                <div>
                                    <h5>Ikki Eshik Orasida</h5>
                                    <img className={classes.ProgressImg} src={Progress} alt="progress" />
                                </div>
                                <div>
                                    <p>96%</p>
                                    <button>Yangilash <img src={RefreshImg} alt="refresh" /></button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.BookStatusButton}>
                            <button>Barchasini Ko'rish</button>
                        </div>
                    </div>
                    <div className={classes.AudioBook}>
                        <h3>Audio Kitob</h3>
                        <div className={classes.AudioBookImg}>
                            <img src={BookImg} alt="bookimg" />
                            <img style={{width : '70px'}} src={BookImg} alt="bookimg" />
                            <img src={BookImg} alt="bookimg" />
                        </div>
                        <div className={classes.AudioBookConfiguration}>
                            <h5>Dunyoning Ishlari 5-track</h5>
                            <p>O'tkir Hoshimov</p>
                            <img src={TrackLine} alt="track line" />
                            <img src={Track} alt="track" />
                            <div className={classes.TrackConfiguration}>
                                <img src={Menu} alt="menu" />
                                <img src={PrevBtn} alt="prev btn" />
                                <img className={classes.PlayBtn} src={PlayBtn} alt="play btn" />
                                <img src={NextBtn} alt="next btn" />
                                <img src={Volume} alt="volume" />
                            </div>
                        </div>
                        <div className={classes.Tracks}>
                            <div className={classes.TracksItem}>
                                <img src={BookImg} alt="book img" />
                                <div className={classes.TracksItemTitle}>
                                    <h5>Dunyoning Ishlari 5-track</h5>
                                    <p>O'tkir Hoshimov</p>
                                </div>
                                <p>02:22:18</p>
                            </div>
                            <div className={classes.TracksItem}>
                                <img src={BookImg} alt="book img" />
                                <div className={classes.TracksItemTitle}>
                                    <h5>Dunyoning Ishlari 5-track</h5>
                                    <p>O'tkir Hoshimov</p>
                                </div>
                                <p>02:22:18</p>
                            </div>
                            <div className={classes.TracksItem}>
                                <img src={BookImg} alt="book img" />
                                <div className={classes.TracksItemTitle}>
                                    <h5>Dunyoning Ishlari 5-track</h5>
                                    <p>O'tkir Hoshimov</p>
                                </div>
                                <p>02:22:18</p>
                            </div>
                            <div className={classes.TracksItem}>
                                <img src={BookImg} alt="book img" />
                                <div className={classes.TracksItemTitle}>
                                    <h5>Dunyoning Ishlari 5-track</h5>
                                    <p>O'tkir Hoshimov</p>
                                </div>
                                <p>02:22:18</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.RightSection}>
                    <ul>
                        <NavLink exact to='./'>O'qilganlar</NavLink>
                        <NavLink exact to='./'>O'qishni hohlayman</NavLink>
                        <NavLink exact to='./'>O'qilmoqda</NavLink>
                        <NavLink exact to='./'>Adiblar</NavLink>
                    </ul>
                    <div id={classes.books_wrapper}>
                        <div className={classes.book_item}>
                            <img src={BookImg} alt="BookImg" />
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
        </div>
    )
}