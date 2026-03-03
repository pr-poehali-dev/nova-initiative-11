import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CasesList from "./pages/CasesList";
import CaseDetail from "./pages/CaseDetail";
import EngagementModels from "./pages/EngagementModels";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/cases" element={<CasesList />} />
      <Route path="/cases/:slug" element={<CaseDetail />} />
      <Route path="/engagement" element={<EngagementModels />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;