import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Business from '@/pages/Business';
import InternationalTalent from '@/pages/InternationalTalent';
import DigitalOperations from '@/pages/DigitalOperations';
import BusinessSupport from '@/pages/BusinessSupport';
import TravelInternational from '@/pages/TravelInternational';
import Technology from '@/pages/Technology';
import AIWorkforce from '@/pages/AIWorkforce';
import IntelligentAutomation from '@/pages/IntelligentAutomation';
import Partners from '@/pages/Partners';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/international-talent" element={<InternationalTalent />} />
          <Route path="/business/digital-operations" element={<DigitalOperations />} />
          <Route path="/business/business-support" element={<BusinessSupport />} />
          <Route path="/business/travel-international" element={<TravelInternational />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/ai-workforce" element={<AIWorkforce />} />
          <Route path="/technology/intelligent-automation" element={<IntelligentAutomation />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
