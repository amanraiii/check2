import express from 'express';

export async function startServer() {
  const app = express();
  app.use(express.json());
  app.get('/health', (req, res) => {
    res.send('Hello World!');
  });
  let interval;
  try {
    interval = setInterval(async () => {
      const check1 = await fetch('https://check1-hm4v.onrender.com/health');
      // const hashtagRes = await hashtag.json();

      console.log('check1', check1.statusText);
   
    }, 1000 * 60 * 5);
  } catch (error) {
    console.log(error);
    clearInterval(interval);
  }

  return app;
}
