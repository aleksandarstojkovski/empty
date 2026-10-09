import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ChiSiamo from "./pages/ChiSiamo";
import ComeFunziona from "./pages/ComeFunziona";
import ComproAutoPochiKm from "./pages/ComproAutoPochiKm";
import ComproAutoBellinzona from "./pages/ComproAutoBellinzona";
import ComproAutoBiasca from "./pages/ComproAutoBiasca";
import ComproAutoLocarno from "./pages/ComproAutoLocarno";
import ComproAutoLugano from "./pages/ComproAutoLugano";
import ComproAutoMendrisio from "./pages/ComproAutoMendrisio";
import ComproAutoTicino from "./pages/ComproAutoTicino";
import Contatti from "./pages/Contatti";
import DiconoDiNoi from "./pages/DiconoDiNoi";
import Faq from "./pages/Faq";
import InformativaPrivacy from "./pages/InformativaPrivacy";
import NoteLegali from "./pages/NoteLegali";
import Servizi from "./pages/Servizi";
import TipologieAuto from "./pages/TipologieAuto";
import ValutazioneGratuita from "./pages/ValutazioneGratuita";
import ZoneServite from "./pages/ZoneServite";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/chi-siamo" component={ChiSiamo} />
        <Route path="/come-funziona" component={ComeFunziona} />
        <Route path="/compro-auto-pochi-km" component={ComproAutoPochiKm} />
        <Route path="/compro-auto/bellinzona" component={ComproAutoBellinzona} />
        <Route path="/compro-auto/biasca" component={ComproAutoBiasca} />
        <Route path="/compro-auto/locarno" component={ComproAutoLocarno} />
        <Route path="/compro-auto/lugano" component={ComproAutoLugano} />
        <Route path="/compro-auto/mendrisio" component={ComproAutoMendrisio} />
        <Route path="/compro-auto/ticino" component={ComproAutoTicino} />
        <Route path="/contatti" component={Contatti} />
        <Route path="/dicono-di-noi" component={DiconoDiNoi} />
        <Route path="/faq" component={Faq} />
        <Route path="/informativa-privacy" component={InformativaPrivacy} />
        <Route path="/note-legali" component={NoteLegali} />
        <Route path="/servizi" component={Servizi} />
        <Route path="/tipologie-auto" component={TipologieAuto} />
        <Route path="/valutazione-gratuita" component={ValutazioneGratuita} />
        <Route path="/zone-servite" component={ZoneServite} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
