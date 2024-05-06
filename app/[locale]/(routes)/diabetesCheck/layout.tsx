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
  const t = useTranslations("else");
  const texts = {
    loading: t("wait"),
    siap: t("siap"),
    ada: t("ada"),
    pertanyaan: t("pertanyaan"),
    saya_siap: t("saya_siap"),
    error: t("error"),
    isi: t("isi"),
    laki: t("laki"),
    perempuan: t("perempuan"),
    kelamin: t("kelamin"),
    etnis: t("etnis"),
    pilih_etnis: t("pilih_etnis"),
    berat: t("berat"),
    berat2: t("berat2"),
    tinggi: t("tinggi"),
    tinggi2: t("tinggi2"),
    bmi: t("bmi"),
    kurus: t("kurus"),
    normal: t("normal"),
    kelebihan: t("kelebihan"),
    obesitas: t("obesitas"),
    obesitas2: t("obesitas2"),
    lingkar: t("lingkar"),
    pilih_lingkar: t("pilih_lingkar"),
    lanjut: t("lanjut"),
    mundur: t("mundur"),
    pertanyaan2: t("pertanyaan2"),
    white: t("white"),
    aboriginal: t("aboriginal"),
    other: t("other"),
    black: t("black"),
    east: t("east"),
    south: t("south"),
  };
  return <DiabetesCheck texts={texts}>{children}</DiabetesCheck>;
}
