import Hero from './Hero';
import Spaces from './Spaces';
import RoyaleSpotlight from './RoyaleSpotlight';
import Products from './Products';
import Colours from './Colours';
import Calculator from './Calculator';
import Inspiration from './Inspiration';
import Dealer from './Dealer';

export default function HomePage({ onNavigate, notify, productFilter, onProductFilter }) {
  return (
    <main className="pb-24 lg:pb-28">
      <Hero onNavigate={onNavigate} />
      <Spaces onNavigate={onNavigate} />
      <RoyaleSpotlight onNavigate={onNavigate} />
      <Products onNavigate={onNavigate} filter={productFilter} onFilter={onProductFilter} />
      <Colours />
      <Calculator />
      <Inspiration />
      <Dealer notify={notify} />
    </main>
  );
}
