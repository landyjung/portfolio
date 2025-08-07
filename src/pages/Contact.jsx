import {headerNav, contactText } from "../contents/textdata";

function Contact(){
    return(
        <section id="contact">
            <div className="contact_inner">
                <h2 className="contact_title">Contact Me</h2>
                <div className="contact_content">
                    <div className="left_wrap">
                        <p>RE START. <br />NOT FIRST TIME</p>
                        <img src="/images/landy.jpg" alt="landyjung" />
                    </div>
                    <div className="right_wrap">
                        <ul className="menu_link">
                            {
                                headerNav.map((menu, idx)=>(
                                    <li key={idx}><a href={menu.url}>{menu.title}</a></li>
                                ))
                            }
                        </ul>
                        {
                            contactText.map((contact, idx)=>(
                            <div key={idx} className="contact_link">
                                <a href={contact.link} rel="noopenr noreferrer" target="_blank">
                                    {contact.title}
                                </a>
                            </div>
                            ))
                        }
                        <div className="icon_wrap">
                            <a href="#top"><img src="/images/icon_home.png" className="home" alt="icon_home" /></a>
                            <a href="#" target="_blank"><img src="/images/icon_insta.png" className="insta" alt="icon_insta" /></a>
                            <a href="mailto:landy76@naver.com"  target="_blank"><img src="/images/icon_mail.png" className="mail" alt="icon_mail" /></a>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
};

export default Contact;