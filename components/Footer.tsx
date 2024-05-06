import { useTranslations } from "next-intl";

const Footer = ({ texts }: any) => {
  return (
    <footer className="pb-12 mt-5 relative">
      <div className="max-w-[1500px] mx-auto text-xs md:text-sm w-[90%] text-center ">
        <span>{texts.copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
