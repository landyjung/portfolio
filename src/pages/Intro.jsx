import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { introText } from "../contents/textdata";


gsap.registerPlugin(TextPlugin);

function Intro() {
const titleRef = useRef(null);
const descriptionRef = useRef([]);

useEffect(() => {
    if (titleRef.current) {
    const spans = titleRef.current.querySelectorAll("span");

    spans.forEach((span, index) => {
        gsap.fromTo(
        span,
        {
            y: 100,
            opacity: 0,
        },
        {
            duration: 0.2,
            y: 0,
            opacity: 1,
            delay: index * 0.15,
            ease: "power2.out",
        }
        );
    });
    }

    descriptionRef.current.forEach((el, index) => {
    gsap.to(el, {
        duration: 2,
        text: introText.description[index],
        delay: 1 + index * 2.0,
        ease: "none",
    });
    });
}, []);

const bgImages = [
    '/images/intro_bg1.jpg',
    '/images/intro_bg2.jpg',
    '/images/intro_bg3.jpg',
    '/images/intro_bg4.jpg',
    '/images/intro_bg5.jpg',
    '/images/intro_bg6.jpg',
    '/images/intro_bg7.jpg',
    '/images/intro_bg8.jpg',
    '/images/intro_bg9.jpg',
    '/images/intro_bg10.jpg',
  ];

  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    setBgImage(bgImages[randomIndex]);
  }, []);

return (
    <section id="intro">
        <div className="intro_inner">
            <h2 className="intro_title" ref={titleRef}>
                {introText.title.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{
                            display: "inline-block",
                            minWidth: "10px",
                        }}
                    >
                    {char}
                    </span>
                ))}
            </h2>
            <div className="intro_text" style={{
                background: `url(${bgImage}) no-repeat center center`, 
                backgroundSize:'cover'
            }}>
                <div className="text">
                    {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        ref={(el) => (descriptionRef.current[i] = el)}
                    ></div>
                    ))}
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    </section>
);
}

export default Intro;
