import '@/styles/globals.css'
import "../assets/sass/main.scss"
import Layout from "../layout/Layout"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";


export default function App({ Component, pageProps }) {

  return  <Layout>
      <Component {...pageProps} />
    </Layout>

}
