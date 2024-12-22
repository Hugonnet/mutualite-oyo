import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SSIAD from "./pages/SSIAD";
import ESAD from "./pages/ESAD";
import Telealarme from "./pages/Telealarme";
import SAP from "./pages/SAP";
import CSI from "./pages/CSI";
import ADJ from "./pages/ADJ";
import MediationAnimale from "./pages/MediationAnimale";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ssiad" element={<SSIAD />} />
          <Route path="/esad" element={<ESAD />} />
          <Route path="/telealarme" element={<Telealarme />} />
          <Route path="/sap" element={<SAP />} />
          <Route path="/csi" element={<CSI />} />
          <Route path="/adj" element={<ADJ />} />
          <Route path="/mediation-animale" element={<MediationAnimale />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;