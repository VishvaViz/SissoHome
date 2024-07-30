import { useState, useEffect } from "react";

// import SissoLogo from '../assets/sissologo.svg'
import SissoLogo from '../assets/sissologo.png'
import GirlSVG from '../assets/Girl.svg'
import AiPowered from '../assets/AIPower.svg'
import Circle1 from '../assets/Circle1.svg'
import Feature from '../assets/Feature.svg'
import Brand from '../assets/Brand.svg'
import SuccessIcon from '../assets/SuccessMark.svg'
import PlayStore from '../assets/playstore.svg'
import Phone from '../assets/phone.svg'
import About from '../assets/about.svg'
import Corporate from '../assets/corporate.svg'
import Filter from '../assets/fillter.svg'
import Ai from '../assets/ai.svg'
import Mentor from '../assets/mentor.svg'
import Project from '../assets/project.svg'
import Game from '../assets/gaming.svg'
import Vitrual from '../assets/virutual.svg'
import SoftSkills from '../assets/softskills.svg'
import Community from '../assets/community.svg'
import Interative from '../assets/intertice.svg'
import HowStart from '../assets/howstart.svg'
import AboutSisso from '../assets/aboutimg.svg'
import Social from '../assets/social.svg'

import DoubleQuoutes from '../assets/double-quotes 1.svg'
import DownApp from '../assets/download.svg'
import PhoneNumber from '../assets/phonenumber.svg'
import Mail from '../assets/email.svg'
import Location from '../assets/location.svg'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/home.css'
import Aos from "aos";
import "aos/dist/aos.css";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable auto slide
    autoplaySpeed: 3000, // slide every 3 seconds
};

const contentData = [
    {
        title: "For Trainers",
        items: [
            "Expanded Reach: Offer your training services to a global audience of corporate clients.",
            "Training Proposals: Submit and manage training proposals, track progress, and deliver results.",

        ],
    },
    {
        title: "For Employers",
        items: [
            "Efficient Training Management: Easily post corporate training requirements and hire expert trainers.",
            "Talent Development: Access a pool of qualified trainers and upskill your workforce effectively.",
        ],
    },
    {
        title: "For Students",
        items: [
            "Tailored Opportunities: Access job postings that match your skills and interests.",
            "Skill Development: Enhance your skills with personalized learning resources and AI recommendations.",
        ],
    },
    {
        title: "Our Impact",
        items: [
            "Sissoo is committed to creating a positive impact in the education and employment sectors. By bringing together trainers, employers, and students. Provide high-quality training that equips individuals with the skills needed to succeed in their careers.",
        ],
    },
];

const aboutContent = [
    {
        title: "AI-Powered Features",
        description: 'Our advanced AI algorithms provide personalized  recommendations, skill assessments, and resume  optimization, ensuring you get the most relevant and  effective career guidance.'
    },
    {
        title: 'Comprehensive CareerTools',
        description: 'From interactive career roadmaps to virtual career fairs,  Sissoo offers a wide range of tools designed to help you at  every stage of your professional journey.'
    },
    {
        title: 'Strong Community',
        description: 'Join a vibrant community of professionals, participate in  discussions, and gain insights from industry experts.'
    },
    {
        title: 'Seamless Integration',
        description: 'Sissoo integrates with LinkedIn and other professional  networks, making it easy to showcase your achievements  and connect with others.'
    }

]

