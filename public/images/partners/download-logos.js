const fs = require('fs');
const https = require('https');
const path = require('path');

// Define the logos to download
const logos = [
  {
    name: 'oii.png',
    url: 'https://www.oii.ox.ac.uk/wp-content/uploads/2023/12/OII_logo_w.png',
  },
  {
    name: 'turing.png',
    url: 'https://www.turing.ac.uk/sites/default/files/inline-images/ATI_logo_black_blue_rgb.png',
  },
  {
    name: 'stanford-hai.png',
    url: 'https://hai.stanford.edu/sites/default/files/styles/optimized/public/2021-02/HAI_logo_rgb_color_size2_v2-01.png',
  },
  {
    name: 'pai.png',
    url: 'https://cdn2.assets-servd.host/partnership-on-ai/production/images/logo-partnership-on-ai.png',
  },
  {
    name: 'ai-now.png',
    url: 'https://ainowinstitute.org/static/static-files/ai-now-logo.svg',
  },
  {
    name: 'ieee.png',
    url: 'https://brand-experience.ieee.org/wp-content/themes/ieeebrandexperience/logo-eps-png-svg/IEEE_logo_black_RGB.png',
  }
];

// Function to download a file
const downloadFile = (url, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}, status code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close(resolve);
        console.log(`Downloaded: ${destination}`);
      });
    }).on('error', err => {
      fs.unlink(destination, () => {});
      reject(err);
    });
    
    file.on('error', err => {
      fs.unlink(destination, () => {});
      reject(err);
    });
  });
};

// Create directory if it doesn't exist
const dir = path.join(__dirname, 'real');
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

// Download all logos
async function downloadAllLogos() {
  for (const logo of logos) {
    const destination = path.join(dir, logo.name);
    try {
      await downloadFile(logo.url, destination);
    } catch (error) {
      console.error(`Error downloading ${logo.name}: ${error.message}`);
    }
  }
}

downloadAllLogos()
  .then(() => console.log('All downloads completed'))
  .catch(err => console.error('Error in download process:', err)); 