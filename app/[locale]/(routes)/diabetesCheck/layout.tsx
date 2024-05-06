import { useTranslations } from "next-intl";
import DiabetesCheck from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIK DEA",
  description: "cek diabetes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();
  const texts = {
    loading: t("else.wait"),
    siap: t("else.siap"),
    ada: t("else.ada"),
    pertanyaan: t("else.pertanyaan"),
    saya_siap: t("else.saya_siap"),
    error: t("else.error"),
    errorSimpan: t("else.errorSimpan"),
    berhasilSimpan: t("else.berhasilSimpan"),
    isi: t("else.isi"),
    laki: t("else.laki"),
    perempuan: t("else.perempuan"),
    kelamin: t("else.kelamin"),
    etnis: t("else.etnis"),
    pilih_etnis: t("else.pilih_etnis"),
    berat: t("else.berat"),
    berat2: t("else.berat2"),
    tinggi: t("else.tinggi"),
    tinggi2: t("else.tinggi2"),
    bmi: t("else.bmi"),
    kurus: t("else.kurus"),
    normal: t("else.normal"),
    kelebihan: t("else.kelebihan"),
    obesitas: t("else.obesitas"),
    obesitas2: t("else.obesitas2"),
    lingkar: t("else.lingkar"),
    pilih_lingkar: t("else.pilih_lingkar"),
    lanjut: t("else.lanjut"),
    mundur: t("else.mundur"),
    pertanyaan2: t("else.pertanyaan2"),
    white: t("else.white"),
    aboriginal: t("else.aboriginal"),
    other: t("else.other"),
    black: t("else.black"),
    east: t("else.east"),
    south: t("else.south"),
    selesai: t("else.selesai"),
    hasil: t("else.hasil"),
    ulang: t("else.ulang"),
    rata: t("Profil.rata"),
    data: t("Profil.data"),
    lowrisk: t("Profil.lowrisk"),
    highrisk: t("Profil.highrisk"),
    dibuat: t("Profil.dibuat"),
    hapus: t("Profil.hapus"),
    tingkat: t("Profil.tingkat"),
    apa_yang_harus: t("Profil.apa_yang_harus"),
    periksa: t("Profil.periksa"),
    jam: t("Profil.jam"),
    gula_darah: t("Profil.gula_darah"),
    urnalisis: t("Profil.urnalisis"),
    edukasi: t("Profil.edukasi"),
    aktivitas: t("Profil.aktivitas"),
    stres: t("Profil.stres"),
    skrining: t("Profil.skrining"),
  };
  return <DiabetesCheck texts={texts}>{children}</DiabetesCheck>;
}