function Home() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    const [model, setModel] = useState(false)
    const [active, setActive] = useState(false)
    const [selectedOption, setSelectedOption] = useState('home')

    return <div>
        <div className="w-full h-[50px] sm:h-[60px] lg:h-[75px] flex items-center justify-between px-[10px] fixed bg-white top-0 ">
            <div className="flex-shrink-0">
                <img
                    className="md:w-[136px] md:h-[43px] sm:w-[116px] sm:h-[43px] lg:w-[180px] lg:h-[60px]"
                    src={SissoLogo}
                    alt="Sisso Logo"
                />
            </div>
            <div className=" w-[50%] flex  items-center justify-evenly ">
                <div className="flex gap-[40px] items-center">
                    <span
                        onClick={() => {

                            const homeContainer = document.getElementById("home-container");
                            if (homeContainer) {
                                homeContainer.scrollIntoView({ behavior: "smooth" });
                            }
                            setSelectedOption('home')
                            setActive(!active)

                        }}
                        className="text-[#065EB5] lg:text-xl lg:font-[600] hidden md:inline lg:inline cursor-pointer">
                        Home
                        {
                            selectedOption === 'home' && (
                                <div className=" h-[3px] w-[30px] ml-[10px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                            )
                        }
                    </span>
                    <span
                        onClick={() => {
                            const aboutContainer = document.getElementById("about-container");
                            if (aboutContainer) {
                                aboutContainer.scrollIntoView({ behavior: "smooth" });
                            }
                            setSelectedOption('about')
                            setActive(!active)
                        }}
                        className="lg:text-xl lg:font-[600] hidden md:inline lg:inline cursor-pointer">
                        About Us
                        {
                            selectedOption === 'about' && (
                                <div className=" h-[3px] w-[30px] ml-[10px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                            )
                        }
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {

                            const contactDetailsContainer = document.getElementById("contact-details-container");
                            if (contactDetailsContainer) {
                                contactDetailsContainer.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="md:w-[120px] md:h-[35px] sm:w-[86px] lg:w-[160px] lg:h-[40px] sm:h-[30px] sm:text-[12px] md:text-[16px] lg:text-[18px]  rounded-full border-[1px] text-[16px] text-[#0667BC] border-[#0667BC] flex items-center justify-center p-1">
                        Contact Us
                    </button>
                    <button className="md:w-[120px] md:h-[35px] sm:w-[70px] sm:h-[30px] lg:w-[160px] lg:h-[40px]   sm:text-[12px] md:text-[16px] lg:text-[18px] bg-gradient-to-r from-[#065EB5] to-[#02AAEC] text-white font-[600] rounded-full border flex items-center justify-center p-1">
                        <a href="https://central.sissoo.in/">Login</a>
                    </button>
                </div>
            </div>
        </div>
        <div className="h-screen w-full mt-[60px] ">

            <div className="space-y-5 z-[5000]">
                <div id="home-container" >

                    <div className="flex items-center justify-center bg-[#F2F9FF]   md:flex-row lg:flex-row sm:flex-col md:h-auto md:w-full lg:h-[600px] lg:w-full mt-[10px] ">
                        <div className="w-full md:w-[50%] h-full p-[20px] md:p-[35px] flex flex-col items-center md:items-start justify-start space-y-5 md:space-y-10 text-center md:text-left">
                            <div className="flex flex-col gap-2 md:gap-5">
                                <h1 className="font-[400] text-[25px] md:text-[35px] lg:text-[40px]">
                                    Welcome to <span className="font-[700] text-[#065EB5]">Sissoo!</span>
                                </h1>
                                <span className="text-[24px] md:text-[34px] lg:text-[34px] font-[700]">
                                    Revolutionizing Corporate <br />
                                    Training & Professional Connection's
                                </span>
                                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-[400] leading-[24px] md:leading-[32px]">
                                    Sissoo is a pioneering platform designed to streamline
                                    corporate training, connect companies with expert trainers,
                                    and help job seekers enhance their skills and career
                                    prospects.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 md:gap-4">
                                <button className="w-[140px] md:w-[170px] h-[35px] md:h-[45px] bg-gradient-to-r from-[#065EB5] to-[#02AAEC] text-white font-[600] rounded-full border flex items-center justify-center p-1">
                                    <a href="https://central.sissoo.in/">  Get Started</a>
                                </button>
                                <button className="w-[140px] md:w-[170px] h-[35px] md:h-[45px] rounded-full border-[1px] text-[14px] md:text-[16px] text-[#0667BC] border-[#0667BC] flex items-center justify-center p-1">
                                    See Video
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-[50%] h-full p-[20px] md:p-[20px] lg:p-[20px] flex items-center">
                            <img className="w-full h-auto md:h-[450px] lg:h-[550px]" src={GirlSVG} alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div id="feature-container">
                    <div className="md:hidden sm:inline text-center">
                        <h1 className="lg:text-[35px] md:text-[25px] sm:text-[13px] font-[700] text-center flex flex-col items-center">
                            <span className="lg:text-[35px] md:text-[30px] font-[700] text-[#2676c2]">SISSOO's</span> AI-Powered Features
                            <div className="md:w-[150px] lg:w-[400px] h-[3px] sm:w-[100px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                        </h1>

                    </div>
                    <div className="w-full flex sm:flex-col lg:flex-row md:flex-row items-center justify-evenly ">
                        <div className="lg:w-[514px] lg:h-[543px] md:w-[350px] md:h-[370px] sm:w-[249px] sm:h-[266px]">
                            <span className="lg:inline md:inline sm:hidden">
                                <h1 className="lg:text-[35px] md:text-[25px] sm:text-[13px] font-[700]">
                                    <span className="lg:text-[35px] md:text-[30px] font-[700] text-[#2676c2]">SISSOO's</span> AI-Powered Features
                                </h1>
                                <div className="md:w-[150px] lg:w-[400px] h-[3px] sm:w-[80px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />

                            </span>
                            <img className="" src={Circle1} />
                        </div>
                        <div className="hidden lg:inline md:inline w-[648px] h-[322px] text-center  ">
                            {/* <img className="" src={AiPowered} /> */}
                            <h1 className="lg:text-[35px] md:text-[25px] sm:text-[13px] font-[700] lg:inline md:inline sm:hidden">
                                Community & <span className="lg:text-[35px] md:text-[30px] font-[700] text-[#2676c2]">Networking</span>
                            </h1>
                            <img className="w-[700px] h-[235px]" src={Feature} />

                        </div>
                        <div className="md:hidden lg:hidden sm:inline text-center space-y-3">
                            <h1 className="lg:text-[35px] md:text-[25px] sm:text-[13px] font-[700]">
                                Community & <span className="lg:text-[35px] md:text-[30px] font-[700] text-[#2676c2]">Networking</span>
                            </h1>
                            <img className="" src={Feature} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center p-[10px]">
                        <img src={Brand} />
                    </div>
                </div>
                <div id="whatwedo-container" className="flex flex-col justify-center items-center gap-4">
                    <div className="flex justify-center items-center flex-col ">
                        <h1 className="lg:text-[50px] md:text-[40px] lg:font-[700] md:font-[700] sm:font-[700] sm:text-[20px] ">
                            What <span className="text-[#065EB5]">We Do</span>
                        </h1>
                        <div className="md:w-[200px] lg:w-[200px] h-[3px] sm:w-[70px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />

                    </div>
                    <div className="flex justify-center items-center ">
                        <p className="lg:leading-[32px] lg:text-[20px] md:text-[18px] sm:text-[12px] sm:leading-[24px] text-center p-[15px]">
                            At Sissoo, we believe in the transformative power of education and the importance of connecting
                            knowledge with opportunities. Our platform is designed to facilitate this connection by providing a
                            space where trainers, employers, and students can come together to learn, grow, and succeed.
                        </p>
                    </div>
                </div>


                {/* <div className="p-[10px] flex gap-2">
                <div className="lg:w-[330px] lg:h-[219px] bg-[#F2F9FF] rounded-[10px] p-[10px]">
                    <div className="flex gap-3 p-[5px]">
                        <img src={SuccessIcon} />
                        <span className="text-[#2676C2] font-[600] lg:text-[18px] md:text-[16px]">
                            For Trainers
                        </span>
                    </div>
                    <div className="">
                        <ul className="list-disc p-[10px]">
                            <li className="text-[12px]">
                                Expanded Reach: Offer your training services to a
                                global audience of corporate clients.
                            </li>
                            <li className="text-[12px]">
                                Training Proposals: Submit and manage training
                                proposals, track progress, and deliver results.
                            </li>
                            <li className="text-[12px]">
                                Professional Growth: Build your reputation as an
                                industry expert and mentor.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-[330px] lg:h-[219px] bg-[#F2F9FF] rounded-[10px] p-[10px]">
                    <div className="flex gap-3 p-[5px]">
                        <img src={SuccessIcon} />
                        <span className="text-[#2676C2] font-[600] lg:text-[18px] md:text-[16px]">
                            For Employer
                        </span>
                    </div>
                    <div className="">
                        <ul className="list-disc p-[10px]">
                            <li className="text-[12px]">
                                Efficient Training Management: Easily post
                                corporate training requirements and hire expert trainers.
                            </li>
                            <li className="text-[12px]">
                                Talent Development: Access a pool of qualified
                                trainers and upskill your workforce effectively.
                            </li>
                            <li className="text-[12px]">
                                Engagement: Participate in virtual career fairs and
                                interact with potential employees and trainers in realtime.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-[330px] lg:h-[219px] bg-[#F2F9FF] rounded-[10px] p-[10px]">
                    <div className="flex gap-3 p-[5px]">
                        <img src={SuccessIcon} />
                        <span className="text-[#2676C2] font-[600] lg:text-[18px] md:text-[16px]">
                            For Students
                        </span>
                    </div>
                    <div className="">
                        <ul className="list-disc p-[10px]">
                            <li className="text-[12px]">
                                Tailored Opportunities: Access job postings that
                                match your skills and interests.
                            </li>
                            <li className="text-[12px]">
                                Skill Development: Enhance your skills with
                                personalized learning resources and AI
                                recommendations.
                            </li>
                            <li className="text-[12px]">
                                Professional Networking: Connect with mentors,peers
                                industry expert.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-[330px] lg:h-[219px] bg-[#F2F9FF] rounded-[10px] p-[10px]">
                    <div className="flex gap-3 p-[5px]">
                        <img src={SuccessIcon} />
                        <span className="text-[#2676C2] font-[600] lg:text-[18px] md:text-[16px]">
                           Out Impact
                        </span>
                    </div>
                    <div className="">
                        <p className="text-[12px]">
                            Sissoo is committed to creating a positive impact in the education and employment sectors.
                             By bringing together trainers, employers, and students. 
                             Provide high-quality training that equips individuals with the skills needed to succeed in their careers.

                        </p>
                    </div>
                </div>

            </div> */}

                <div>
                    {/* Large and Medium Screen Content */}
                    <div className="hidden md:flex lg:flex p-[20px] gap-2">
                        {contentData.map((content, index) => (
                            <div
                                key={index}
                                className="lg:w-[330px] lg:h-[219px] bg-[#F2F9FF] rounded-[10px] p-[10px]"
                            >
                                <div className="flex gap-3 p-[5px]">
                                    <img src={SuccessIcon} alt={`${content.title} Icon`} />
                                    <span className="text-[#2676C2] font-[600] lg:text-[18px] md:text-[16px]">
                                        {content.title}
                                    </span>
                                </div>
                                <div>
                                    {content.items.length > 1 ? (
                                        <ul className="list-disc p-[10px]">
                                            {content.items.map((item, i) => (
                                                <li key={i} className="text-[12px]">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-[12px]">{content.items[0]}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Small Screen Slider */}
                    <div className="md:hidden lg:hidden p-[10px]">
                        <Slider {...settings}>
                            {contentData.map((content, index) => (
                                <div key={index} className="p-2">
                                    <div className="w-full bg-[#F2F9FF] rounded-[10px] p-[10px]">
                                        <div className="flex gap-3 p-[5px]">
                                            <img src={SuccessIcon} alt={`${content.title} Icon`} />
                                            <span className="text-[#2676C2] font-[600] text-[16px]">
                                                {content.title}
                                            </span>
                                        </div>
                                        <div>
                                            {content.items.length > 1 ? (
                                                <ul className="list-disc p-[10px]">
                                                    {content.items.map((item, i) => (
                                                        <li key={i} className="text-[12px]">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-[12px]">{content.items[0]}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className=" flex flex-row justify-center ">
                    <a href="https://central.sissoo.in/">
                        <div className="flex items-center justify-center lg:w-[97%] lg:h-[345px] md:w-[97%] md:h-[280px] sm:w-[97%] sm:h-[145px] bg-[#D3EBFF] sm:rounded-[8px] lg:rounded-[20px]">
                            <div className="w-[50%]  sm:p-[5px] flex gap-3 flex-col justify-evenly">
                                <h1 className="lg:text-[45px] md:text-[30px] sm:text-[13px] font-[700]">
                                    You can download our app from the <span className="lg:text-[45px] md:text-[30px] font-[700] text-[#2676c2]">Play Store</span>
                                </h1>
                                <h1 className="sm:text-[10px] font-[400] lg:text-[25px]">
                                    Grab our app from the Play Store and register to get started.
                                </h1>
                                <a href="https://central.sissoo.in/">
                                    <img className="sm:w-[85px] sm:h-[28px] lg:w-[209px] lg:h-[65px]" src={PlayStore} />
                                </a>
                            </div>
                            <div className=" ">
                                <img className="lg:h-[340px] lg:w-[500px] sm:h-[140px] sm:w-[120px]" src={Phone} />
                            </div>
                        </div>
                    </a>
                </div>

                <div id="about-container">
                    {/* for mobile design */}
                    <div className="lg:hidden md:hidden sm:inline">
                        <div className="lg:hidden md:hidden sm:ml-[20px] sm:inline">
                            <h1 className="lg:text-[50px] md:text-[40px] lg:font-[700] sm:text-[20px] pl-[10px]">
                                About <span className="text-[#065EB5]">Sissoo</span>
                            </h1>
                            <div className="ml-[10px] md:w-[200px] lg:w-[200px] h-[3px] sm:w-[70px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm " />
                        </div>

                        <div className="flex justify-center">
                            <img className="lg:w-[574px] lg:h-[570px] sm:h-[360px] sm:w-[300px]" src={About} />
                        </div>
                        <div className="p-[10px]">
                            <p className="text-[12px] text-center leading-[18px]">
                                At Sissoo, we are dedicated to transforming corporate
                                training and professional networking. Our mission is to
                                connect companies, trainers, and job seekers in a dynamic
                                and efficient ecosystem that fosters growth and success.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 p-[20px]">
                            <div>
                                <div className=" flex gap-3  ">
                                    <div className="w-[25px] h-[25px] bg-gradient-to-b from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-[50%] flex justify-center items-center">
                                        <span className="text-white font-[700] text-[13px]">1</span>
                                    </div>
                                    <div className="flex flex-col gap-[2px] w-[75%]">
                                        <h1 className="font-[700] text-[13px]">
                                            Our Vision
                                        </h1>
                                        <p className="text-[#2E384C] text-[12px] text-wrap">
                                            To be the leading platform for corporate training,
                                            professional networking, and career development, creating
                                            meaningful connections that drive success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" flex gap-3    ">
                                    <div className="w-[25px] h-[25px] bg-gradient-to-b from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-[50%] flex justify-center items-center">
                                        <span className="text-white font-[700] text-[13px]">2</span>
                                    </div>
                                    <div className="flex flex-col gap-[2px] w-[75%]">
                                        <h1 className="font-[700] text-[12px]">
                                            Our Misson
                                        </h1>
                                        <p className="text-[#2E384C] text-[12px] text-wrap">
                                            To connect professionals globally, providing them with the
                                            tools and opportunities needed to advance their careers and
                                            achieve their professional goals
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=" flex gap-3    ">
                                    <div className="w-[25px] h-[25px] bg-gradient-to-b from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-[50%] flex justify-center items-center">
                                        <span className="text-white font-[700] text-13px]">3</span>
                                    </div>
                                    <div className="flex flex-col gap-[2px] w-[75%]">
                                        <h1 className="font-[700] text-[13px]">
                                            Our Values
                                        </h1>
                                        <p className="text-[#2E384C] text-[12px] text-wrap space-y-5">
                                            <span className="font-[600]">Innovation:</span>Continuously improving and innovating
                                            to meet the needs
                                            of our users.<br />
                                            <span className="font-[600]">Integrity:</span>Upholding the highest standards of honesty and transparency.<br />
                                            <span className="font-[600]">Empowerment:</span>Providing resources and opportunities
                                            that empower individuals and businesses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* for lg md  */}
                    <div className="lg:inline md:inline sm:hidden">

                        <div className="w-full h-[600px] flex p-[20px]   ">
                            <div className="w-[40%] h-full ">
                                <div className="flex justify-center">
                                    <img className="lg:w-[574px] lg:h-[570px] sm:h-[360px] sm:w-[300px]" src={About} />
                                </div>
                            </div>

                            <div className="w-[60%] h-full p-[5px]">

                                <h1 className="lg:text-[50px] md:text-[40px] lg:font-[700] sm:text-[20px] ">
                                    About <span className="text-[#065EB5]">Sissoo</span>
                                </h1>
                                <div className="md:w-[200px] lg:w-[200px] h-[3px] sm:w-[70px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                                <p className="text-[20px]">
                                    At Sissoo, we are dedicated to transforming corporate
                                    training and professional networking. Our mission is to
                                    connect companies, trainers, and job seekers in a dynamic
                                    and efficient ecosystem that fosters growth and success.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <div className=" flex gap-3  ">
                                            <div className="w-[50px] h-[50px] bg-gradient-to-b from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-[50%] flex justify-center items-center">
                                                <span className="text-white font-[700] text-[25px]">1</span>
                                            </div>
                                            <div className="flex flex-col gap-[2px] w-[75%]">
                                                <h1 className="font-[700] text-[20px]">
                                                    Our Vision
                                                </h1>
                                                <p className="text-[#2E384C] text-[16px] text-wrap">
                                                    To be the leading platform for corporate training,
                                                    professional networking, and career development, creating
                                                    meaningful connections that drive success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=" flex gap-3    ">
                                            <div className="w-[50px] h-[50px] bg-gradient-to-b from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-[50%] flex justify-center items-center">
                                                <span className="text-white font-[700] text-[25px]">2</span>
                                            </div>
                                            <div className="flex flex-col gap-[2px] w-[75%]">
                                                <h1 className="font-[700] text-[20px]">
                                                    Our Misson
                                                </h1>
                                                <p className="text-[#2E384C] text-[16px] text-wrap">
                                                    To connect professionals globally, providing them with the
                                                    tools and opportunities needed to advance their careers and
                                                    achieve their professional goals
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=" flex gap-3    ">
                                            <div className="w-[50px] h-[50px] bg-gradient-to-b from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-[50%] flex justify-center items-center">
                                                <span className="text-white font-[700] text-[25px]">3</span>
                                            </div>
                                            <div className="flex flex-col gap-[2px] w-[75%]">
                                                <h1 className="font-[700] text-[20px]">
                                                    Our Values
                                                </h1>
                                                <p className="text-[#2E384C] text-[16px] text-wrap space-y-5">
                                                    <span className="font-[600]">Innovation:</span>Continuously improving and innovating
                                                    to meet the needs
                                                    of our users.<br />
                                                    <span className="font-[600]">Integrity:</span>Upholding the highest standards of honesty and transparency.<br />
                                                    <span className="font-[600]">Empowerment:</span>Providing resources and opportunities
                                                    that empower individuals and businesses.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    {/* for mobile design */}

                    <div className="sm:inline lg:hidden md:hidden">
                        <div className="flex flex-col gap-5 justify-center p-[10px]">
                            <img src={Corporate} />
                            <img src={Filter} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={Ai} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={Mentor} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={Project} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={Game} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={Vitrual} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={SoftSkills} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={Community} />
                            <img className={`${model ? 'inline' : 'hidden'}`} src={Interative} />

                            <div className="text-[18px] text-[#2676C2] text-center font-[600] cursor-pointer"
                                onClick={() => setModel(!model)}>
                                <span>{model ? 'Show Less' : 'See All Features'}</span>

                            </div>
                        </div>
                    </div>

                    {/* for lg md  */}
                    <div id="feature-container">
                        <div className="sm:hidden lg:inline md:inline w-[97%] lg:h-[500px]">
                            <div className="flex justify-center items-center gap-2">
                                <img className="w-[420px] h-[464px]" src={Corporate} />
                                <img className="w-[420px] h-[425px]" src={Filter} />
                                <img className="w-[420px] h-[464px]" src={Ai} />
                            </div>
                            <div className={`${model ? 'flex justify-center items-center gap-2' : 'hidden'}`}>
                                <img className="w-[420px] h-[464px]" src={Mentor} />
                                <img className="w-[420px] h-[425px]" src={Project} />
                                <img className="w-[420px] h-[464px]" src={Game} />
                            </div>
                            <div className={`${model ? 'flex justify-center items-center gap-2' : 'hidden'}`}>
                                <img className="w-[420px] h-[464px]" src={Vitrual} />
                                <img className="w-[420px] h-[425px]" src={SoftSkills} />
                                <img className="w-[420px] h-[464px]" src={Interative} />
                            </div>
                            <div className={`${model ? 'flex justify-center items-center' : 'hidden'}`}>
                                <img className={`${model ? 'inline' : 'hidden'}`} src={Interative} />
                            </div>
                            <div className="text-[18px] text-[#2676C2] text-center font-[600] cursor-pointer"
                                onClick={() => setModel(!model)}>
                                <span>See All Features</span>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="sm:hidden md:inline lg:inline">
                    <div className="flex flex-col gap-[30px] justify-center items-center">
                        <div className="flex justify-center items-center flex-col ">
                            <h1 className="lg:text-[50px] md:text-[40px] lg:font-[700] sm:text-[20px] ">
                                How It <span className="text-[#065EB5]">Works</span>
                            </h1>
                            <div className="md:w-[200px] lg:w-[200px] h-[3px] sm:w-[70px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />

                        </div>
                        <div className="w-[90%] ">
                            <img src={HowStart} />
                        </div>
                    </div>

                </div>
                <div id="specialabout-container" className="p-[10px] w-full  ">
                    <div className="flex  lg:flex-row md:flex-row sm:flex-col p-[30px]">
                        <div className=" flex flex-col justify-start text-left gap-[50px] lg:w-[50%] sm:w-full w-[80%] ">
                            <div className="flex  flex-col lg:justify-start md:justify-start sm:justify-center sm:items-center ">
                                <h1 className="lg:text-[50px] md:text-[40px] lg:font-[700] sm:text-[18px] ">
                                    What's Special About  <span className="text-[#065EB5]">Sissoo?</span>
                                </h1>
                                <div className="md:w-[400px] lg:w-[550px] h-[3px] sm:w-[180px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />

                            </div>
                            {/* <div className="w-[50%] flex justify-center lg:hidden md:hidden sm:inline"> */}
                            <img className="w-[250px] h-[300px] lg:hidden md:hidden sm:inline" src={AboutSisso} />
                            {/* </div> */}
                            <div className=" ml-[60px] w-[]">
                                <Slider {...settings}>
                                    {aboutContent.map((content, index) => (
                                        <div className="flex flex-col gap-[35px]">
                                            <h1 className="lg:text-[30px] md:text-[25px] sm:text-[20px] font-[600]">{content?.title?.split(' ')?.[0]} <span className="lg:text-[30px] md:text-[25px] sm:text-[20px] font-[600] text-[#2676c2]">{content?.title?.split(' ')?.[1]}</span></h1>

                                            <p className="lg:text-[20px] md:text-[18px] sm:text-[13px] leadig-[]">
                                                {content.description}
                                            </p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="w-[50%]  flex justify-center  ">
                            <img className="lg:inline md:inline sm:hidden" src={AboutSisso} />
                        </div>

                    </div>
                </div>


                <div>
                    <div id="userstory-container" className=" flex flex-col justify-center items-center gap-[20px]">
                        <div className="flex  flex-col lg:justify-start md:justify-start sm:justify-center sm:items-center ">
                            <h1 className="lg:text-[50px] md:text-[40px] lg:font-[700] sm:text-[18px] ">
                                User  <span className="text-[#065EB5]">Stories</span>
                            </h1>
                            <div className="md:w-[150px] lg:w-[180px] h-[3px] sm:w-[80px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                        </div>
                        <p className="w-[70%] text-center lg:text-[22px] md:text-[18px] sm:text-[12px]">
                            Discover how Sissoo has transformed the corporate
                            training and career development landscape for professionals
                            worldwide. Read our user stories and see the impact we've
                            made.
                        </p>

                    </div>
                    <div className="p-[20px]  lg:justify-around md:justify-around hidden">

                        <div className="flex gap-[30px] justify-around lg:inline-flex md:inline-flex sm:hidden ">
                            {
                                [1, 2, 3].map(() => (

                                    <div className="lg:w-[390px] lg:h-[332px] bg-[#F2F9FF] rounded-sm p-[10px] flex flex-col gap-[50px]">
                                        <div className="flex justify-between  items-center">
                                            <div className="flex items-center gap-5">
                                                <div className="w-[65px] h-[65px] bg-slate-500 rounded-[50%]">

                                                </div>
                                                <div className="flex flex-col">
                                                    <span>Caroline</span>
                                                    <span>Trainer</span>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={DoubleQuoutes} />
                                            </div>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>
                                    </div>
                                ))
                            }
                        </div>

                        {/* <div >
                        <div className="lg:hidden md:hidden sm:inline  ">
                            <Slider {...settings}>
                                {
                                    [1, 2, 3].map(() => (
                                        <div className="w-[328px] h-[162px] bg-[#F2F9FF] rounded-sm p-[10px] flex flex-col gap-[25px]">
                                            <div className="flex justify-between  items-center">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-[33px] h-[33px] bg-slate-500 rounded-[50%]">

                                                    </div>
                                                    <div className="flex flex-col text-[15px]">
                                                        <span >Caroline</span>
                                                        <span>Trainer</span>
                                                    </div>
                                                </div>
                                                <div className="w-[30px] h-[30px]">
                                                    <img src={DoubleQuoutes} />
                                                </div>
                                            </div>
                                            <p className="sm:text-[12px]">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                            </p>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>


                    </div> */}

                        <div>
                            <div className="lg:hidden md:hidden sm:inline">
                                <div className="w-[368px] h-[162px] bg-[#F2F9FF] rounded-sm p-[10px] flex flex-col gap-[25px]">
                                    <Slider {...settings}>
                                        {
                                            [1, 2, 3].map((item, index) => (
                                                <div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-5">
                                                            <div className="w-[33px] h-[33px] bg-slate-500 rounded-[50%]"></div>
                                                            <div className="flex flex-col text-[15px]">
                                                                <span>Caroline</span>
                                                                <span>Trainer</span>
                                                            </div>
                                                        </div>
                                                        <div className="w-[30px] h-[30px]">
                                                            <img src={DoubleQuoutes} />
                                                        </div>
                                                    </div>
                                                    <p className="sm:text-[12px]">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="p-[10px]">
                    <a href="https://central.sissoo.in/">
                        <img src={DownApp} />
                    </a>
                </div>

                <div id="contact-details-container">
                    <div className="w-full p-[30px] flex ">
                        <div className="w-full flex flex-col justify-start ">
                            <div className="space-y-3">
                                <div className="flex  flex-col lg:justify-start md:justify-start ">
                                    <h1 className="lg:text-[50px] md:text-[40px] lg:font-[700] sm:text-[18px] ">
                                        Contact  <span className="text-[#065EB5]">Us</span>
                                    </h1>
                                    <div className="md:w-[150px] lg:w-[180px] h-[3px] sm:w-[80px] bg-gradient-to-r from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                                </div>
                                <h1 className=" lg:text-[25px] md:text-[18px] sm:text-[12px]">
                                    Have questions or feedback? Contact our support team for
                                    assistance.
                                </h1>
                            </div>
                            <div className="flex justify-center items-center lg:flex-row md:flex-row sm:flex-col gap-[10px]">

                                <div className="space-y-7">

                                    <div className="flex items-center gap-5">
                                        {/* <div> */}
                                        <img className="lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] sm:h-[50px] sm:w-[50px]" src={PhoneNumber} />
                                        {/* </div> */}
                                        <div className=" h-[53px] w-[3px]  bg-gradient-to-t from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                                        <div>
                                            <span className="lg:text-[25px] md:text-[20px] sm:text-[15px] font-[600]">
                                                080-22544067/025
                                            </span>

                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        {/* <div> */}
                                        <img className="lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] sm:h-[50px] sm:w-[50px]" src={Mail} />
                                        {/* </div> */}
                                        <div className=" h-[53px] w-[3px]  bg-gradient-to-t from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                                        <div>
                                            <span className="lg:text-[25px] md:text-[20px] sm:text-[15px] font-[600]">
                                                info@sissoo.in
                                            </span>

                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        {/* <div> */}
                                        <img className="lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] sm:h-[50px] sm:w-[50px]" src={Location} />
                                        {/* </div> */}
                                        <div className=" h-[53px] w-[3.5px]  bg-gradient-to-t from-[#2A7AC5] via-[#77C9F6] to-[#91A4E9] rounded-sm" />
                                        <div>
                                            <span className="lg:text-[25px] md:text-[20px] sm:text-[15px] font-[600]">
                                                126/12, Bangalore, Karnataka - India
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-[606px] md:w-[550px] sm:w-[328px]">
                                    <div className="w-full lg:h-[506px] md:h-[450px] sm:h-[300px] shadow rounded-md flex justify-center ">
                                        <div className="flex flex-col  justify-center items-center gap-4 ">
                                            <input className="lg:w-[500px] lg:h-[75px] md:w-[350px] md:h-[55px] sm:w-[265px] sm:h-[43px] outline-none rounded-md border placeholder: pl-[20px] " type="text" placeholder="Name" />
                                            <input className="lg:w-[500px] lg:h-[75px] md:w-[350px] md:h-[55px] sm:w-[265px] sm:h-[43px] outline-none rounded-md border placeholder: pl-[20px]  " type="email" placeholder="Email" />
                                            <textarea className="lg:w-[500px] lg:h-[75px] md:w-[350px] md:h-[55px] sm:w-[265px] sm:h-[109px] outline-none rounded-md border placeholder: pl-[20px] pt-[20px]  " type="text" placeholder="Your Message Here" />
                                            <button className="md:w-[120px] md:h-[35px] sm:w-[96px] sm:h-[30px] lg:w-[160px] lg:h-[40px] sm:text-[12px] md:text-[16px] lg:text-[18px] bg-gradient-to-r from-[#065EB5] to-[#02AAEC] text-white font-[600] rounded-full border flex items-center justify-center p-1">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-full lg:h-[549px] md:h-[450px] sm:h-[530px]  shadow ">
                        <div className="lg:inline-flex flex-col md:inline-flex sm:hidden">
                            <div className="flex">
                                <div className="flex flex-col justify-center items-start p-[50px] gap-[30px]  w-[60%]">
                                    <div>
                                        <img className="w-[300px] h-[120px]" src={SissoLogo} />
                                    </div>
                                    <p className="text-[25px]">
                                        Join us on our journey to make learning accessible and opportunities abundant.
                                    </p>
                                    <h1 className="text-[25px] font-[600]">
                                        Follow Us On:
                                    </h1>
                                    <img className="h-[52px] w-[192px]" src={Social} />

                                </div>
                                <div className=" w-[20%]  flex flex-col items-center justify-center gap-7 ">
                                    <span
                                        onClick={() => {

                                            const homeContainer = document.getElementById("home-container");
                                            if (homeContainer) {
                                                homeContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[25px] cursor-pointer">
                                        Home
                                    </span>

                                    <span
                                        onClick={() => {
                                            const whatweContainer = document.getElementById("whatwedo-container");
                                            if (whatweContainer) {
                                                whatweContainer.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="text-[25px] cursor-pointer">
                                        What We Do
                                    </span>
                                    <span
                                        onClick={() => {
                                            const aboutContainer = document.getElementById("about-container");
                                            if (aboutContainer) {
                                                aboutContainer.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="text-[25px] cursor-pointer">
                                        About  Us
                                    </span>
                                    <span
                                        onClick={() => {
                                            const contactDetailsContainer = document.getElementById("contact-details-container");
                                            if (contactDetailsContainer) {
                                                contactDetailsContainer.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}

                                        className="text-[25px] cursor-pointer">
                                        Contact Us
                                    </span>

                                </div>
                                <div className=" w-[20%]   flex flex-col items-center justify-center gap-7 ">
                                    <span
                                        onClick={() => {
                                            const featureContainer = document.getElementById("feature-container");
                                            if (featureContainer) {
                                                featureContainer.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="text-[25px] cursor-pointer">
                                        Features
                                    </span>

                                    <span
                                        onClick={() => {
                                            const specialContainer = document.getElementById("specialabout-container");
                                            if (specialContainer) {
                                                specialContainer.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="text-[25px] cursor-pointer">
                                        Special About Sissoo
                                    </span>
                                    <span
                                        onClick={() => {
                                            const userstoryContainer = document.getElementById("userstory-container");
                                            if (userstoryContainer) {
                                                userstoryContainer.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="text-[25px] cursor-pointer">
                                        User Stories
                                    </span>

                                </div>
                            </div>

                            <div className="flex justify-center">
                                <hr className="w-[90%]" />
                            </div>

                            <div className="w-[80%] text-[20px] flex gap-[100px] p-[30px]">
                                <h1>All Rights Reserved @ <span className="text-[#2676c2]">SISSOO</span>-2024</h1>
                                <a href="https://mindstaytechnology.in/privacy.html">Privacy Policy</a>
                                <span>Terms & Conditions</span>
                            </div>
                        </div>

                        <div className="p-[30px]  space-y-2 lg:hidden md:hidden sm:inline">
                            <div className="flex justify-center">
                                <img className="w-[270px] h-[100px]" src={SissoLogo} />
                            </div>
                            <p className=" text-[12px] p-[5px]">
                                Join us on our journey to make learning accessible and opportunities abundant.
                            </p>
                            <div className="flex justify-evenly ">
                                <div className="flex flex-col gap-[20px] ">
                                    <span
                                        onClick={() => {

                                            const homeContainer = document.getElementById("home-container");
                                            if (homeContainer) {
                                                homeContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[12px] cursor-pointer">
                                        Home
                                    </span>
                                    <span
                                        onClick={() => {

                                            const whatweContainer = document.getElementById("whatwedo-container");
                                            if (whatweContainer) {
                                                whatweContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[12px] cursor-pointer">
                                        What We Do
                                    </span>
                                    <span
                                        onClick={() => {

                                            const aboutContainer = document.getElementById("about-container");
                                            if (aboutContainer) {
                                                aboutContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[12px] cursor-pointer">
                                        About Us
                                    </span>
                                    <span
                                        onClick={() => {

                                            const contactDetailsContainer = document.getElementById("contact-details-container");
                                            if (contactDetailsContainer) {
                                                contactDetailsContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[12px] cursor-pointer">
                                        Contact Us
                                    </span>

                                </div>

                                <div className="flex flex-col justify-around">
                                    <span
                                        onClick={() => {

                                            const featureContainer = document.getElementById("feature-container");
                                            if (featureContainer) {
                                                featureContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[12px] cursor-pointer">
                                        Features
                                    </span>
                                    <span
                                        onClick={() => {

                                            const specialContainer = document.getElementById("specialabout-container");
                                            if (specialContainer) {
                                                specialContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[12px] cursor-pointer">
                                        Special About Sisso
                                    </span>
                                    <span
                                        onClick={() => {

                                            const userstoryContainer = document.getElementById("userstory-container");
                                            if (userstoryContainer) {
                                                userstoryContainer.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}
                                        className="text-[12px] cursor-pointer">
                                        User Sisso
                                    </span>
                                </div>
                            </div>
                            <div className="p-[5px]">
                                <span className="text-[14px] font-[600]">
                                    Follow Us On:
                                </span>
                            </div>
                            <div className="p-[5px]">
                                <img src={Social} />
                            </div>
                            <div className="w-[80%] p-[5px] text-[14px] flex flex-col gap-[10px] ">
                                <h1>All Rights Reserved @ <span className="text-[#2676c2]">SISSOO</span>-2024</h1>
                                <a href="https://mindstaytechnology.in/privacy.html">Privacy Policy</a>
                                <span>Terms & Conditions</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
}

export default Home