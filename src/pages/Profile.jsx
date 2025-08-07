import { useRef, useEffect } from "react";
import { profileText } from "../contents/textdata";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Profile() {
    const baseRefs = useRef([]);

    useEffect(() => {
        baseRefs.current.forEach((el, index) => {
            if (!el) return;
            const directions = [
                { x: 200, y: 0 },   // 1루
                { x: 0, y: -100 },  // 2루
                { x: -100, y: 0 },  // 3루
            ];

            const dir = directions[index] || { x: 0, y: 0 };

            gsap.fromTo(el,
                { x: dir.x, y: dir.y, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: .5,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        });
    }, []);

    return (
        <section id="profile">
            <div className="profile_inner">
                <h2 className="profile_title">
                    About Me 
                </h2>
                <div className="profile_desc">
                    {
                        profileText.slice(0, 3).map((about, index) => (
                        <div
                            key={index} ref={(el) => (baseRefs.current[index] = el)}
                            className={`base base${index + 1}`}
                        >
                            <div className="text_wrap">
                                <span className="num">{index + 1}</span>
                                <h3>{about.title}</h3>
                                <p>
                                    {typeof about.description === "string"
                                        ? about.description.split("\n").map((line, i) => (
                                            <span key={i} className="description">
                                                {line}
                                                <br />
                                            </span>
                                        ))
                                        : <span className="description">{about.description}</span>}
                                </p>
                            </div>
                            <div className="img_wrap">
                                {
                                    about.img.map((src, idx) => (
                                    <img key={idx} src={src} alt={`img-${idx}`} />
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Profile
