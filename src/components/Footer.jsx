import { headerNav, contactText, footerIcon } from "../contents/textdata";


function Footer(){
    return(
        <footer id="footer">
            <div className="footer_inner">
                
                <div className="copy">
                    This site was built with React Vite. &copy; <span>Landy Jung</span> reserved.
                </div>
               
            </div>
        </footer>
    )
};

export default Footer;