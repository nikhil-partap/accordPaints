import { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Toast from './components/Toast';
import HomePage from './landing/HomePage';
import ProductPage from './product/ProductPage';
import { getProductById } from './data/products';
import { viewFromLocation, pathFor } from './lib/routing';

export default function App() {
  const [route, setRoute] = useState(viewFromLocation);
  const [productFilter, setProductFilter] = useState('all');
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();
  const pending = useRef(null);
  const [scrollTick, setScrollTick] = useState(0);

  // Scroll after the target view has rendered.
  useEffect(() => {
    const job = pending.current;
    if (!job) return;
    pending.current = null;
    const el = job.section && document.getElementById(job.section);
    if (el) el.scrollIntoView({ behavior: job.smooth ? 'smooth' : 'auto', block: 'start' });
    else if (job.top) window.scrollTo({ top: 0 });
  }, [scrollTick, route]);

  useEffect(() => {
    const onPop = () => setRoute(viewFromLocation());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.title =
      route.view === 'product' ? `${getProductById(route.id).name} | Accord Paints` : 'Accord Paints | Colours that feel like home';
  }, [route]);

  // target: { view: 'home' | 'product', id?, section?, category? }
  const navigate = useCallback(
    (target) => {
      const next = target.view === 'product' ? { view: 'product', id: target.id } : { view: 'home' };
      const changed = pathFor(next) !== pathFor(route);
      if (changed) {
        window.history.pushState(null, '', pathFor(next));
        setRoute(next);
      }
      if (target.category) setProductFilter(target.category);
      pending.current = { section: target.section, smooth: !changed, top: changed };
      setScrollTick((n) => n + 1);
    },
    [route]
  );

  const notify = useCallback((message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header onNavigate={navigate} />
      <div className="flex-1">
        {route.view === 'product' ? (
          <ProductPage key={route.id} product={getProductById(route.id)} onNavigate={navigate} notify={notify} />
        ) : (
          <HomePage onNavigate={navigate} notify={notify} productFilter={productFilter} onProductFilter={setProductFilter} />
        )}
      </div>
      <Footer onNavigate={navigate} />
      <Toast message={toast} />
    </div>
  );
}
