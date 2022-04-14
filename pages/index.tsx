import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import classnames from 'classnames';

import { FaTwitch, FaDiscord, FaYoutube, FaTwitter, FaInstagram, FaGithub, FaHeart, FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

type Event = {
  name: string;
  mode: string;
  time: string;
  date: string;
}

const Home: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([
    { name: "LOADING EVENTS", mode: "", time: "", date: "" }
  ])

  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  const openNav = () => {
    setOpen(true);
    var sidenav = document.getElementById("sidenav");
    if (sidenav !== null) sidenav.style.width = "100vw";
  }

  const closeNav = () => {
    setOpen(false);
    var sidenav = document.getElementById("sidenav");
    if (sidenav !== null) sidenav.style.width = "0";
  }

  useEffect(() => {
    (async () => {
      var res = await fetch('/api/events');
      var data = await res.json();

      setEvents(data);
    })()

    setHeight(window.innerHeight)
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div className="">
      <Head>
        <title>Rogue Bananas | Home</title>
        <meta name="description" content="Rogue Bananas Official Website" />
        <link rel="icon" href="/images/color_logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rogue Bananas" />
        <meta property="og:title" content="Rogue Bananas | Home" />
        <meta property="og:description" content="Rogue Bananas Official Website" />
        <meta property="og:image" content="/images/promo1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@gabekrahulik" />
        <meta name="author" content="Gabe Krahulik" />
        <meta content="#FFED50" name="theme-color" />
      </Head>

      <Navbar />
      
      <main className="overflow-x-hidden">
        <section id="main" className="h-screen bg-main-section bg-bottom lg:bg-none">
          <nav className = "block lg:hidden">
            <div className = "absolute top-0 left-0 p-4 text-white text-4xl">
              <FaBars onClick = {openNav}/>
            </div>

            <div className = "w-screen flex flex-col justify-items-center">
              <div className = "mt-16"><img src="/images/logo_big.png" alt="Logo" className = "mx-auto w-1/3 max-w-20" /></div>
              <div className="tl-font text-white text-center text-5xl mt-4">ROGUE <br /> BANANAS</div>
            </div>

            <div id = "sidenav" className = {classnames([
              'h-screen w-0 fixed z-50 top-0 left-0 bg-white text-black overflow-x-hidden transition-all duration-500'
            ])}>
              <div className="flex flex-row justify-between">
                <div className = "p-8 text-black text-4xl flex justify-center items-center">
                  <CgClose onClick = {closeNav} />
                </div>
                <div><img src="/images/logo_big.png" alt="Logo" className = "w-32 p-8" /></div>
              </div>

              <hr className = "border-1 border-black mx-8" />

              <div id = "sidenav-links">
                <ul className="sidenav">
                  <li className = "text-center text-4xl py-8"><a onClick = {closeNav} href="#events" className = "sidenav-item">EVENTS</a></li>
                  <li className = "text-center text-4xl py-8"><a onClick = {closeNav} href="#communities" className = "sidenav-item">COMMUNITIES</a></li>
                  <li className = "text-center text-4xl py-8"><a onClick = {closeNav} href="#about" className = "sidenav-item">ABOUT US</a></li>
                  <li className = "text-center text-4xl py-8"><a onClick = {closeNav} href="#" className = "sidenav-item">REGISTER</a></li>
                </ul>
              </div>

              <hr className = "border-1 border-black mx-8" />

              <div className="w-screen flex justify-center mt-20">
                <div className = "inline-block">
                  <h1 className="hero-text text-6xl font-black">CRONCH</h1>
                  <h1 className="hero-text text-5xl inline ml-12">BUT </h1>
                  <h1 className="hero-text text-4xl inline tl-font">EDGY</h1>
                </div>
              </div>

            </div>
          </nav>

          <div className = "background" style = {{ transform: `translate(-50%, -${50 - (((scroll / height) / 3) * 100)}%)` }}>
            
          </div>
          <div id="hero" className="text-white absolute top-1/2 mt-4 lg:mt-0 lg:top-1/3 w-screen flex flex-row justify-center lg:justify-start">
            <div className = "mx-auto lg:mr-0 lg:ml-48">
              <h1 className="hero-text text-6xl lg:text-8xl font-extrabold">CRONCH</h1>
              <h1 className="hero-text text-5xl lg:text-8xl inline ml-12 lg:ml-20">BUT </h1>
              <h1 className="hero-text text-4xl lg:text-7xl inline tl-font">EDGY</h1>
            </div>
            <div></div>
          </div>
        </section>

        <div className="section-divider h-12 bg-primary-gray"></div>

        {/* Mobile version of events section */}
        <section id="events" className="bg-primary-yellow px-8 py-16 text-primary-gray block lg:hidden">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="tl-font ml-4">EVENTS</h2>

              <h1 className="text-6xl mt-16 mb-12">UPCOMING <br /> EVENTS</h1>

              <Button type="gray" text="yellow">LEARN MORE</Button>
            </div>

            <div className = "mt-16">
              {events.map((event, i) => {
                return (
                  <>
                    <div>
                      <span className = "text-2xl">{ event.name }</span>
                      <div className = "flex flex-row justify-between mb-4">
                        <span>{ event.mode }</span>
                        <span>{ event.time }</span>
                        <span>{ event.date }</span>
                      </div>
                      {i !== 3 && (
                        <hr className = "border-1 border-black" />
                      )}
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </section>

        {/* Desktop version of events section */}
        <section id="events" className="bg-primary-yellow px-20 py-16 text-primary-gray hidden lg:block">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="tl-font ml-4">EVENTS</h2>

              <h1 className="text-8xl mt-20 pb-16">UPCOMING <br /> EVENTS</h1>

              <Button type="gray" text="yellow">LEARN MORE</Button>
            </div>

            <div>
              <table>
                <thead>
                  <tr className="text-2xl">
                    <td className="pb-12 text-left">NAME</td>
                    <td className="pb-12 text-center">MODE</td>
                    <td className="pb-12 text-center">TIME</td>
                    <td className="pb-12 text-center">DATE</td>
                  </tr>
                </thead>

                <tbody>
                  {events.map((event, i) => {
                    return (
                      <>
                        <tr key={i} className="text-2xl">
                          <td className="pr-16 py-8">{event.name}</td>
                          <td className="px-16 py-8">{event.mode}</td>
                          <td className="px-16 py-8">{event.time}</td>
                          <td className="px-16 py-8">{event.date}</td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>

              </table>
            </div>
          </div>
        </section>

        <div className="section-divider h-12 bg-primary-gray"></div>
        
        {/* Mobile version of communities section */}
        <section id="communities" className="bg-white px-8 py-16 text-primary-gray block lg:hidden">
          <div className="flex flex-col justify-between items-center">
            <div className="text-right">
              <h2 className="tl-font mr-4">COMMUNITIES</h2>

              <h1 className="text-6xl mt-16 mb-12">AFFILIATED <br /> COMMUNITIES</h1>

              <Button type="gray" text="white">LEARN MORE</Button>
            </div>
            
            <div className = "text-2xl leading-6 mt-16">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique sollicitudin. At consectetur lorem donec massa sapien faucibus et molestie ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className = "w-full flex flex-col justify-evenly mt-4">
              <div><img src="/images/screenshots/1.jpg" className = "p-4 w-full" /></div>
              <div><img src="/images/screenshots/2.jpg" className = "p-4 w-full" /></div>
              <div><img src="/images/screenshots/3.jpg" className = "p-4 w-full" /></div>
            </div>

          </div>
        </section>

        {/* Desktop version of communities section */}
        <section id="communities" className="bg-white px-20 py-16 text-primary-gray hidden lg:block">
          <div className="flex flex-row justify-between items-center">
            <div className = "w-2/3 flex flex-row justify-evenly">
              <div className = "">
                <img src="/images/screenshots/1.jpg" className = "" />
              </div>
              <div className = "flex flex-col justify-between">
                <div className = ""><img src="/images/screenshots/2.jpg" className = "" /></div>
                <div className = ""><img src="/images/screenshots/3.jpg" className = "" /></div>
              </div>
            </div>
            
            <div className = "text-2xl pr-12 w-1/4 leading-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique sollicitudin. At consectetur lorem donec massa sapien faucibus et molestie ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="text-right">
              <h2 className="tl-font mr-4">COMMUNITIES</h2>

              <h1 className="text-8xl mt-20 pb-16">AFFILIATED <br /> COMMUNITIES</h1>

              <Button type="gray" text="white">LEARN MORE</Button>
            </div>
          </div>
        </section>

        <div className="section-divider h-12 bg-primary-yellow"></div>
        
        {/* Mobile version of about section*/}
        <section id="about" className="bg-primary-gray px-8 py-16 text-white block lg:hidden">
          <div className="flex flex-col justify-between">
            <div>

              <h1 className="text-8xl pb-1">ABOUT</h1>
              <h1 className="tl-font text-primary-yellow text-7xl mb-16">US</h1>

              <Button type="yellow" text="gray">LEARN MORE</Button>
            </div>

            <div className = "flex flex-col mt-16">
              <div className = "mb-6">
                <span className = "text-xl">SIMPLICITY</span>
                <p className = "mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat minus ipsa rerum, possimus nostrum culpa enim! Commodi optio, excepturi accusamus aliquid, corrupti labore non vero voluptatem expedita accusantium molestias deserunt.</p>
              </div>
              <div className = "mb-6">
                <span className = "text-xl">PERFORMANCE</span> 
                <p className = "mt-2">Hic facere cupiditate quos repudiandae! Ipsum eos suscipit dolor reprehenderit est, cumque aut maiores reiciendis quisquam pariatur excepturi, repellat sapiente recusandae aperiam ex dignissimos sit non eius voluptates voluptatum dolorem!</p>
              </div>
              <div className = "mb-6">
                <span className = "text-xl">INNOVATION</span>
                <p className = "mt-2">Rem, facilis nesciunt. Quam, reiciendis reprehenderit quaerat fugiat, repellendus aspernatur at libero ad quo excepturi fugit, delectus inventore voluptas? Sapiente recusandae consequuntur pariatur et eligendi aliquid, repudiandae optio natus molestiae.</p>
              </div>
              <div className = "mb-6">
                <span className = "text-xl">EXPERIENCE</span>
                <p className = "mt-2">Enim, fuga. Minus reprehenderit libero cum omnis eaque culpa reiciendis. Debitis perferendis possimus reiciendis rerum harum laborum! Aliquam autem molestias impedit, recusandae nesciunt numquam. Dolorem numquam unde dolore distinctio quis?</p>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop version of about section*/}
        <section id="about" className="bg-primary-gray px-20 py-16 text-white hidden lg:block">
          <div className="flex flex-row justify-between">
            <div>

              <h1 className="text-8xl mt-20 pb-1">ABOUT</h1>
              <h1 className="tl-font text-primary-yellow text-7xl mb-16">US</h1>

              <Button type="yellow" text="gray">LEARN MORE</Button>
            </div>

            <div className = "grid grid-rows-2 grid-cols-2 text-2xl gap-10 p-16 mx-20 mb-16">
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat minus ipsa rerum, possimus nostrum culpa enim! Commodi optio, excepturi accusamus aliquid, corrupti labore non vero voluptatem expedita accusantium molestias deserunt.</p>
              </div>
              <div>
                <p>Hic facere cupiditate quos repudiandae! Ipsum eos suscipit dolor reprehenderit est, cumque aut maiores reiciendis quisquam pariatur excepturi, repellat sapiente recusandae aperiam ex dignissimos sit non eius voluptates voluptatum dolorem!</p>
              </div>
              <div>
                <p>Rem, facilis nesciunt. Quam, reiciendis reprehenderit quaerat fugiat, repellendus aspernatur at libero ad quo excepturi fugit, delectus inventore voluptas? Sapiente recusandae consequuntur pariatur et eligendi aliquid, repudiandae optio natus molestiae.</p>
              </div>
              <div>
                <p>Enim, fuga. Minus reprehenderit libero cum omnis eaque culpa reiciendis. Debitis perferendis possimus reiciendis rerum harum laborum! Aliquam autem molestias impedit, recusandae nesciunt numquam. Dolorem numquam unde dolore distinctio quis?</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Mobile footer */}
      <footer className="bg-primary-gray content-center block lg:hidden">
        <div id = "social-links" className = "grid grid-rows-2 grid-cols-3 w-screen justify-items-center py-8 mx-auto gap-y-6">
          <div><a href = "https://www.twitch.tv/roguebananasofficial" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-twitch-purple hover:text-white"><FaTwitch /></a></div>
          <div><a href = "https://discord.gg/e4k95j4cP2" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-discord-blurple hover:text-white"><FaDiscord /></a></div>
          <div><span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-twitter-blue hover:text-white"><FaTwitter /></span></div>
          <div><span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-youtube-red hover:text-white"><FaYoutube /></span></div>
          <div><span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-instagram-pink hover:text-white"><FaInstagram /></span></div>
          <div><a href = "https://github.com/Lilspartan/rogue-bananas" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-github-black hover:text-white"><FaGithub /></a></div>
        </div>
        <div className = "text-center h-auto my-auto text-primary-yellow text-xl mb-2">Made with <FaHeart className = "inline text-xl" /> by <a href="https://twitter.com/zzvlty" target = "_new" className = "inline-block">@zzvlty</a> and <a href="https://twitter.com/gabekrahulik" target = "_new" className = "inline-block">@gabekrahulik</a></div>
        <div className="section-divider h-12 text-black bg-primary-yellow px-8 text-2xl flex content-center justify-center w-screen">
          <div className = "items-center h-auto my-auto">© {new Date().getFullYear()} Rogue Bananas. </div>
          {/* <div className = "items-center h-auto">other side</div> */}
        </div>
      </footer>

      {/* Desktop footer */}
      <footer className="bg-primary-gray content-center hidden lg:block">
        <div id = "social-links" className = "flex w-screen justify-around py-8 px-64">
          <a href = "https://www.twitch.tv/roguebananasofficial" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-twitch-purple hover:text-white"><FaTwitch /></a>
          <a href = "https://discord.gg/e4k95j4cP2" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-discord-blurple hover:text-white"><FaDiscord /></a>
          <span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-twitter-blue hover:text-white"><FaTwitter /></span>
          <span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-youtube-red hover:text-white"><FaYoutube /></span>
          <span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-instagram-pink hover:text-white"><FaInstagram /></span>
          <a href = "https://github.com/Lilspartan/rogue-bananas" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-github-black hover:text-white"><FaGithub /></a>
        </div>
        <div className="section-divider h-12 text-black bg-primary-yellow px-8 text-2xl flex content-center justify-between w-screen">
          <div className = "items-center h-auto my-auto">© {new Date().getFullYear()} Rogue Bananas. </div>
          <div className = "items-center h-auto my-auto">Made with <FaHeart className = "inline text-xl" /> by <a href="https://twitter.com/zzvlty" target = "_new" className = "link inline-block">@zzvlty</a> and <a href="https://twitter.com/gabekrahulik" target = "_new" className = "link inline-block">@gabekrahulik</a></div>
          {/* <div className = "items-center h-auto">other side</div> */}
        </div>
      </footer>
    </div>
  )
}

export default Home
