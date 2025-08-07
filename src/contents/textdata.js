export const headerNav = [
    {title:'Intro', url:'#intro'},
    {title:'About me', url:'#profile'},
    {title:'Portfolio', url:'#project'},
    {title:'Contact', url:'#contact'},
]

export const introText = {
    title : 're Start',
    description: ['Baseball starts ', ' with 2 outs ', 'at the bottom  of the 9th inning']
}

export const profileText = [
    {
      title:'1999 ~ 2009', 
      description:"00 한성대학교 사학과 졸업 \n  99 ~ 03 번역소프트웨어 전문 기업 엘엔아이소프트 \n 03 ~ 07 복리후생 전문기업 이지웰  \n 07 ~ 09 데이터 전문기업 아이서브 외 \n 약 10년간 다수의 웹개발사에서 웹디자인, 웹기획자로 근무 \n",
      img:
      [
        '/images/base01_01.jpg', 
        '/images/base01_02.jpg',
        '/images/base01_03.jpg',   
      ]
    }, 
    {
      title:'2009 ~ 2024', 
      description:"2009 ~ 잘생긴 장남 출산 \n 2012 ~ 귀여운 차남 출산  \n 육아, 가사와 web design 프리랜서 활동 병행(재택) \n  유치원/초등학교 운영위원 등 학부모 활동  \n",
      img : [
        '/images/base02_01.jpg', 
        '/images/base02_02.jpg',
        '/images/base02_03.jpg',        
      ]
    }, 
    {
      title:'2024 ~ now', 
      description:"2024 ~ 인천 구월동 SBS컴퓨터 아카데미 \n UI/UX 프론트엔드 개발자 과정 \n html, css, JQuery, javaScript, react, vue, next 교육과정 中 \n 2025. 6 ~ 웹디자인 개발기능사 취득 \n",
      img:
      [
        '/images/base03_01.jpg', 
        '/images/base03_02.jpg',
        '/images/base03_03.jpg',  
      ]
    }
]

