import type { Photo } from 'react-photo-album';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/d/1zHbst7X5BFzHkGiMWF29FIXomY0Qn0c4",
    width:1130,
    height:1600,
    alt:"photo 1"
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/d/1qfwXvfs0H3rOwizPKbotJhlrK9uEGw57",
    width:1207,
    height:1600,  
    alt:"photo 2" 
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/d/14uo1KbYzNzvfydMWJLIjpS_QCDSkuvtA",
    width:1127,
    height:1600,
    alt:"photo 3"  
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/d/1vJccEVOnucDsaDxa3DmUzkhw4dGywe6C",
    width:1154,
    height:1600,
    alt:"photo 4"  
  },
  {
    id: 5,
    src: "https://lh3.googleusercontent.com/d/1Col1Xp3m6JhqVNt6a8a8_zL3pDaQ12vV",
    width:1067,
    height:1600,
    alt:"photo 5"
  },
  {
    id: 6,
    src: "https://lh3.googleusercontent.com/d/1Fuy07dFcPNuBPBpxTSpreQRYbzhidGp9",
    width:1100,
    height:1600,
    alt:"photo 6"
  },
  {
    id: 7,
    src: "https://lh3.googleusercontent.com/d/1p0u549FicjkeKqS6XXA7ddQfYUm7QckD",
    width:1241,
    height:1600,
    alt:"photo 7"
  },
  {
    id: 8,
    src: "https://lh3.googleusercontent.com/d/1NI3YTk4vRbV4Xrl5p9De8e0ayL68JWTI",
    width:1067,
    height:1600,
    alt:"photo 8"
  }
].map(({ src,width,height,...rest }) => {


  return {
    src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: src,
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
    ...rest,
  } as Photo;
});

export default photos;
