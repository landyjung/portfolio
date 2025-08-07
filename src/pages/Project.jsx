import { useEffect, useRef } from "react";
import { projectText } from "../contents/textdata";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Project(){
    const horizontalRef= useRef(null);
    const sectionRef=useRef([]);
    const numberRef = useRef([]);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        
        const horizontal = horizontalRef.current;  /* <section ref={horizontalRef}>*/
        const sections = sectionRef.current;      /* ref={(e)=>{ sectionRef.current[index]=e }} */
        const numbers = numberRef.current;
    

        const updateWidth = () => {
            if(horizontal) {
              const wrap = horizontal.querySelector('.project_wrap');
              if( wrap ) {
                const totalWidth = sections.length * (sections[0].offsetWidth + 20 );
                wrap.style.width = `${totalWidth}px`;
              }
            }
          }
          updateWidth();
          window.addEventListener('resize', ()=> {
            updateWidth();
            ScrollTrigger.refresh();
          })

        let scrollTween = gsap.to( sections, {
        xPercent:-120*(sections.length-1), // 섹션 개수만큼 x축 이동 비율 설정
        ease:"none",
        scrollTrigger:{
            trigger:horizontal, //트리거 기준 설정
            start:"top 56px",
            end:()=>"+=" + horizontal.offsetWidth, // 스크롤 종료 위치
            pin:true, // 스크롤시 해당요소 고정
            scrub:1,  // 스크롤, 애니메이션 동기화
            markers:false,
            invalidateOnRefresh:true, // 새로고침 애니메이션 무효화
            anticipatePin:1,
            onUpdate:(self)=>{
            const progress = self.progress;
            const totalSections = sections.length;
            const currentIndex = Math.floor(progress * totalSections);
            numbers.forEach( number =>{
                if(number){
                number.classList.remove('active');
                }
            });
            for(let i=0; i<=currentIndex && i<totalSections; i++){
                if( numbers[i] ){
                numbers[i].classList.add('active');
                }
            }
    
            }
        }
        })
    
        sections.forEach((section, index) => {
        if (section) {
            ScrollTrigger.create({
            trigger: horizontal,
            start: "top 56px",
            end: ()=>"+=" + horizontal.offsetWidth,
            scrub: 1,
            onUpdate: (self) => {
                const sectionProgress = (self.progress * sections.length) - index;            
                if (sectionProgress >= 0 && sectionProgress <= 1) {
                if (numbers[index]) {
                    numbers[index].classList.add('active');
                }
                } else if (sectionProgress < 0) {
                if (numbers[index]) {
                    numbers[index].classList.remove('active');
                }
                }
            }
            });
        }
        });
    
        return()=>{
        scrollTween.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('resize', updateWidth);
        }
    },[]);
    return(
        <section id="project" ref={horizontalRef}>
            <div className="project_inner">
                
                <div className="title_wrap">
                    <h2 className="project_title">
                        Portfolio <em>project</em>
                    
                    </h2>   
                    <table className="score_board">
                        <thead>
                            <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            {projectText.map((_, index) => (
                                <td 
                                    key={index}
                                    className="project_number"
                                    ref={(el) => { numberRef.current[index] = el }}
                                >
                                    {String(0)}
                                    {/* {String(index + 1).padStart(2, '')} */}
                                </td>
                            ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="project_wrap">
                    {
                        projectText.map((project,index)=>(
                            <article className={`project_item p${index+1}`} key={index}
                                ref={ (el)=>{sectionRef.current[index]=el }}
                            >
                                <div className="text_wrap">
                                    <span className="num">{project.num}</span>
                                    <h3 className="title">{project.title}</h3>
                                </div>
                                <div className="content_wrap">
                                    <a href={project.view} target="_blank" className="img" rel="noreferrer noopener" >
                                        <img src={project.img} alt={project.name} />
                                    </a>
                                    <div className="content_right">
                                        <p className="desc">{project.desc}</p>
                                        <p className="name">{project.name}</p>
                                        <p className="skills">
                                            {
                                                project.skills.map((skill, idx) => (
                                                <span key={idx}>{skill}</span>
                                                ))
                                            }
                                        
                                        </p>
                                        <div className="btn_wrap">
                                        {
                                            project.code && 
                                            <a href={project.code} target="_blank" className="pj" rel="noreferrer noopener">프로젝트 코드 보기</a>
                                        }
                                            <a href={project.view} target="_blank" className="pj" rel="noreferrer noopener">사이트 바로가기</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Project;