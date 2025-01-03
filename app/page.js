
'use client'
import React, { useState } from "react";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Cardpro from '@/components/Cardpro';
import Screen from "@/components/Screen";
import { useEffect } from 'react';
import me from '@/public/ui/me2.jpg'
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Marquee from 'react-fast-marquee';
import metrans from '@/public/ui/metrans.png'
import Navbar from "@/components/Navbar";
import axios from "axios";
import me3 from '@/public/ui/me3.jpeg'
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useMediaQuery } from 'react-responsive';
import Contactui from "@/components/Contactui";



import Slider from 'react-slick';
const Page = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only triggers once when in view
  })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  const [data, setData] = useState([])
  const [context2, setContext2] = useState(false)
  const [listimage, setListimage] = useState([])
  const [boxx, setBoxx] = useState('none')
  const [text, setText] = useState('View All')

  const [isLoading, setIsLoading] = useState(true)
  const [context, setContext] = useState(false)
  const getdata = () => {
    setIsLoading(true)
    axios.get('/api/project')
      .then((res) => {


        setData(res.data.data)

        setIsLoading(false)

      })
      .catch((err) => { console.log(err) })


  }
  useEffect(() => {
    getdata()

    document.title = "Web Developer Umair Zakria";
  }, []);

  const [style, setStyle] = useState({});
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    const rotateX = yPercent * 15;
    const rotateY = -xPercent * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0)",
      transition: "transform 0.3s ease-out",
    });
  };
  const handelscreen = () => {
    setContext(true)


  }
  const handelclose = () => {
    setContext(false)

  }
  const handelclose2 = () => {
    setContext2(false)
    setListimage([])

  }
  const handelscreen2 = (list) => {
    setContext2(true)
    setListimage(list)

  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // rtl: true,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  const feedback = [
    {
      id: 0,
      dis: "I worked with Umair Zakria on our website, and I'm really happy with the results. He understood exactly what we wanted and delivered a website that works great and looks awesome. I'd happily recommend him for any web development work.",
      name: 'Shah Rukh, ',
      link: 'https://supersubofficials.com/',
      pname: 'SupperSubOfficils.com',
      img: 'https://i.imgur.com/4F0kocC.png'
    },
    {
      id: 1,
      dis: "Umair Zakria built a great Bus Management System for my final-year project. He understood the requirements perfectly and delivered a user-friendly system on time. Highly recommended!.",
      name: "Sameer Ali, ",
      link: 'https://github.com/UmairZakria/BMS',
      pname: 'Github/BMS',
      img: 'https://i.imgur.com/QlbPYTD.png'

    },
    {
      id: 2,
      dis: "Working with Umair Zakria was a fantastic experience. He built a sleek, user-friendly blogging website that exceeded my expectations. Highly recommend his services for anyone looking to create a professional online presence.",
      name: "Zain Mukhtar, ",
      link: 'https://zainblog-seven.vercel.app/',
      pname: 'Vercel.app',
      img: 'https://i.imgur.com/pTXOfwm.png',

    }


  ];
  useEffect(() => {
    if (isDesktop) {
      setBoxx('flex')

    } else if (isTablet) {
      setBoxx('flex')
    }

  }, [isMobile, isDesktop, isTablet])

  const showme = () => {
    if (boxx == 'none') {
      setBoxx('flex')
      setText('Hide All')

    } else {
      setBoxx('none')
      setText('View All')
    }

  }

  return (
    <>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (<>

        <Navbar />
        <div className=''>
          {context && <Contact onClose={handelclose} />}
          {context2 && <Screen images={listimage} onClose={handelclose2} />}

          <div id="umair" className='relative  mx-auto main   flex py-[60px] md:py-[50px] flex-wrap  w-full h-full  md:min-h-[calc(100vh-40px)] md:max-h-auto '>


            <div className="flex w-full px-5 flex-wrap gap-4  justify-around">

              <div className="space-y-7 w-full md:w-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl  ">I&apos;m a Professional</h1>

                <h1 className="bg-lok text-white px-3 md:p-3 dark:bg-transparent rounded-xl  dark:text-[#ffdc2e] text-3xl md:text-5xl lg:text-6xl   dark:underline">Full Stack Developer</h1>

              </div>
              <div className="w-full flex justify-center  md:w-1/3    ">
                <div className="w-auto space-y-4">

                  <p className="  w-full    md:w-[300px] text-gray-700 dark:text-gray-400" >
                    My goal is to write clean, maintainable code and create seamless user experiences. I leverage modern technologies to develop innovative solutions. With a strong emphasis on responsive design and SEO optimization, I strive to deliver high-performance websites that engage users and meet client expectations.


                  </p>

                  <button onClick={handelscreen} className="px-7 transition-all duration-300 ease-in-out py-3 hover:opacity-70 bg-lok rounded-3xl text-gray-950">Contact me</button>
                </div>
              </div>
            </div>
            <div className="w-full flex-wrap-reverse gap-8 mt-10 md:mt-0 flex items-center justify-around ">
              <div className="space-y-3 md:order-1">
                <span>Find me on :</span>
                <div className="flex gap-4 ">
                  <Link href={'https://linkedin.com/in/umair-zakria-67477b33a'}
                    target="_blank"

                  >
                    <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin-circled--v1.png" alt="linkedin-circled--v1" />
                  </Link>
                  <Link
                    href={'https://www.facebook.com/profile.php?id=61565396470099'}
                    target="_blank"
                  >
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />

                  </Link>
                </div>
              </div>
              <div className="rounded-full  order-1  md:order-2   w-[300px] h-[300px]">
                <Image
                  alt="Umair Zakria"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    ...style,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.1s ease-out",
                  }}
                  src={me3} className="w-full h-full object-cover rounded-full  hover:shadow-gray-100 transition-all ease-in-out duration-700 shadow-lg shadow-gray-500  "


                />
              </div>
              <div className="space-y-3 md:order-3">
                <div className="flex gap-3 items-center ">
                  <img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/ffd401/trust--v1.png" alt="trust--v1" />
                  <span className="text-sm dark:text-gray-300 text-gray-700 dark:hover:text-white">Trusted by Clients</span>

                </div>
                <div className="flex gap-3  items-center">

                  <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/ffd401/graduation-cap.png" alt="graduation-cap" />
                  <span className="text-sm dark:text-gray-300 text-gray-700 dark:hover:text-white">Proven Excellence</span>
                </div>
                <div className="flex gap-3  items-center">
                  <img width="40" height="40" src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffd401/external-projects-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png" alt="external-projects-basic-ui-elements-2.2-sbts2018-solid-sbts2018" />
                  <span className="text-sm dark:text-gray-300 text-gray-700 dark:hover:text-white">Expert in Complex Projects
                  </span>
                </div>

              </div>


            </div>




          </div>
          <div className="border-t-2 w-full dark:border-gray-500"></div>


          <div className="relative skill text-white bg-[#ffffff33] dark:bg-[#202020be] bg-gradient-to-br from-yellow-100/30 via-transparent to-yellow-100/30  w-full min-h-[50vh] max-h-auto">
            <div className="absolute top-0 left-0 h-full w-full -z-20  bg-fixed bg-center bg-cover " style={{ backgroundImage: "url('https://images.pexels.com/photos/1022411/pexels-photo-1022411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} >

            </div>


            <div className="container  space-y-3 mx-auto py-20">

              <h1 className="text-2xl font-light px-2 text-black dark:text-white  "> As a Full Stack Developer I&apos;m Good <br /> Fit With <span className="text-lok">These Skills 👍</span></h1>
              <div ref={ref} className="flex gap-8  flex-wrap justify-center" >
                <div className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                  <h2 >HTML5 </h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">
                    {inView && (
                      <CountUp
                        start={0}
                        end={95}
                        duration={16}
                        suffix="%"
                      />
                    )}

                  </span>
                </div>
                <div className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="html-5--v1" />
                  <h2 >React.Js </h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">

                    {inView && (
                      <CountUp
                        start={0}
                        end={80}
                        duration={5}
                        suffix="%"
                      />
                    )}
                  </span>
                </div>
                <div className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s" alt="html-5--v1" />
                  <h2 >Next.Js </h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">

                    {inView && (
                      <CountUp
                        start={0}
                        end={85}
                        duration={5}
                        suffix="%"
                      />
                    )}
                  </span>
                </div>
                <div className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" className="rounded-full" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="html-5--v1" />
                  <h2 >Express.Js </h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">

                    {inView && (
                      <CountUp
                        start={0}
                        end={75}
                        duration={14}
                        suffix="%"
                      />
                    )}
                  </span>
                </div>
                {/* <div className="hidden md:flex md:flex-wrap md:gap-8 justify-center"> */}

                <div style={{ display: boxx }} className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="html-5--v1" />
                  <h2 >Tailwind CSS </h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">
                    {inView && (
                      <CountUp
                        start={0}
                        end={90}
                        duration={13}
                        suffix="%"
                      />
                    )}
                  </span>
                </div>

                <div style={{ display: boxx }} className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="html-5--v1" />
                  <h2 >CSS </h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">

                    {inView && (
                      <CountUp
                        start={0}
                        end={90}
                        duration={11}
                        suffix="%"
                      />
                    )}
                  </span>
                </div>
                <div style={{ display: boxx }} className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="60" height="60" className="rounded-full  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFywOk5LODkQHSkDyi7s-cLAhimZYn68n7g&s" alt="html-5--v1" />
                  <h2 >Framer Motion</h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">
                    {inView && (
                      <CountUp
                        start={0}
                        end={80}
                        duration={12}
                        suffix="%"
                      />
                    )}
                  </span>
                </div>
                <div style={{ display: boxx }} className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" className="  " src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/617eb4/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-regular-tal-revivo.png" alt="html-5--v1" />
                  <h2 >PhP</h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">
                    {inView && (
                      <CountUp
                        start={0}
                        end={85}
                        duration={10}
                        suffix="%"
                      />
                    )}
                  </span>
                </div>
                <div style={{ display: boxx }} className="bg-[#242422] w-[290px] py-4 border-b-lok border-b-2 border-0 rounded-2xl flex justify-around items-center">

                  <img width="48" height="48" className="  " src="https://img.icons8.com/color/48/mongodb.png" alt="html-5--v1" />
                  <h2 >MongoDb</h2>
                  <span className="bg-lok px-3 py-1 items-start text-black rounded-2xl ">
                    {inView && (
                      <CountUp
                        start={0}
                        end={95}
                        duration={10}
                        suffix="%"
                      />
                    )}

                  </span>
                </div>
                {/* </div> */}

                {isMobile &&

                  <div onClick={showme} className=" md:hidden bg-[#00000059] dark:bg-[#ffffff38] flex justify-center items-center w-full">
                    <button className="text-lg flex text-gray-300 flex-col justify-center items-center  p-4  text-center" >
                      <span>{text}</span>
                      <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/ffd502/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </button>

                  </div>
                }


              </div>
            </div>







          </div>
          <div className="w-full reasons dark:bg-[#1b2024] min-h-[80vh] py-16 max-h-auto ">
            <h1 className="text-2xl  md:text-5xl text-center">Main <span className="bg-lok rounded-xl text-white p-1 dark:bg-transparent dark:text-lok dark:underline">Reasons</span> To <span className="bg-lok rounded-xl text-white p-1 dark:bg-transparent dark:text-lok dark:underline">Choose Me</span></h1>
            <div className=" flex flex-wrap justify-center gap-4 container mx-auto py-10 ">
              <div className="bg-yellow-100 dark:bg-[#222b30] flex flex-col rounded-2xl items-center gap-5 h-auto py-16 w-[320px]  ">
                <img src="https://img.icons8.com/glyph-neue/64/ffd401/group-task.png" alt="" />
                <h2 className="text-2xl">Good Communication</h2>
                <p className="text-sm text-center w-3/4 text-gray-700 dark:hover:text-white dark:text-gray-300">I ensure you&apos;re always informed and involved, making the process smooth and straightforward from start to finish.</p>
              </div>
              <div className="bg-yellow-100 dark:bg-[#222b30] border-b-lok border-b-4  border-0 flex flex-col rounded-2xl items-center gap-5 h-auto py-16 w-[320px]  ">
                <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/ffd401/external-award-ecommerce-kmg-design-glyph-kmg-design.png" alt="" />
                <h2 className="text-2xl">Quality Work</h2>
                <p className="text-sm text-center w-3/4 text-gray-700 dark:hover:text-white dark:text-gray-300">I focus on delivering high-quality work on time, ensuring your project meets both your expectations and deadlines without any compromises.</p>
              </div>
              <div className="bg-yellow-100 dark:bg-[#222b30] flex flex-col rounded-2xl items-center gap-5 h-auto py-16 w-[320px]  ">
                <img src="https://img.icons8.com/ios-filled/64/ffd401/module.png" alt="" />
                <h2 className="text-2xl">Technical Expertise</h2>
                <p className="text-sm text-center w-3/4 text-gray-700 dark:hover:text-white dark:text-gray-300">With hands-on experience in modern web technologies like React, Next.js, and Tailwind CSS, I build scalable, responsive, and fast applications tailored to meet your specific needs.</p>
              </div>


            </div>

          </div>
          <div className=" service min-h-screen my-10  max-h-auto w-full relative bg-[#ffffff36] dark:bg-[#000000b2]">
            <div className="absolute -z-10 top-0 left-0 bg-cover bg-center bg-fixed h-full w-full"
              style={{ backgroundImage: "url(https://images.pexels.com/photos/8112091/pexels-photo-8112091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
            <h1 className="  text-3xl py-10 md:text-5xl text-center z-20 font-semibold"><span className="text-lok underline">Services to</span> Fit Your Needs</h1>
            <div className="container py-10 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto    ">

              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex flex-col md:flex-row items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffd502/windows10-personalization.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">Custom Web Applications</h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Creating secure, scalable, and tailored web solutions to meet your unique business needs with modern technologies.</p>
                </div>

              </div>
              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex  flex-col md:flex-row items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/ffd502/external-Mobile-Update-web-design-and-development-vectorslab-glyph-vectorslab.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">Maintenance and Updates</h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Providing seamless updates and proactive maintenance to keep your website secure, functional, and up-to-date.</p>
                </div>

              </div>
              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex flex-col md:flex-row  items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/50/ffd502/external-E-commerce-digital-marketing-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">E-commerce Solutions</h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Building secure, scalable, and user-friendly e-commerce platforms tailored to drive sales and enhance customer experience.</p>
                </div>

              </div>
              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex flex-col md:flex-row  items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/deco-glyph/48/ffd502/laptop-coding.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">Full Stack Web Applications</h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Developing end-to-end web applications with seamless front-end and back-end integration, tailored for performance and scalability.</p>
                </div>

              </div>
              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex flex-col md:flex-row  items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffd502/internet-browser--v1.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">Website Development</h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Designing and developing dynamic, user-centric websites that deliver exceptional performance and a seamless experience</p>
                </div>

              </div>
              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex flex-col  md:flex-row  items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/sf-black/50/ffd502/data-configuration.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">Frontend/Backend Development</h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Designing responsive, user-friendly interfaces with modern frontend frameworks and building secure, scalable backend systems. I ensure seamless API integration and high-performance applications tailored to your needs.</p>
                </div>

              </div>
              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex flex-col  md:flex-row  items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/ffd502/external-wordpress-most-associated-with-blogging-but-supports-other-types-of-web-content-logo-bold-tal-revivo.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">WordPress Development</h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Creating fully customized, secure, and responsive WordPress websites tailored to your business needs, including theme customization, plugin development, and e-commerce integration.</p>
                </div>

              </div>
              <div className="w-full dark:bg-[#222b30] bg-yellow-100 flex flex-col  md:flex-row  items-center gap-5 p-8 ">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffd502/bullish.png" alt="windows10-personalization" />
                <div className="h-full space-y-3">
                  <h2 className="text-2xl font-semibold">SEO Services
                  </h2>
                  <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Optimizing your website for search engines to improve rankings, drive organic traffic, and enhance online visibility with proven SEO techniques</p>
                </div>

              </div>


            </div>



          </div>

          <h1 className=' py-10 text-3xl md:text-5xl dark:bg-transparent font-semibold text-center'><span className="bg-lok dark:bg-transparent text-white p-2 dark:text-lok rounded-xl dark:underline" >Showcasing</span> My Most <span className="bg-lok rounded-xl dark:bg-transparent text-white p-2 dark:text-lok dark:underline">Loved</span>  Projects</h1>
          <div

            id='move'
            className='  mt-10  flex flex-wrap items-center justify-center   gap-20  p-2  mx-auto w-full  h-auto'>
            {data.slice(0, 4).map((data) => (

              <Cardpro key={data._id} name={data.name} discription={data.discription} skills={data.skills} sourcelink={data.sourcelink} images={data.imgs} />

            ))}



          </div>
          <div className="h-auto  py-1 my-9  bg-transparent w-full  ">
            <Marquee speed={30} direction='right' className="text-white h-full py-4 mt-8 text-md">



              {data.map((data, index) => (
                <div key={index} className='bg-transparent relative group rounded-xl w-[250px]  mx-10   h-[200px]'>

                  <img
                    onClick={() => { handelscreen2(data.imgs) }}
                    src={data.imgs[0]}
                    className=" w-full hover:shadow-2xl rounded-2xl object-cover hover:shadow-black cursor-pointer h-full     "


                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => { handelscreen2(data.imgs) }}


                    className="absolute rounded-b-2xl group-hover:block hidden text-lok bg-[#0000009d] text-xl p-4 w-full bottom-0  ">
                    <div>{data.name}</div>
                  </motion.div>

                </div>
              ))}

            </Marquee>


          </div>

          <h1 className=" text-3xl md:text-5xl text-center py-10 z-20 font-semibold ">Clients <span className="bg-lok dark:bg-transparent text-white p-2 dark:text-lok rounded-xl dark:underline" >Testimonials</span></h1>
          <div className="w-full Testimonials text-white  relative min-h-[100vh] flex flex-col gap-6 items-center justify-center max-h-auto">

            <div className="absolute bg-fixed bg-cover bg-center  top-0 left-0 h-full w-full"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1495757450029-09dbedacbc36?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
            >
            </div>
            <div className="bg-[#ffffff3b] rounded-3xl flex flex-col gap-6 backdrop-blur-md px-2 py-8  w-full md:p-14  md:w-3/4 min-h-[400px] max-h-auto">
              <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/ffd401/quote-left.png" alt="quote-left" />
              <Slider {...settings}>
                {feedback.map(feed => (
                  <div key={feed.id} className="space-y-6 px-2">

                    <p className="text-lg md:text-xl bg-[#00000011]  p-3 border-l-4 py-5  italic">{feed.dis}</p>
                    <div className="flex items-center gap-2">
                      <img src={feed.img} alt='Umair Zakria' className="w-[40px] object-cover h-[40px] rounded-full" />
                      <span className="text-lg text-lok ">{feed.name}</span>
                      <Link href={feed.link} target="_blank" className="text-lg text-gray-200 hover:underline">{feed.pname}</Link>
                    </div>
                  </div>

                ))}
              </Slider>


            </div>



          </div>
          < Contactui />





          {/* <motion.div
            initial={{ y: 300, opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,


              transition: {
                delay: 0,
                duration: 1
              },


            }}
            viewport={{ once: true }}


            id='umair' className=" md:p-9 px-1 py-4 mx-auto  flex md:flex-row flex-col-reverse  items-center justify-around mt-40 w-full">
            <div className='w-full md:w-1/2'>
              <h1 className='text-[70px] md:text-[100px] font-brittany '>Umair Zakria</h1>
              <p className='text-lg  dark:text-[#6aecf8] italic md:text-left text-center  mb-10 px-2'>Web Developer</p>
              <p className=' font-light text-lg leading-[2] px-2 md:text-left text-center  '>
                I am Skilled Full-Stack Developer with expertise in <span className='text-xl dark:text-[#6aecf8] font-semibold '>React.js, Next.js, and Express.js,</span> delivering responsive,
                user-friendly web applications. Proficient in <span className='text-xl dark:text-[#6aecf8] font-semibold '> HTML5, CSS, Tailwind CSS, MongoDb, and JavaScript,</span>with a
                focus on clean, maintainable code and seamless user experiences. Passionate about leveraging modern
                technologies to build innovative solutions. With a strong focus on responsive design and SEO optimization, I aim to deliver high-performance websites that resonate with users and clients alike.


              </p>
              <div className="w-full  flex items-center md:justify-start justify-center">


                <button onClick={handelscreen} className='px-6 py-4 text-lg bg-black border-black   dark:bg-[#6aecf8] border dark:border-[#6aecf8] hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white  hover:text-black transition-all ease-in-out duration-1000 mt-5 text-white dark:text-black'>Contact Me</button>
              </div>


            </div>
            <Image
              src={me}
              alt="Umair Zakria"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                ...style,
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out",
              }}

              className="w-[340px] rounded-md  h-[550px] object-cover hover:-skew-y-3 hover:scale-95 hover:shadow-gray-100 transition-all ease-in-out duration-700 shadow-2xl shadow-gray-400"
            />



          </motion.div> */}
        </div>
        <Footer />
      </>)}
    </>

  )
}

export default Page


// , ,, , 