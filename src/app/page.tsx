import Header from './components/Header';
import HeroBookingForm from './components/HeroBookingForm';
import WhyChooseUsSlider from './components/WhyChooseUsSlider';
import PopularDestinations from './components/PopularDestinations';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBookingForm />
      <WhyChooseUsSlider />
      <PopularDestinations />
      <Footer />
    </main>
  );
}