export const siteText = [
    {text:["Renewal", "site compliant with","web standard"], title:"~목적의 사이트 제작", code:"https://codeview-github", view:"https://gitpage", info:["site coding", "production period: 7days", "use Stack: HTML5 / CSS3/ ECMASCRIPT / JQUERY"]},
    {text:["Make", "site compliant with","web accessbility"], title:"~목적의 사이트 제작", code:"https://codeview-github", view:"https://gitpage", info:["clone coding", "production period: 8days", "use Stack: HTML5 / CSS3/ ECMASCRIPT / BOOTSTRAPT"]},
    {text:["Renewal", "site compliant with","responsive"], title:"~목적의 사이트 제작", code:"https://codeview-github", view:"https://gitpage", info:["site coding", "production period: 6days", "use Stack: HTML5 / CSS3/ REACT"]},
    {text:["Renewal", "site compliant with","responsive"], title:"~목적의 사이트 제작", code:"https://codeview-github", view:"https://gitpage", info:["site coding", "production period: 6days", "use Stack: HTML5 / CSS3/ REACT"]}
]

  export const projectText=[
    {
        num:"1", 
        title:"주식회사 웅진 메인페이지 리뉴얼", 
        desc:"html, css, Jquery를 사용한 반응형 사이트로 그룹의 사업과 서비스, 뉴스 등을 한 페이지에서 노출되도록 리뉴얼하여 구성", 
        name:"웅진그룹의 건강하고 밝고 진취적인 그룹의 이미지가 노출되지 않는 현재의 단순한 구조의 메인페이지와 트렌드에 맞지 않는 서브 페이지들의 리뉴얼이 필요하며 데스크탑 외의 환경에 지원이 되지 않는 사이트를 보다 편리한 사용을 위하여 반응형으로 리뉴얼하도록 함",
        img:"/images/potfolio_img1.jpg", 
        code:"", 
        view:"http://ssglanders.dothome.co.kr/woongjin/index.html", 
        skills:[ 'html','css','반응형 ']
    },
    {
        num:"2", 
        title:"세종충남대학병원 안내 키오스크", 
        desc:"react를 사용하여 키오스크 제작, 1920 해상도에 최적화된 화면, 층별 안내 / 진료실 위치 제공", 
        name:"세종병원의 진료과목과 진료실 위치를 한눈에 파악할 수 있도록 제작한 병원 안내 키오스크로 1920dpi의 전체 화면 사이즈에 맞춰 구성 요소를 배치하여, 병원 방문객이 빠르게 정보를 확인할 수 있도록 설계. React를 기반으로 개발되었으며, 사용자 인터페이스의 직관성과 효율성을 고려해 구현",
        img:"/images/potfolio_img2.jpg", 
        code:"https://github.com/landyjung/hospitalkiosk.git", 
        view:"https://landyjung.github.io/hospitalkiosk/", 
        skills:[ 'react','css','router']
    },
    {
        num:"3", 
        title:"KIA mobility 반응형 사이트", 
        desc:"리액트를 이용한 반응형 사이트 구현을 위한 연습용 사이트 제작", 
        name:"리액트를 이용한 반응형 웹사이트 구현을 연습하기 위해 제작된 프로젝트로, 다양한 라이브러리와 프레임워크를 적용해 실제 서비스 환경에 가까운 사이트를 구성. 특히 TailwindCSS, Bootstrap, Swiper, React Router 등의 기술을 활용하여 스타일링과 네비게이션 기능을 효과적으로 구현",
        img:"/images/potfolio_img3.jpg", 
        code:"https://github.com/landyjung/kiaMobility.git", 
        view:"https://landyjung.github.io/kiaMobility/", 
        skills:[ 'react','tailwind','gsap', 'swiper']
    },
    {
        num:"4", 
        title:"SSG LANDERS 반응형 메인페이지", 
        desc:"html, css, javascript를 사용한 반응형 사이트로 야구단 사이트를 방문하는 주 사용자들이 원하는 정보를 제공받을 수 있도록 개선하며 반응형 사이트로 제작하여 이용자의 편의를 증대하였음", 
        name:"야구단의 활기찬 이미지를 반영한 역동적이고 생동감 있는 웹사이트로, 기존 데스크탑 전용 사이트의 한계를 보완하기 위해 반응형 웹으로 재구성. 모바일 환경에서도 불편함 없이 정보를 확인할 수 있도록 개선하였으며, 주 사용자들이 가장 많이 찾는 정보를 쉽게 접근할 수 있도록 설계",
        img:"/images/potfolio_img4.jpg", 
        code:"", 
        view:"http://ssglanders.dothome.co.kr/ssglanders/index.html", 
        skills:[ 'html','css','javaScript']
    },
    {
        num:"5", 
        title:"SSG LANDERS 반응형 리액트 사이트", 
        desc:"react 기반의 chart , openweather API, sass 등의 기술을 사용하여 소식, 정보, 티켓예매, 운영 스케쥴, 쇼핑몰의 모든 정보를 한 곳에서 제공할 수 있도록 통합사이트를 구축", 
        name:"야구단 관련 뉴스, 티켓 예매, 쇼핑몰, 선수 정보, 야구장 날씨, 경기 일정 등 다양한 정보를 하나의 포털에서 제공하는 통합 웹사이트. 사용자의 편의성과 정보 접근성을 극대화하기 위해 React 기반으로 제작되었으며, Chart.js, OpenWeather API, Sass 등의 기술을 활용해 데이터 시각화와 날씨 정보 제공 기능을 구현. 다양한 서비스 콘텐츠를 하나의 플랫폼으로 통합하여 이용자의 편의를 높임",
        img:"/images/potfolio_img5.jpg", 
        code:"https://github.com/landyjung/ssgv6.git", 
        view:"https://landyjung.github.io/ssgv6/", 
        skills:[ 'react','sass','router', 'chart','swiper', 'gsap', 'xlsx', 'API']
    },
    {
        num:"6", 
        title:"SSG LANDERS 야구용품 쇼핑몰", 
        desc:"react redux를 사용하여 야구용품 전문 쇼핑몰 구현, swiper를 적용한 부드러운 배너 스크롤 효과", 
        name:"야구 용품을 전문적으로 판매하는 반응형 쇼핑몰 웹사이트로, React와 Redux를 활용하여 개발. 사용자 경험을 고려한 레이아웃과 구조로 설계되었으며, 다양한 디바이스에서도 최적의 화면을 제공할 수 있도록 반응형 웹 기술을 적용. 상품 목록, 장바구니 기능, 상세 페이지 등의 쇼핑몰 핵심 기능이 구현되어 있으며, Redux를 통한 상태 관리를 통해 효율적인 데이터 흐름을 실현.",
        img:"/images/potfolio_img6.jpg", 
        code:"https://github.com/landyjung/ssgmall.git", 
        view:"https://landyjung.github.io/ssgmall/", 
        skills:[ 'react','redux','swiper','tabs']
    },
    {
        num:"7", 
        title:"Memory Card 게임사이트", 
        desc:"야구선수의 포토카드 이미지를 사용하여 javascript 기반의 1,2,3 단계의 메모리카드 게임을 제작", 
        name:"야구 팬들을 위한 재미 요소로, 야구 선수들의 포토카드 이미지를 활용한 메모리 카드 게임 웹사이트를 제작. JavaScript 기반으로 개발되었으며, 사용자의 기억력을 테스트할 수 있도록 3단계(1~3 레벨)로 구성. 게임 진행에 따라 난이도가 올라가며, 인터랙티브한 UI를 통해 사용자 몰입도를 높임.",
        img:"/images/potfolio_img7.jpg", 
        code:"", 
        view:"http://ssglanders.dothome.co.kr/game/memoryGame.html", 
        skills:[ 'html','css','javaScript']
    },
    {
        num:"8", 
        title:"뮤직플레이어", 
        desc:"javaScript를 이용한 음원 재생 어플리케이션", 
        name:"웹 기반 뮤직 플레이어 앱으로, HTML과 JavaScript를 활용하여 제작. 사용자는 플레이어를 통해 음악 재생, 일시 정지, 다음 곡 이동 등의 기본적인 음악 제어 기능을 이용할 수 있으며, 심플하고 직관적인 UI 디자인을 통해 편리한 사용자 경험을 제공.",
        img:"/images/potfolio_img8.jpg", 
        code:"https://github.com/landyjung/musicplayer.git", 
        view:"https://landyjung.github.io/musicplayer/", 
        skills:[ 'html','css','javaScript']
    },
    {
        num:"9", 
        title:"구글 API 번역 사이트", 
        desc:"Google Translation API를 활용한 이용한 번역기 제작", 
        name:"Google Translation API를 활용하여 실시간 번역 기능을 제공하는 웹 기반의 간단한 번역기. 사용자가 입력한 한글 문장을 영어로, 영어 문장을 한글로 번역해주는 기능을 지원하며, JavaScript를 기반으로 API 통신을 구현하여 동적인 번역 결과를 제공.",
        img:"/images/potfolio_img9.jpg", 
        code:"", 
        view:"http://ssglanders.dothome.co.kr/translate/translation.html", 
        skills:[ 'html','css','javaScript', 'API']
    },
  ]
  
  export const contactText=[
    {link:"https://www.instagram.com/landyjung/", title:"010-6287-2297"},
    {link:"E-MAIL", title:"landy76@naver.com"},
  ]

  export const footerIcon=[
    {link:"https://www.instagram.com/landyjung/", img:'/images/icon_insta.png'},
    {link:"mailto:landy76@naver.com", img:'/images/icon_mail.png'},
    {link:"/", img:'/images/icon_home.png'},
  ]