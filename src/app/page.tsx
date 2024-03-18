'use client'

import Accordion from "@/app/components/Accordion";
import {useState} from "react";
import Image from 'next/image';
import CircleProgressBar from "@/app/components/CircleProgressBar";
import WidgetCard from "@/app/components/WidgetCard";
import SideBar from "@/app/components/SideBar";

export const faqs = [
    {
        id: 1,
        header: 'What are the most challenging tasks on iOS',
        text: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eniconsectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
    {
        id: 2,
        header: 'What are my favorite frameworks and libs',
        text: 'Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'tetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
    {
        id: 3,
        header: 'What kind of mistakes usual for iOS devs?',
        text: 'Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'tetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
    {
        id: 4,
        header: 'Are there any advices for iOS dev beginners?',
        text: 'Lorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eniectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
]

const Home = () => {
    const [active, setActive] = useState(null);
    const [ isSideBarShown, setSideBarShown ] = useState<boolean>(false);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    const handleShowSideBar = () => {

        setSideBarShown(true);
        document.body.style.overflow = 'hidden';

    }

  return (
      <>
          <header>
              <div className={'flex container mx-auto mt-8 max-w-2xl ml-[35%]'}>
                  <div className={'flex-initial w-[50%]'}>
                      <span className={'text-xl text-white font-bold'}>Developer</span>
                  </div>
                  <div className={'flex-initial w-[50%]'}>
                      <nav>
                          <ul className={'flex space-x-8 font-bold pl-[50%]'}>
                              <li className={'text-xl text-white'}>Home</li>
                              <li className={'text-xl text-white sm:text-red'}>Blog</li>
                          </ul>
                      </nav>
                  </div>
              </div>
              <div className={'absolute top-6 right-14'}>
                  <button
                      className={'text-white w-12 h-12 bg-secondColor rounded-full flex justify-center items-center'}
                        onClick={handleShowSideBar}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 hover:opacity-60">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                  </button>
              </div>
          </header>
          <div className={'container mx-auto max-w-screen-2xl'}>
              <div className={'flex'}>
                  <div className={'mt-8'}>
                      <div className={'sticky top-0'}>
                          <div className={'ml-8 bg-mainColor h-[395px]'}>
                              <WidgetCard/>
                          </div>
                          <div className={'ml-8 bg-secondColor w-[290px] h-[130px] text-center'} >
                              <button className={'bg-black text-white rounded-full text-xl mt-10 px-2 py-2 hover:opacity-60'}>DOWNLOAD CV</button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <section className={'bg-secondColor mt-8 ml-8 h-[427px]'}>
                          <h1 className={'text-white font-bold text-2xl ml-16 pt-8 font-serif'}>ABOUT ME</h1>
                          <p className={'text-white font-bold mx-16 mt-8 text-xl px-13'}>Hello, I’m Robert Smith</p>
                          <p className={'text-white font-thin mx-16 mt-8 text-xl px-13'}>Hello! I’m Robert Smith. Senior Web Developer specializing in front end development.
                              Experienced with all stages of the development cycle for dynamic web projects.
                              Well-versed in numerous programming languages including JavaScript, SQL, and C.
                              Stng background in project management and customer relations.</p>
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8 flex flex-wrap'}>
                          <div className={'flex-initial w-1/2 mt-8 pl-6'}>
                              <h3 className={'text-gray-500 font-bold text-xl'}>personal information</h3>
                              <div className={'flex mt-8 text-white space-x-2'}>
                                  <span className={'font-bold w-28'}>FULL NAME</span>
                                  <p className={'w-1/2 break-words'}>Robert Smith</p>
                              </div>
                              <div className={'flex mt-2 text-white space-x-2'}>
                                  <span className={'font-bold w-28'}>D.O.B.</span>
                                  <p className={'w-1/2'}>05 June 1988</p>
                              </div>
                              <div className={'flex mt-2 text-white space-x-2'}>
                                  <span className={'font-bold w-28'}>ADDRESS</span>
                                  <p className={'w-1/2 break-words'}>24058, Sumy, Ukraine, Liutte 27, BE</p>
                              </div>
                              <div className={'flex mt-2 text-white space-x-2'}>
                                  <span className={'font-bold w-28'}>E-MAIL</span>
                                  <p className={'w-1/2 break-words'}>robertsmith@company.com</p>
                              </div>
                              <div className={'flex mt-2 text-white space-x-2'}>
                                  <span className={'font-bold w-28'}>PHONE</span>
                                  <p className={'w-1/2 break-words'}>+1 256 254 84 56</p>
                              </div>
                              <div className={'flex mt-2 text-white space-x-2'}>
                                  <span className={'font-bold w-28'}>FREELANCE</span>
                                  <p className={'w-1/2 break-words'}>till March 25, 2016</p>
                              </div>
                          </div>
                          <div className={'flex-initial w-1/2 mt-8 pl-6'}>
                                  <h3 className={'text-gray-500 font-bold text-xl'}>languages</h3>
                                  <div className={'text-white mt-8'}>
                                      <strong className={'font-bold w-28'}>Ukraine</strong>
                                      <div>
                                          <div className={'flex mt-2 space-x-2 items-center'}>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-secondColor border-2 border-mainColor rounded-full '}></div>
                                              <span className={'text-gray-500'}>native</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={'text-white mt-4'}>
                                      <strong className={'font-bold w-28'}>Russian</strong>
                                      <div>
                                          <div className={'flex mt-2 space-x-2 items-center'}>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-secondColor border-2 border-mainColor rounded-full '}></div>
                                              <span className={'text-gray-500'}>native</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={'text-white mt-4 h-32'}>
                                      <strong className={'font-bold w-28'}>English</strong>
                                      <div>
                                          <div className={'flex mt-2 space-x-2 items-center'}>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-secondColor border-2 border-mainColor rounded-full '}></div>
                                              <div className={'h-4 w-4 bg-secondColor border-2 border-mainColor rounded-full '}></div>
                                              <span className={'text-gray-500'}>fluent</span>
                                          </div>
                                      </div>
                                  </div>
                          </div>
                          <hr className={'border-1 border-gray-800 w-5/6 mx-auto mt-4'}/>
                          <div className={'flex-initial w-1/2 mt-6 pl-6'}>
                            <h3 className={'text-gray-500 font-bold text-xl'}>Professional Skills</h3>
                              <div>
                                  <div className={'flex mt-6 font-bold justify-between text-white'}>
                                      <span>WordPress</span>
                                      <div>85%</div>
                                  </div>
                                  <div className={'flex bg-white w-full'}>
                                      {/*<div className={'w-[85%] bg-white'} color={'red'} max={'100'} value={'70%'}></div>*/}
                                      <hr className={'border-2 border-mainColor w-[85%]'}/>
                                      <hr className={'border-2  w-[15%]'}/>
                                  </div>
                              </div>
                              <div>
                                  <div className={'flex mt-2 font-bold justify-between text-white'}>
                                      <span>JavaScript</span>
                                      <div>95%</div>
                                  </div>
                                  <div className={'flex'}>
                                      <hr className={'border-2 border-mainColor w-[95%]'}/>
                                      <hr className={'border-2 w-[5%]'}/>
                                  </div>
                              </div>
                              <div>
                                  <div className={'flex mt-2 font-bold justify-between text-white'}>
                                      <span>React</span>
                                      <div>95%</div>
                                  </div>
                                  <div className={'flex'}>
                                      <hr className={'border-2 border-mainColor w-[95%]'}/>
                                      <hr className={'border-2 w-[5%]'}/>
                                  </div>
                              </div>
                              <div>
                                  <div className={'flex mt-2 font-bold justify-between text-white'}>
                                      <span>Redux</span>
                                      <div>95%</div>
                                  </div>
                                  <div className={'flex'}>
                                      <hr className={'border-2 border-mainColor w-[95%]'}/>
                                      <hr className={'border-2 w-[5%]'}/>
                                  </div>
                              </div>
                              <div className={'mb-6'}>
                                  <div className={'flex mt-2 font-bold justify-between text-white'}>
                                      <span>Ruby</span>
                                      <div>65%</div>
                                  </div>
                                  <div className={'flex'}>
                                      <hr className={'border-2 border-mainColor w-[65%]'}/>
                                      <hr className={'border-2 w-[35%]'}/>
                                  </div>
                              </div>
                          </div>
                          <div className={'flex-initial w-1/2 mt-6 pl-6'}>
                              <h3 className={'text-gray-500 font-bold text-xl'}>Professional Skills</h3>
                              <div className={'flex justify-center py-8'}>
                                  <CircleProgressBar
                                      progress={'95'}
                                      svgSize={'100'}
                                      name={'HTML & CSS'}
                                  />
                                  <CircleProgressBar
                                      progress={'88'}
                                      svgSize={'100'}
                                      name={'PHP & MySQL'}
                                  />
                                  <CircleProgressBar
                                      progress={'90'}
                                      svgSize={'100'}
                                      name={'Photoshop'}
                                  />
                              </div>
                          </div>
                          <hr className={'border-1 border-gray-800 w-5/6 mx-auto mt-4'}/>
                          <div className={'flex-initial w-1/2 mt-6 pl-6'}>
                              <h3 className={'text-gray-500 font-bold text-xl'}>Styled List</h3>
                               <ul>
                                   <li className={'flex text-white font-bold mt-2'}>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="w-6 h-6 mr-6">
                                           <path fill-rule="evenodd"
                                                 d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                 clip-rule="evenodd"/>
                                       </svg>
                                       <span>Customer oriented</span>
                                   </li>
                                   <li className={'flex text-white font-bold'}>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="w-6 h-6 mr-6">
                                           <path fill-rule="evenodd"
                                                 d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                 clip-rule="evenodd"/>
                                       </svg>
                                       <span>Handling Multi Tasks</span>
                                   </li>
                                   <li className={'flex text-white font-bold'}>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="w-6 h-6 mr-6">
                                           <path fill-rule="evenodd"
                                                 d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                 clip-rule="evenodd"/>
                                       </svg>
                                       <span>Creative Thinking</span>
                                   </li>
                                   <li className={'flex text-white font-bold'}>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="w-6 h-6 mr-6">
                                           <path fill-rule="evenodd"
                                                 d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                 clip-rule="evenodd"/>
                                       </svg>
                                       <span>Self Motivated</span>
                                   </li>
                                   <li className={'flex text-white font-bold'}>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="w-6 h-6 mr-6">
                                           <path fill-rule="evenodd"
                                                 d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                 clip-rule="evenodd"/>
                                       </svg>
                                       <span>Managerial Skills</span>
                                   </li>
                               </ul>
                          </div>
                          <div className={'flex-initial w-1/2 mt-6 pl-6 pb-10'}>
                              <h3 className={'text-gray-500 font-bold text-xl'}>Icon List</h3>
                              <ul>
                                  <li className={'flex text-white font-bold mt-2'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                           className="w-6 h-6">
                                          <path fill-rule="evenodd"
                                                d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                                                clip-rule="evenodd"/>
                                      </svg>
                                      <span className={'ml-4'}>Music is my Life</span>
                                  </li>
                                  <li className={'flex text-white font-bold mt-2'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                           className="w-6 h-6">
                                          <path fill-rule="evenodd"
                                                d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                                                clip-rule="evenodd"/>
                                      </svg>
                                      <span className={'ml-4'}>I love music</span>
                                  </li>
                                  <li className={'flex text-white font-bold mt-2'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                           className="w-6 h-6">
                                          <path fill-rule="evenodd"
                                                d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                                                clip-rule="evenodd"/>
                                      </svg>
                                      <span className={'ml-4'}>More Music</span>
                                  </li>
                                  <li className={'flex text-white font-bold mt-2'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                           className="w-6 h-6">
                                          <path fill-rule="evenodd"
                                                d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                                                clip-rule="evenodd"/>
                                      </svg>
                                      <span className={'ml-4'}>Music is everything</span>
                                  </li>
                              </ul>
                          </div>
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8'}>
                            <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>WORK EXPERIENCE</h2>
                          <div>
                              <div className={'flex pl-6 pt-8'}>
                                  <span className={'flex-initial w-1/4 h-8 bg-mainColor text-center leading-8 '}>
                                      <span className={'text-white'}>2015-2017</span>
                                  </span>
                                  <div className={'w-0 h-0 border-t-[16px] border-t-transparent border-l-[14px] border-l-mainColor border-b-[16px] border-b-transparent'}></div>
                                  <div className={'mt-4 ml-4'}>
                                      <div className={'w-1 h-1 bg-white rounded-full'}></div>
                                      <div className={'h-[150%] bg-mainColor w-[2px] ml-[1px]'}></div>
                                  </div>
                                  <div className={'pl-6 flex-initial w-3/4'}>
                                      <h3 className={'text-white font-bold'}>FULL STACK DEVELOPER</h3>
                                      <img className={'mt-4 mb-2'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-envato.png" alt="company"/>
                                      <span className={'text-gray-500'}>Loft Studio</span>
                                      <p className={'text-white pt-4'}>Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.</p>
                                  </div>
                              </div>
                              <div className={'flex pl-6 pt-8'}>
                                  <span className={'flex-initial w-1/4 h-8 bg-mainColor text-center leading-8 '}>
                                      <span className={'text-white'}>2012-2015</span>
                                  </span>
                                  <div className={'w-0 h-0 border-t-[16px] border-t-transparent border-l-[14px] border-l-mainColor border-b-[16px] border-b-transparent'}></div>
                                  <div className={'mt-4 ml-4'}>
                                      <div className={'w-1 h-1 bg-white rounded-full'}></div>
                                      <div className={'h-[130%] bg-mainColor w-[2px] ml-[1px]'}></div>
                                  </div>
                                  <div className={'pl-6 flex-initial w-3/4'}>
                                      <h3 className={'text-white font-bold'}>SYSTEMS ANALYST / WEB DEVELOPER</h3>
                                      <img className={'mt-4 mb-2'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-bootstrap.png" alt="company"/>
                                      <span className={'text-gray-500'}>Noemi Productions LTD</span>
                                      <p className={'text-white pt-4'}>Rebuilt and enhanced existing ASP B2C site with ASP.NET 2.0 Framework and tools. Technology consists of ASP.NET 2.0 (C#), IIS, Microsoft SQL Server 2005, Stored Procedures & PayPal Instant Payment Notification.</p>
                                  </div>
                              </div>
                              <div className={'flex pl-6 pt-8 pb-12'}>
                                  <span className={'flex-initial w-1/4 h-8 bg-mainColor text-center leading-8 '}>
                                      <span className={'text-white'}>2009-2012</span>
                                  </span>
                                  <div className={'w-0 h-0 border-t-[16px] border-t-transparent border-l-[14px] border-l-mainColor border-b-[16px] border-b-transparent'}></div>
                                  <div className={'mt-4 ml-4'}>
                                      <div className={'w-1 h-1 bg-white rounded-full'}></div>
                                  </div>
                                  <div className={'pl-6 flex-initial w-3/4'}>
                                      <h3 className={'text-white font-bold'}>WEBMASTER / WEB DEVELOPER</h3>
                                      <img className={'mt-4 mb-2'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-jquery.png" alt="company"/>
                                      <span className={'text-gray-500'}>Boombox Group</span>
                                      <p className={'text-white pt-4'}>Developed, managed, operated and promoted an Internet business.Handled customer support issues.Planned and managed business finances.</p>
                                  </div>
                              </div>
                              <hr className={'border-1 border-gray-800 w-5/6 mx-auto mt-4'}/>
                              <div className={'pb-20'}>
                                  <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>EDUCATION</h2>
                                  <div className={'flex pl-6 pt-8'}>
                                      <span className={'flex-initial w-1/4 h-8 bg-mainColor text-center leading-8 '}>
                                          <span className={'text-white'}>2006-2008</span>
                                      </span>
                                      <div className={'w-0 h-0 border-t-[16px] border-t-transparent border-l-[14px] border-l-mainColor border-b-[16px] border-b-transparent'}></div>
                                      <div className={'mt-4 ml-4'}>
                                          <div className={'w-1 h-1 bg-white rounded-full'}></div>
                                          <div className={'h-[230%] bg-mainColor w-[2px] ml-[1px]'}></div>
                                      </div>
                                      <div className={'pl-6 flex-initial w-3/4'}>
                                          <h3 className={'text-xl text-white font-bold'}>Master of Information Technology</h3>
                                          <span className={'text-gray-500'}>MIT&T</span>
                                      </div>
                                  </div>
                                  <div className={'flex pl-6 pt-8'}>
                                      <span className={'flex-initial w-1/4 h-8 bg-mainColor text-center leading-8 '}>
                                          <span className={'text-white'}>2002-2006</span>
                                      </span>
                                      <div className={'w-0 h-0 border-t-[16px] border-t-transparent border-l-[14px] border-l-mainColor border-b-[16px] border-b-transparent'}></div>
                                      <div className={'mt-4 ml-4'}>
                                          <div className={'w-1 h-1 bg-white rounded-full'}></div>
                                      </div>
                                      <div className={'pl-6 flex-initial w-3/4'}>
                                          <h3 className={'text-xl text-white font-bold'}>Bachelor Computer Engineering</h3>
                                          <span className={'text-gray-500'}>HARWARG UNIVERSITEY</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8 pb-10'}>
                        <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>CLIENTS</h2>
                          <ul className={'flex flex-wrap px-10 '}>
                              <li className={'w-1/3 mt-6 flex justify-center items-center'}>
                                  <img src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-wordpress.png" alt="client"/>
                              </li>
                              <li className={'w-1/3 mt-6 flex justify-center items-center'}>
                                  <img src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-bootstrap.png" alt="client"/>
                              </li>
                              <li className={'w-1/3 mt-6 flex justify-center items-center'}>
                                  <img src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-jquery.png" alt="client"/>
                              </li>
                              <li className={'w-1/3 mt-6 flex justify-center items-center'}>
                                  <img src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-compass.png" alt="client"/>
                              </li>
                              <li className={'w-1/3 mt-6 flex justify-center items-center'}>
                                  <img src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-teaspoon.png" alt="client"/>
                              </li>
                              <li className={'w-1/3 mt-6 flex justify-center items-center'}>
                                  <img src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-evernote.png" alt="client"/>
                              </li>
                          </ul>
                          <hr className={'border-1 border-gray-800 w-5/6 mx-auto mt-6'}/>
                          <div>
                              <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>REFERENCES</h2>
                              <div className={'flex mx-20 mt-8'}>
                                  <img className={'w-16 h-16 rounded-full'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/tourguide-54x54.jpg" alt="photo"/>
                                  <div className={'ml-4'}>
                                      <strong className={'text-white'}>EDWIN BALLARD</strong>
                                      <div className={'text-gray-500'}>West Alexandrine</div>
                                      <p className={'mt-6 text-white'}>Your brand is the core of your marketing, the central theme around your products and services.Your brand is not your Logo or your Company Name</p>
                                  </div>
                              </div>
                          </div>
                          <hr className={'border-1 border-gray-800 w-4/6 mx-auto mt-6'}/>
                          <div className={'flex mx-20 mt-8'}>
                              <img className={'w-16 h-16 rounded-full'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/teacher-54x54.jpg" alt="photo"/>
                              <div className={'ml-4'}>
                                  <strong className={'text-white'}>FRANKLIN MAY</strong>
                                  <div className={'text-gray-500'}>Modern LLC,HR</div>
                                  <p className={'mt-6 text-white'}>Your brand is the core of your marketing, the central theme around your products and services.Your brand is not your Logo or your Company Name</p>
                              </div>
                          </div>
                          <hr className={'border-1 border-gray-800 w-4/6 mx-auto mt-6'}/>
                          <div className={'flex mx-20 mt-8'}>
                              <img className={'w-16 h-16 rounded-full'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/architector-54x54.jpg" alt="photo"/>
                              <div className={'ml-4'}>
                                  <strong className={'text-white'}>HATTIE MAXWELL</strong>
                                  <div className={'text-gray-500'}>West Alexandrine</div>
                                  <p className={'mt-6 text-white'}>Your brand is the core of your marketing, the central theme around your products and services.Your brand is not your Logo or your Company Name</p>
                              </div>
                          </div>
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8 pb-10'}>
                          <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>PORTFOLIO</h2>
                          <div className={'mt-4'}>
                              <div className={'ml-10'}>
                                  <button className={'text-gray-500 ml-6 text-xl font-bold hover:text-white mr-8'}>All</button>
                                  <button className={'text-gray-500 ml-6 text-xl font-bold hover:text-white mr-8'}>Design</button>
                                  <button className={'text-gray-500 ml-6 text-xl font-bold hover:text-white mr-8'}>Team</button>
                                  <button className={'text-gray-500 ml-6 text-xl font-bold hover:text-white mr-8'}>Work</button>
                              </div>
                              <div className={'flex flex-wrap mx-8 mt-4'}>
                                  <img className={'w-1/2'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/06/certy-team-380x253.jpg" alt=""/>
                                  <img className={'w-1/2'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/06/certy-task-380x253.jpg" alt=""/>
                              </div>
                          </div>
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8 pb-10'}>
                          <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>INTERESTS</h2>
                          <div className={'mt-4 flex flex-wrap'}>
                              <div className={'flex pl-10 w-1/3 mt-6'}>
                                  <svg className={'w-6 h-6 mr-4 fill-mainColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/></svg>
                                  <span className={'text-white text-xl'}>Animals</span>
                              </div>
                              <div className={'flex pl-10 w-1/3 mt-6'}>
                                  <svg className={'w-6 h-6 mr-4 fill-mainColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/></svg>
                                  <span className={'text-white text-xl'}>Travel</span>
                              </div>
                              <div className={'flex pl-10 w-1/3 mt-6'}>
                                  <svg className={'w-6 h-6 mr-4 fill-mainColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"/></svg>
                                  <span className={'text-white text-xl'}>Bicycle</span>
                              </div>
                              <div className={'flex pl-10 w-1/3 mt-6'}>
                                  <svg className={'w-6 h-6 mr-4 fill-mainColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"/></svg>
                                  <span className={'text-white text-xl'}>Parties</span>
                              </div>
                              <div className={'flex pl-10 w-1/3 mt-6 fill-mainColor'}>
                                  <svg className={'w-6 h-6 mr-4 fill-mainColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/></svg>
                                  <span className={'text-white text-xl'}>Harry Potter</span>
                              </div>
                              <div className={'flex pl-10 w-1/3 mt-6 fill-mainColor'}>
                                  <svg className={'w-6 h-6 mr-4 fill-mainColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                                  <span className={'text-white text-xl'}>Coffee</span>
                              </div>
                          </div>
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8 pb-10'}>
                          <h2 className={'text-white font-bold text-2xl pt-8 pl-10 pb-8'}>FAQ</h2>
                          {faqs.map((faq, index) => {
                              return (
                                    <Accordion key={index} active={active} handleToggle={handleToggle} faq={faq}/>
                              )
                          })}
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8 pb-10'}>
                          <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>BLOG</h2>
                          <div className={'bg-secondColor text-white ml-10 pr-4'}>
                              <p className={'mt-10'}>For those who are interested in latest trends in graphic and industrial design may be found useful and intersting to read my Blog. I am writing daily posts which includes freebies and giveaways as well. I would be glad to any comment and will appreciate your questions and feedback.</p>
                          </div>
                          <div className={'m-auto flex justify-center items-center mt-8 w-[200px] h-[40px] bg-mainColor rounded-full font-bold hover:opacity-80 text-white'}>
                              <a target={'_blank'} href="http://localhost:3000/blog">Check out my Blog</a>
                          </div>
                      </section>
                      <section className={'bg-secondColor mt-4 ml-8'}>
                          <h2 className={'text-white font-bold text-2xl pt-8 pl-10'}>CONTACT ME</h2>
                          <div className={'pl-20'}>
                              <header>
                                  <ul className={'flex justify-start mt-10 space-x-6'}>
                                      <li className={'hover:opacity-60 cursor-pointer'}>
                                          <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                                </svg>
                                          </span>
                                      </li>
                                      <li className={'hover:opacity-60 cursor-pointer'}>
                                            <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-white">
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                      <path
                                                          d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                                                  </svg>
                                            </span>
                                      </li>
                                      <li className={'hover:opacity-60 cursor-pointer'}>
                                          <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-white">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                  <path
                                                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                              </svg>
                                          </span>
                                      </li>
                                      <li className={'hover:opacity-60 cursor-pointer'}>
                                          <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-white">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                  <path
                                                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                                              </svg>
                                          </span>
                                      </li>
                                      <li className={'hover:opacity-60 cursor-pointer'}>
                                          <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-white">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                  <path
                                                      d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                                              </svg>
                                          </span>
                                      </li>
                                  </ul>
                              </header>
                              <h3 className={'text-white font-bold text-xl mt-8'}>Fell free to contact me in case of any question</h3>
                              <form action="">
                                  <div>
                                      <div className={'flex flex-col text-white mt-6'}>
                                          <label htmlFor="name">Your Name (required)</label>
                                          <input className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} type="text" name={'name'}/>
                                      </div>
                                      <div className={'flex flex-col text-white mt-6'}>
                                          <label htmlFor="email">Your Email (required)</label>
                                          <input className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} type="email" name={'email'}/>
                                      </div>
                                      <div className={'flex flex-col text-white mt-6'}>
                                          <label htmlFor="subject">Subject</label>
                                          <input className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} type="text" name={'subject'}/>
                                      </div>
                                      <div className={'flex flex-col text-white mt-6'}>
                                          <label htmlFor="subject">Your Message</label>
                                          <textarea className={'p-4 h-40 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} cols={40} rows={10} type="text" name={'subject'}/>
                                      </div>
                                      <button className={'h-10 w-28 rounded-full bg-mainColor mt-6 hover:opacity-60'}>Send</button>
                                  </div>
                              </form>
                          </div>
                          <div className={'p-10'}>
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7627.5915338551695!2d34.799073114247044!3d50.90212774907579!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1710234951703!5m2!1sen!2sua"
                                  className={'border-0 w-[100%] h-[300px] opacity-60'} allowFullScreen="" loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"></iframe>
                          </div>
                      </section>
                      <footer className={'flex justify-center mb-4'}>
                          <div className={'text-white text-lg font-bold pt-8'}>
                              <p>Certy Resume @ All Rights Reserved 2024</p>
                          </div>
                      </footer>
                  </div>
                  <div className={'flex-initial'}>
                      <nav className={'mt-6 w-[46px] h-[362px] ml-2 text-white sticky top-0'}>
                          <div>
                              <ul className={'flex flex-col space-y-8'}>
                                  <li className={'hover:opacity-60 cursor-pointer'}>
                                      <Image src="/az.jpg" width="40" height="40" className={'rounded-full mt-8'}/>
                                      {/*<img className={'rounded-full w-10 h-10'} src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/08/certy-programmer-2-195x195.png" alt="photo"/>*/}
                                  </li>
                                  <li className={'hover:opacity-60 cursor-pointer'}>
                                      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                          <path  strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                      </svg>
                                  </li>
                                  <li className={'hover:opacity-60 cursor-pointer'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                                      </svg>
                                  </li>
                                  <li className={'hover:opacity-60 cursor-pointer'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
                                      </svg>
                                  </li>
                                  <li className={'hover:opacity-60 cursor-pointer'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                                      </svg>
                                  </li>
                                  <li className={'hover:opacity-60 cursor-pointer'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                                      </svg>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
          <svg className={'hidden-sm hidden-xs h-[519px] w-[758px] fill-gray-900 absolute top-0 left-0 -z-50'}>
              <polygon points={'0,455,693,352,173,0,92,0,0,71'}></polygon>
          </svg>
          <div className={'hidden-sm hidden-xs h-[100%] absolute top-0 right-0 '}>
              <svg className={'h-[536px] w-[633px] fill-mainColor fixed top-0 right-0 -z-50'}>
                  <polygon points={'0,0,633,0,633,536'}></polygon>
              </svg>
          </div>
          { isSideBarShown && <SideBar setSideBarShown={setSideBarShown} /> }
      </>

  );
}
export default Home
