module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FFED50",
        "primary-gray": "#323232",
        "primary-blue": "#20A4F3",
        "primary-green": "#06A77D",
        "twitter-blue": "#1DA1F2",
        "twitch-purple": "#9146FF",
        "discord-blurple": "#5865F2",
        "instagram-pink": "#C13584",
        "youtube-red": "#FF0000",
        "github-black": "#151013"
      },
      backgroundImage: {
        "main-section": "url('/images/Background.jpg')"
      }
    },
  },
  plugins: [],
}