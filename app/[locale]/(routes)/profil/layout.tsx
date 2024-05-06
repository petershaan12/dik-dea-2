import { useTranslations } from "next-intl";
import ProfilePage from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIK DEA",
  description: "cek diabetes",
};

export default function ProfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();
  const texts = {
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
    loading: t("else.wait"),
  };

  return <ProfilePage texts={texts}>{children}</ProfilePage>;
}
