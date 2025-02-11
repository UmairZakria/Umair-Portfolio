
'use client'
import React, { useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Cardpro from '@/components/Cardpro';
import { useEffect } from 'react';
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import me3 from '@/public/ui/me3.jpeg'
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from 'react-responsive';
import Contactui from "@/components/Contactui";
import { useRouter } from 'next/navigation'
import Skillcard from "./skillcard"
import { format } from 'date-fns';
import comunigif from '@/public/ui/comunigif.gif'
import qualitygif from '@/public/ui/qualitygif.gif'
import techgif from '@/public/ui/techgif.gif'
import Textslow from "./Textslow";


import Slider from 'react-slick';
const Main = (Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const rout = useRouter()


  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  const [data, setData] = useState(Props.data)
  const [data2, setData2] = useState(Props.data2)
  const [boxx, setBoxx] = useState('none')

  const skills = [
    { type: 'framework', name: "React.js", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", proficiency: 'expert', duration: 5 },
    { type: 'framework', name: "Next.js", icon: "https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=FFFFFF", proficiency: 'expert', duration: 5 },
    { type: 'framework', name: "Express.js", icon: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png", proficiency: 'expert', duration: 14 },
    { type: 'lang', name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png", proficiency: 'expert', duration: 16 },
    { type: 'framework', name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwind_css.png", proficiency: 'expert', duration: 13 },
    { type: 'lang', name: "CSS", icon: "https://img.icons8.com/color/48/css3.png", proficiency: 'expert', duration: 11 },
    { type: 'lang', name: "Python", icon: "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=000000", proficiency: 'expert', duration: 11 },
    { type: 'lang', name: "Javascirpt", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", proficiency: 'expert', duration: 11 },
    { type: 'lang', name: "PHP", icon: "https://img.icons8.com/officexs/80/php-logo.png", proficiency: 'expert', duration: 11 },


    { type: 'animation', name: "Framer Motion", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFywOk5LODkQHSkDyi7s-cLAhimZYn68n7g&s", proficiency: 'expert', duration: 12 },
    { type: 'database', name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png", proficiency: 'expert', duration: 10 },
    { type: 'database', name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png", proficiency: 'expert', duration: 10 },
    { type: 'database', name: "PostgreSQL", icon: "https://img.icons8.com/plasticine/100/postgreesql.png", proficiency: 'expert', duration: 10 },
    { type: 'framework', name: "Flask", icon: "https://img.icons8.com/ios-filled/250/FFFFFF/flask.png", proficiency: 'expert', duration: 10 },

  ];


  const [context, setContext] = useState(false)

  const handelredrict = (title) => {
    rout.push(`/Article/${title}`);


  }

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
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // Large screen breakpoint (can be adjusted)
        settings: {
          slidesToShow: 3, // Show 3 slides on larger screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screen breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          arrows: true,

        },
      },

      {
        breakpoint: 768, // Mobile breakpoint (can be adjusted)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
          arrows: false,

        },
      },
    ],
    arrows: true,

  };

  const feedback = [
    {
      id: 0,
      dis: "Umair did an amazing job on our website. He understood exactly what we needed and delivered a fast, responsive site that looks great. The whole process was smooth, and I’d definitely work with him again.",
      name: "Shah Rukh, ",
      link: "https://supersubofficials.com/",
      pname: "SuperSubOfficials.com",
      img: "https://i.imgur.com/4F0kocC.png"
    },
    {
      id: 1,
      dis: "Umair developed a Bus Management System for my final-year project, and it turned out even better than I expected. He paid attention to every detail, making the system easy to use and highly efficient. Highly recommended!",
      name: "Sameer Ali, ",
      link: "https://github.com/UmairZakria/BMS",
      pname: "GitHub/BMS",
      img: "https://i.imgur.com/QlbPYTD.png"
    },
    {
      id: 2,
      dis: "I needed a blogging website, and Umair built exactly what I had in mind. The design is clean, it's easy to use, and everything runs smoothly. Super happy with the result!",
      name: "Zain Mukhtar, ",
      link: "https://zainblog-seven.vercel.app/",
      pname: "Vercel.app",
      img: "https://i.imgur.com/pTXOfwm.png"
    }
  ];
  
  useEffect(() => {
    if (isDesktop) {
      setBoxx('flex')

    } else if (isTablet) {
      setBoxx('flex')
    }

  }, [isMobile, isDesktop, isTablet])


  const framewokrs = `Building dynamic, scalable, and responsive applications using modern web frameworks, ensuring efficient development and seamless user experiences. `
  const langs = `Proficient in developing applications with modern programming languages, ensuring code quality, maintainability, and performance.`
  const database = `Experienced in designing, managing, and optimizing 
relational and NoSQL databases, ensuring data integrity, 
efficiency, and scalability.`

  return (
    <>


      <Navbar />
      <div className=''>
        {context && <Contact onClose={handelclose} />}
        {/* {context2 && <Screen images={listimage} onClose={handelclose2} />} */}

        <div id="umair" className='relative  mx-auto main   flex py-[60px] md:py-[50px] flex-wrap  w-full h-full  md:min-h-[calc(100vh-40px)] md:max-h-auto '>


          <div className="flex w-full px-5 flex-wrap gap-4  justify-around">

            <div className="space-y-7 w-full md:w-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl  ">I&apos;m a Full Stack</h1>

              <h1 className="bg-lok text-white dark:px-0  px-3 md:p-3 dark:bg-transparent rounded-xl  dark:text-[#ffdc2e] text-3xl md:text-5xl lg:text-6xl   dark:underline">Web Developer</h1>

            </div>
            <div className="w-full flex justify-center  md:w-1/3    ">
              <div className="w-auto space-y-4">

                <p className="  w-full    md:w-[300px] dark:hover:text-white transition-all ease-in-out duration-100 text-gray-700 dark:text-gray-200" >
                Hey, my name is Umair Zakria. I create modern, responsive websites that are fast, easy to use, and work smoothly on any device. Using technologies like React, Next.js, and MongoDB, I build web solutions that are both scalable and user-friendly.

                </p>

                <button onClick={handelscreen} className="px-7 transition-all border-2 border-gray-500 dark:border-gray-200  duration-300 ease-in-out py-3 hover:opacity-70 bg-lok rounded-3xl text-gray-950">Contact me</button>
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
            <div className="rounded-full  order-1  md:order-2   w-[320px] h-[320px]">
              <Image
                alt="Umair Zakria"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  ...style,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
                src={me3} className="w-full h-full animate-morph hover:shadow-xl shadow-lg  border-4 border-gray-400 dark:border-gray-200 object-cover rounded-full  hover:shadow-lok cursor-grab transition-all ease-in-out duration-1000  shadow-lok  "


              />
            </div>
            <div className="space-y-3 md:order-3">
              <div className="flex gap-3 items-center ">
                <img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/ffd401/trust--v1.png" alt="trust--v1" />
                <span className="text-sm dark:text-gray-200 text-gray-700 dark:hover:text-white">Trusted by Clients</span>

              </div>
              <div className="flex gap-3  items-center">

                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/ffd401/graduation-cap.png" alt="graduation-cap" />
                <span className="text-sm dark:text-gray-200 text-gray-700 dark:hover:text-white">Proven Excellence</span>
              </div>
              <div className="flex gap-3  items-center">
                <img width="40" height="40" src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffd401/external-projects-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png" alt="external-projects-basic-ui-elements-2.2-sbts2018-solid-sbts2018" />
                <span className="text-sm dark:text-gray-200 text-gray-700 dark:hover:text-white">Expert in Complex Projects
                </span>
              </div>

            </div>


          </div>




        </div>
        <div className="border-t-2 w-full dark:border-gray-500"></div>


        <div className="relative skill text-white bg-[#ffffff33] dark:bg-[#20202073] w-full min-h-[100vh] max-h-auto">
          <div
            className="absolute top-0 left-0 h-full w-full -z-20 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/1022411/pexels-photo-1022411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
          ></div>
          <div className="container space-y-32 mx-auto py-20">
            <h1 className="text-3xl text-center font-light px-2 text-black dark:text-white">
              As a Full Stack Developer I&apos;m Good <br /> Fit With <span className="text-lok font-semibold">These Skills 👍</span>
            </h1>
            <div className="flex gap-2 md:flex-nowrap items-center justify-center flex-wrap  ">
              <div className="w-full  md:3/4 lg:w-1/2 font-light text-white text-center text-2xl leading-10 my-auto px-5">

                <Textslow text={framewokrs} />
              </div>
              <div className="flex-grow">

                <div
                  className="flex md:border-l-2 md:border-b-0 border-b-2 pb-6 border-gray-500 gap-8 md:gap-8 flex-wrap justify-center"
                >
                  {skills.filter((skill) => skill.type == 'framework').map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      viewport={{ once: true }}
                      whileInView={
                        {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: index * 0.1,
                          },
                        }
                      }
                    >
                      <Skillcard skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex  md:flex-row-reverse  gap-6 md:flex-nowrap items-center justify-center flex-wrap">
              <div className="w-full  md:3/4 lg:w-1/2 font-light text-white text-center text-2xl leading-10 my-auto px-5">
                  <Textslow text={langs} />
              </div>
              <div className="flex-grow">

                <div
                  ref={ref}
                  className="flex md:border-r-2 border-b-2 md:border-b-0 pb-6  border-gray-500 gap-8 md:gap-8 flex-wrap justify-center">

                  {skills.filter((skill) => skill.type == 'lang').map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      viewport={{ once: true }}
                      whileInView={
                        {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: index * 0.1,

                          },
                        }

                      }
                    >
                      <Skillcard skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-6 md:flex-nowrap items-center justify-center flex-wrap   ">
              <div className="w-full md:w-1/2 font-light text-white text-center text-2xl leading-10 my-auto px-5">
                  <Textslow text={database} />
              </div>
              <div className="flex-grow">

                <div
                  className="flex border-l-2  border-gray-500 gap-8 md:gap-8 flex-wrap justify-center">

                  {skills.filter((skill) => skill.type == 'database').map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      viewport={{ once: true }}

                      whileInView={
                        {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: index * 0.1,
                          },
                        }


                      }
                    >
                      <Skillcard skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full reasons dark:bg-[#1b2024] min-h-[80vh] px-3 py-16 max-h-auto ">
          <h1 className="text-2xl  md:text-5xl text-center">Main <span className="bg-lok rounded-xl text-white p-1 dark:bg-transparent dark:text-lok dark:underline">Reasons</span> To <span className="bg-lok rounded-xl text-white p-1 dark:bg-transparent dark:text-lok dark:underline">Choose Me</span></h1>
          <div className=" flex flex-wrap justify-center gap-6 container mx-auto py-10 ">
            <motion.div initial={{opacity:0,x:-150}} viewport={{ once: true }} whileInView={{opacity:1, x:0 ,transition:{delay:0.8,duration:0.3}}} whileHover={{ scale: 1.05 }} className="bg-white shadow-lg dark:bg-[#222b30] flex flex-col rounded-2xl items-center   h-auto py-16 w-full gap-2 md:w-[250px] lg:w-[320px]  ">
              <Image
                className=" object-cover  size-[80px]  "
                src={comunigif} 
                alt="Loading..."
              />
              <h2 className="text-2xl">Good Communication</h2>
              <p className="text-sm text-center w-3/4 text-gray-700 dark:hover:text-white dark:text-gray-300"></p>
              <Textslow delay={0.1} styles="text-sm text-center w-3/4 text-gray-700 dark:hover:text-white dark:text-gray-300" text={"I ensure you're always informed and involved, making the process smooth and straightforward from start to finish."} />
            </motion.div>
            <motion.div initial={{opacity:0,y:200}} viewport={{ once: true }} whileInView={{opacity:1, y:0 ,transition:{delay:0.2,duration:0.4}}} whileHover={{ scale: 1.05 }}  className="bg-white shadow-lg dark:bg-[#2f3b42] border-b-lok border-b-4  border-0 flex flex-col rounded-2xl items-center gap-5 h-auto py-16 w-full md:w-[250px] lg:w-[320px]  ">
              <Image
                className=" object-cover    "
                src={qualitygif} 
                alt="Loading..."
              />
              <h2 className="text-2xl">Quality Work</h2>
              <Textslow delay={0.1} text={"I focus on delivering high-quality work on time, ensuring your project meets both your expectations and deadlines without any compromises."} styles="text-sm text-center w-3/4 text-gray-700 dark:hover:text-white dark:text-gray-300" />
            </motion.div>
            <motion.div initial={{opacity:0,x:150}} viewport={{ once: true }} whileInView={{opacity:1, x:0 ,transition:{delay:0.8,duration:0.3}}} whileHover={{ scale: 1.05 }}  className="bg-white shadow-lg dark:bg-[#222b30] flex flex-col rounded-2xl items-center gap-5 h-auto py-16 w-full md:w-[320px] ">
              <Image
                className=" object-cover    "
                src={techgif} 
                alt="Loading..."
              />
              <h2 className="text-2xl">Technical Expertise</h2>
              <Textslow delay={0.1} text={'With hands-on experience in modern web technologies like React, Next.js, and Tailwind CSS, I build scalable, responsive, and fast applications tailored to meet your specific needs.'} styles="text-sm text-center w-3/4 text-gray-700 dark:hover:text-white dark:text-gray-300" />
            </motion.div>


          </div>

        </div>
        <div className=" service min-h-screen  flex flex-col items-center justify-center p-3 md:p-16  max-h-auto w-full relative bg-[#ffffff1c] dark:bg-[#000000b2]">
          <div className="absolute -z-10 top-0 left-0 bg-cover bg-center bg-fixed h-full w-full"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/8112091/pexels-photo-8112091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
          <h1 className="  text-3xl py-10 md:text-5xl text-center z-20 font-semibold"><span className="dark:text-lok bg-lok text-white rounded-md p-2 dark:bg-transparent dark:underline ">Services to</span> Fit Your Needs</h1>
          <div className="container  grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto    ">

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}

              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex flex-col lg:flex-row items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffd502/windows10-personalization.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">Custom Web Applications</h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Creating secure, scalable, and tailored web solutions to meet your unique business needs with modern technologies.</p>
              </div>

            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}
              whileTap={{ scale: 0.99 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex  flex-col lg:flex-row items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/ffd502/external-Mobile-Update-web-design-and-development-vectorslab-glyph-vectorslab.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">Maintenance and Updates</h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Providing seamless updates and proactive maintenance to keep your website secure, functional, and up-to-date.</p>
              </div>

            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}
              whileTap={{ scale: 0.99 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex flex-col lg:flex-row  items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/50/ffd502/external-E-commerce-digital-marketing-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">E-commerce Solutions</h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Building secure, scalable, and user-friendly e-commerce platforms tailored to drive sales and enhance customer experience.</p>
              </div>

            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}
              whileTap={{ scale: 0.99 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex flex-col lg:flex-row  items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/deco-glyph/48/ffd502/laptop-coding.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">Full Stack Web Applications</h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Developing end-to-end web applications with seamless front-end and back-end integration, tailored for performance and scalability.</p>
              </div>

            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}
              whileTap={{ scale: 0.99 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex flex-col lg:flex-row  items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffd502/internet-browser--v1.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">Website Development</h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Designing and developing dynamic, user-centric websites that deliver exceptional performance and a seamless experience</p>
              </div>

            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}
              whileTap={{ scale: 0.99 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex flex-col  lg:flex-row  items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/sf-black/50/ffd502/data-configuration.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">Frontend/Backend Development</h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Designing responsive, user-friendly interfaces with modern frontend frameworks and building secure, scalable backend systems. I ensure seamless API integration and high-performance applications tailored to your needs.</p>
              </div>

            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}
              whileTap={{ scale: 0.99 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex flex-col  lg:flex-row  items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/ffd502/external-wordpress-most-associated-with-blogging-but-supports-other-types-of-web-content-logo-bold-tal-revivo.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">WordPress Development</h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Creating fully customized, secure, and responsive WordPress websites tailored to your business needs, including theme customization, plugin development, and e-commerce integration.</p>
              </div>

            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.9,
                y: 100

              }}
              whileHover={{ scale: 1.01, cursor: 'pointer' }}
              whileTap={{ scale: 0.99 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scaleX: 1,

                transition: {
                  delay: 0.1,
                  duration: 1.5,
                },


              }}
              viewport={{ once: true }}
              className="w-full dark:bg-[#222b30] bg-white shadow-lg flex flex-col  lg:flex-row  items-center gap-5 p-8 ">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffd502/bullish.png" alt="windows10-personalization" />
              <div className="h-full space-y-3">
                <h2 className="text-2xl font-semibold">SEO Services
                </h2>
                <p className="text-[16px]  dark:text-gray-300 dark:hover:text-white ">Optimizing your website for search engines to improve rankings, drive organic traffic, and enhance online visibility with proven SEO techniques</p>
              </div>

            </motion.div>


          </div>



        </div>

        <h1 className=' py-10 text-3xl md:text-5xl dark:bg-transparent font-semibold text-center'><span className="bg-lok dark:bg-transparent text-white p-2 dark:text-lok rounded-xl dark:underline" >Showcasing</span> My Most <span className="bg-lok rounded-xl dark:bg-transparent text-white p-2 dark:text-lok dark:underline">Loved</span>  Projects</h1>
        <div className='project  container  mt-10  flex flex-wrap justify-evenly items-center  gap-20  p-2  mx-auto '>

          {data.slice(0, 4).map((data) => (

            <Cardpro key={data._id} name={data.name} discription={data.discription} skills={data.skills} sourcelink={data.sourcelink} images={data.imgs} />

          ))}



        </div>


        <h1 className=" text-3xl md:text-5xl text-center py-16 z-20 font-semibold ">Clients <span className="bg-lok dark:bg-transparent text-white p-2 dark:text-lok rounded-xl dark:underline" >Testimonials</span></h1>
        <div className="w-full Testimonials text-white  relative min-h-[100vh] flex flex-col gap-6 items-center justify-center max-h-auto">

          <div className="absolute bg-fixed bg-cover bg-center  top-0 left-0 h-full w-full"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/25857376/pexels-photo-25857376/free-photo-of-beige-armchair-on-a-white-stand-in-front-of-the-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
          >
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.1 }}
            className="bg-[#ffffff3b] rounded-3xl flex flex-col gap-6 backdrop-blur-md px-2 py-8  w-full md:p-14  md:w-3/4 min-h-[400px] max-h-auto">
            <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/ffd401/quote-left.png" alt="quote-left" />
            <Slider {...settings}>
              {feedback.map(feed => (
                <div key={feed.id} className="space-y-6 px-2">

                  <p className="text-lg md:text-xl bg-[#00000011] text-black  p-3 border-l-4 border-gray-500 py-5  italic">{feed.dis}</p>
                  <div className="flex items-center gap-2">
                    <img src={feed.img} alt='Umair Zakria' className="w-[40px] object-cover h-[40px] rounded-full" />
                    <span className="text-lg text-lok ">{feed.name}</span>
                    <Link href={feed.link} target="_blank" className="text-lg text-gray-800 hover:underline ">{feed.pname}</Link>
                  </div>
                </div>

              ))}
            </Slider>


          </motion.div>



        </div>
        < Contactui />
        <div className="blogs container mx-auto  py-16">
          <h1 className="text-4xl my-5">Explore More:</h1>
          <Slider {...settings2}>

            {
              data2.map((data, index) => (
                <div key={index} className=" px-2">

                  <div className='border-gray-400 shadow-2xl  dark:bg-[#00000041] bg-[#ffffff1c]  dark:border-gray-700   rounded-lg border  cursor-pointer space-y-1 pb-3 flex flex-col'>
                    <img src={data.image} onClick={() => handelredrict(data.slug)} className='object-cover  rounded-t-lg w-full h-[200px]' alt={data.title} />

                    <div onClick={() => handelredrict(data.slug)} className='space-y-2 px-2'>
                      <h1 className='dark:text-[#ffffffe0] md:text-3xl text-xl  lg:text-2xl line-clamp-2 font-semibold'>{data.title} </h1>
                      <div className='flex w-full items-center justify-between  text-gray-800 font-normal dark:text-[#ffffffe0]' >
                        <span className='flex items-center gap-2 '><img width="24" height="24" src="https://img.icons8.com/windows/32/ffd502/calendar.png" alt="calendar" /> {data.date ? format(new Date(data.date), 'MMM dd yyyy') : ''}</span>

                      </div>
                      <p className='text-sm dark:text-gray-300 text-gray-800   line-clamp-2'>{data.discription}</p>
                    </div>


                  </div>
                </div>



              ))
            }
          </Slider>



        </div>
      </div>
      <Footer />

    </>

  )
}

export default Main


