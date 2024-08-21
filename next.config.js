/** @type {import('next').NextConfig} */
module.exports= {
  images: {
    domains: ["firebasestorage.googleapis.com","img.icons8.com","www.google.com"],
    
      dangerouslyAllowSVG: true,
    
    
  },
  reactStrictMode: false,
  compiler: {
    emotion: true
  },
};

