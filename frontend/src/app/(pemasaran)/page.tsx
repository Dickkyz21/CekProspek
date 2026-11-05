import { Header } from "@/components/pemasaran/Header";
import { Hero } from "@/components/pemasaran/Hero";
import { ProofStrip } from "@/components/pemasaran/ProofStrip";
import { TentangSuhuku } from "@/components/pemasaran/TentangSuhuku";
import { Keunggulan } from "@/components/pemasaran/Keunggulan";
import { UntukSiapa } from "@/components/pemasaran/UntukSiapa";
import { CaraKerja } from "@/components/pemasaran/CaraKerja";
import { Testimoni } from "@/components/pemasaran/Testimoni";
import { ProdukSiapPakai } from "@/components/harga/ProdukSiapPakai";
import { HargaLangganan } from "@/components/harga/HargaLangganan";
import { FAQ } from "@/components/pemasaran/FAQ";
import { CtaPenutup } from "@/components/pemasaran/CtaPenutup";
import { Footer } from "@/components/pemasaran/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { beranda } from "@/content/beranda";

export default function HalamanBeranda() {
  return (
    <>
      <Header />
      <main>
        <Hero data={beranda.hero} />
        <Reveal><ProofStrip data={beranda.buktiSosial} /></Reveal>
        <Reveal><TentangSuhuku id="apa" data={beranda.apaItuSuhuku} /></Reveal>
        <Reveal><Keunggulan id="beda" data={beranda.keunggulan} /></Reveal>
        <Reveal><UntukSiapa data={beranda.untukSiapa} /></Reveal>
        <Reveal><CaraKerja id="cara-kerja" data={beranda.caraKerja} /></Reveal>
        <Reveal><Testimoni id="testimoni" data={beranda.testimoni} /></Reveal>
        <Reveal><ProdukSiapPakai id="produk" /></Reveal>
        <Reveal><HargaLangganan id="harga" /></Reveal>
        <Reveal><FAQ id="faq" data={beranda.faq} /></Reveal>
        <Reveal><CtaPenutup data={beranda.penutup} /></Reveal>
      </main>
      <Footer data={beranda.footer} />
    </>
  );
}
