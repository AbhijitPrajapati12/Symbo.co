import './style/style.css'
import HomePage from './pages/HomePage';
import { Work_Sans } from 'next/font/google'
 
const work_sans = Work_Sans({
  style:['normal'],
  weight:['400','500','600','700','800'],
  subsets: ['latin'],
});


export default function RootLayout({
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={work_sans.className}>
      <body>
        <div id="modal"></div>
        <HomePage/>
      </body>
    </html>
  );
}
