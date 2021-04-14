import './HomePage.css';

//components
import Product from '../components/Product';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-container'>
        <img
          className='home-image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-Zjc5OGFjNDMt-w1500._CB654593801_.jpg'
          alt='header'
        />
        <div className='home-row'>
          <Product
            title={
              "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            }
            price={'29.99'}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
            }
            rating={5}
          />
          <Product
            title={'Samsung Galaxy Tab S7 Wi-Fi, Mystic Silver - 256 GB'}
            price={'729.99'}
            image={
              'https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_t870nzkaxar_11_galaxy_tab_s7_1579627.jpg'
            }
            rating={5}
          />
        </div>
        <div className='home-row'>
          <Product
            title={'Echo Dot (3rd Gen) - Smart speaker with Alexa'}
            price={'39.99'}
            image={
              'https://target.scene7.com/is/image/Target/GUEST_3ae0a3d0-fd48-44fa-a5dc-4490af6c490b?wid=325&hei=325&qlt=80&fmt=webp'
            }
            rating={4}
          />
          <Product
            image={
              'https://canary.contestimg.wish.com/api/webimage/5d14a1ddc34f9f5ce6399fda-large.jpg?cache_buster=596f44181e01bbff147439cf3e48237c'
            }
            title={
              '36 Colors Journal Planner Pens, Colored Fine Point Markers Drawing Pens Porous Fineliner Pen for Writing Note Taking Calendar Agenda Coloring - Art School Office Supplies'
            }
            price={'10.99'}
            rating={3}
          />
          <Product
            title={
              'Cryotex Massage Gun – Deep Tissue Handheld Percussion Massager – Six Different Heads for Different Muscle Groups - 4 Speed Options + 4 Smart Modes'
            }
            image={
              'https://thebeastproduct.com/wp-content/uploads/2020/05/TOLOCO-Massage-Gun-.jpg'
            }
            price={'89.99'}
            rating={5}
          />
        </div>
        <div className='home-row'>
          <Product
            title={
              'Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision | 2018 release'
            }
            image={
              'https://snpi.dell.com/snp/images2/300/en-us~AB367768/AB367768.jpg'
            }
            price={'49.99'}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
