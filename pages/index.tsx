import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Button from '../components/Button';

import { FaTwitch, FaDiscord, FaYoutube, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

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

  useEffect(() => {
    (async () => {
      var res = await fetch('/api/events');
      var data = await res.json();

      setEvents(data);
    })()
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

      <main className="">
        <section id="#main" className="bg-main-section bg-bottom h-screen">
          <div id="hero" className="text-white absolute top-1/3 ml-48">
            <h1 id="hero1" className="hero-text font-extrabold">CRONCH</h1>
            <h1 id="hero2" className="hero-text ml-20">BUT </h1>
            <h1 id="hero3" className="hero-text tl-font">EDGY</h1>
          </div>
        </section>

        <div className="section-divider h-12 bg-primary-gray"></div>

        <section id="events" className="bg-primary-yellow px-20 py-16 text-primary-gray">
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

        <section id="communitites" className="bg-white px-20 py-16 text-primary-gray">
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

        <section id="about" className="bg-primary-gray px-20 py-16 text-white">
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

        <div className="section-divider h-12 bg-primary-yellow"></div>
      </main>

      <footer className="bg-primary-gray content-center">
        <div id = "social-links" className = "flex w-screen justify-around py-8 px-64">
          <a href = "https://www.twitch.tv/roguebananasofficial" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-twitch-purple hover:text-white"><FaTwitch /></a>
          <a href = "https://discord.gg/e4k95j4cP2" target = "_new" className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-discord-blurple hover:text-white"><FaDiscord /></a>
          <span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-twitter-blue hover:text-white"><FaTwitter /></span>
          <span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-youtube-red hover:text-white"><FaYoutube /></span>
          <span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-instagram-pink hover:text-white"><FaInstagram /></span>
          <span className = "text-4xl bg-white text-primary-gray inline-block rounded-full p-4 transition duration-300 hover:bg-github-black hover:text-white"><FaGithub /></span>
        </div>
        <div className="section-divider h-12 text-white bg-primary-gray px-8 text-2xl flex content-center justify-center w-screen">
          <div className = "items-center h-auto">© {new Date().getFullYear()} Rogue Bananas. </div>
          {/* <div className = "items-center h-auto">other side</div> */}
        </div>
      </footer>
    </div>
  )
}

export default Home
