import { BiCommand, BiLaptop } from "react-icons/bi";
import { ImGithub, ImInfo } from "react-icons/im";
import Ligne from "./Ligne";
import {
  RiCss3Fill,
  RiDownload2Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiPhpFill,
  RiReactjsFill,
  RiRobot2Fill,
  RiTailwindCssFill,
  RiUser2Fill,
} from "react-icons/ri";
import {
  SiDocker,
  SiGithub,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiSymfony,
  SiWordpress,
} from "react-icons/si";
import { LuLink } from "react-icons/lu";
import { RxExternalLink } from "react-icons/rx";
import TextArea from "../Input/TextArea";
import InputButton from "../Input/InputButton";
import { DispatcherEvent } from "next/dist/next-devtools/dev-overlay/shared";

type MenuProps = {
  id: number;
  width?: string;
  height?: string;
  closereview?: React.Dispatch<React.SetStateAction<boolean>>;
};
const Menu = ({ id, width, height,closereview }: MenuProps) => {
  return (
    <>
      <div 
        className={`[&_span]:font-medium [&_span]:flex [&_span]:items-center [&_span]:gap-3 bg-black/30 
            rounded-2xl transition-all duration-200 ease-in-out
            backdrop-blur-md border border-white/20 shadow-2xl
            flex flex-col
            ${width} ${height} `}
      >
        {id === 1 && (
          <>
            {/* Menu pomme */}
            <Ligne
              text="About me"
              icon={<BiLaptop />}
              command={<BiCommand />}
              separation={true}
            />

            <Ligne
              text="Kévin Calixte, 31 ans"
              command={
                <>
                  <RiUser2Fill />
                </>
              }
            />
            <Ligne
              text="Développeur Full Stack Junior"
              command={
                <>
                  <RiRobot2Fill />
                </>
              }
              separation={true}
            />
            <Ligne
              text="Download my resume"
              icon={<RiDownload2Fill />}
              separation={true}
            />
            <Ligne text="Compétences :" />
            <Ligne
              text="HTML, CSS, JS, PHP POO"
              command={
                <>
                  <RiHtml5Fill />
                  <RiCss3Fill />
                  <RiJavascriptFill />
                  <RiPhpFill />
                </>
              }
            />
            <Ligne
              text="React/Node.js, Next.js"
              command={
                <>
                  <RiReactjsFill />
                  <RiNodejsFill />
                  <RiNextjsFill />
                </>
              }
            />
            <Ligne
              text="Symfony, Tailwind CSS"
              command={
                <>
                  <SiSymfony />
                  <RiTailwindCssFill />
                </>
              }
            />
            <Ligne
              text="MySQL, PostgreSQL"
              command={
                <>
                  <SiMysql />
                  <SiPostgresql />
                </>
              }
            />
            <Ligne
              text="Docker, Supabase"
              command={
                <>
                  <SiDocker />
                  <SiSupabase />
                </>
              }
            />
            <Ligne
              text="Git/GitHub, WordPress"
              command={
                <>
                  <SiGithub />
                  <SiWordpress />
                </>
              }
              separation={true}
            />
            <Ligne text="Expérience :" />
            <Ligne text="Développeur Web Full Stack Stage - Cognossimo - 2026" />
            <Ligne text="Chargé d'assistance - Inter Mutuelle Assistance - 2019 à ce jour" />
            <Ligne text="Employé polyvalent de restauration - Mc Donald's - 2014 à 2016" />
            <Ligne
              text="Vendeur - Gamm Vert / Easy Cash - 2011 à 2013"
              separation={true}
            />
            <Ligne text="Formation :" />
            <Ligne text="Titre Professionnel Developpeur Web et Web Mobiles - Ceppic" />
            <Ligne text="Titre Porfessionnel Conseiller Relation Client à Distance - Afpa" />
            <Ligne text="Bepa Conseil Vente en animalerie - Mfr" />
          </>
        )}
        {id === 2 && (
          <>
            {/* Menu Protfolio */}
            <Ligne
              text="About Portfolio"
              icon={<ImInfo />}
              command={<BiCommand />}
              separation={true}
            />
            <Ligne text="Ce site est le fruit de 9 mois d'apprentissage au Ceppic et également d'un énorme investissement personnel." />
            <Ligne text="Je vous présente mon parcours, mes projets sous la forme d'une experience visuelle façon MacOS." />
            <Ligne text="Vous pouvez me laisser un avis ou me contacter." />
            <Ligne text="Bonne visite à vous ! 😊" separation={true} />
            <Ligne text="D'autres améliorations sont à venir 🧑‍💻" />
          </>
        )}
        {id === 3 && (
          <>
            <Ligne
              text="Visit my github profile"
              icon={<ImGithub />}
              separation={true}
            />
            <Ligne text="My first website" icon={<RxExternalLink />} />
            <Ligne text="My first group project" icon={<RxExternalLink />} />
            <Ligne
              text="My first work project"
              icon={<RxExternalLink />}
              separation={true}
            />

            <Ligne text="Meteo - JS/Tailwind CSS" icon={<RxExternalLink />} />
            <Ligne text="Shop - JS/Tailwind CSS" icon={<RxExternalLink />} />
            <Ligne
              text="Signin - Next.js/TypeScript"
              icon={<RxExternalLink />}
            />
            <Ligne text="Ceppix - PHP POO" icon={<RxExternalLink />} />
          </>
        )}

        {id === 4 && (
          <div className="p-3 space-y-3">
            <TextArea />
            <InputButton text="Submit"  classname= " hover:bg-white/10 " />
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
