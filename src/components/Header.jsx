import { useState } from "react";
import { headerNav } from "../contents/textdata";
import { gsap } from "gsap";

function startAnimations() {
    gsap.utils.toArray(".ball span").forEach((el, i) => {
        gsap.fromTo(el, 
            { opacity: 0.2 }, 
            { 
                opacity: 1, 
                duration: 0.5, 
                repeat: -1, 
                yoyo: true,
                ease: "power1.inOut",
                delay: i * 0.2,
                overwrite: "auto"
            }
        );
    });

    gsap.utils.toArray(".strike span").forEach((el, i) => {
        gsap.fromTo(el, 
            { opacity: 0.2 }, 
            { 
                opacity: 1, 
                duration: 0.7, 
                repeat: -1, 
                yoyo: true,
                ease: "power1.inOut",
                delay: i * 0.3,
                overwrite: "auto"
            }
        );
    });

    gsap.utils.toArray(".out span").forEach((el, i) => {
        gsap.fromTo(el, 
            { opacity: 0.2 }, 
            { 
                opacity: 1, 
                duration: 0.5, 
                repeat: -1, 
                yoyo: true,
                ease: "power1.inOut",
                delay: i * 0.4,
                overwrite: "auto"
            }
        );
    });
}

window.addEventListener("load", () => {
    startAnimations();
});


function Header(){
    const [show, setShow] = useState(false);
    const toggleMenu =()=>{
        setShow((prevShow)=>!prevShow);
    }
    return(
        <header id="header" className="top">
            <div className="header_inner">
                <h1 className="header_logo"><a href="/">re start. not first time</a></h1>
                <nav className="header_nav">
                    <ul>
                    {
                        headerNav.map((menu, idx)=>(
                            <li key={idx}><a href={menu.url}>{menu.title}</a></li>
                        ))
                    }
                    </ul>
                </nav>
                <div className="nav_mobile" id="toggle_menu">
                    <button className="toggle_btn" onClick={()=>{toggleMenu()}}>
                        toggle
                    </button>
                    {
                        show && (
                            <nav className="header_nav">
                                <ul>
                                {
                                    headerNav.map((menu, idx)=>(
                                        <li key={idx}><Link to={menu.url}>{menu.title}</Link></li>
                                    ))
                                }
                                </ul>
                            </nav>
                        )
                    }
                </div>
                <div className="count_board">
                    <div>
                        <p className="ball"><span>●</span><span>●</span><span>●</span></p>
                        <p className="strike"><span>●</span><span>●</span></p>
                        <p className="out"><span>●</span><span>●</span></p>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;