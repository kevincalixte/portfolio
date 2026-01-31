import { BiCommand, BiLaptop } from "react-icons/bi";
import { ImGithub, ImInfo } from "react-icons/im";
import Ligne from "./Ligne";
import {
  RiCss3Fill,
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
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiSymfony,
} from "react-icons/si";
import { LuLink } from "react-icons/lu";
import { RxExternalLink } from "react-icons/rx";

type MenuProps = {
  id: number;
  width?: string;
  height?: string;
};
const Menu = ({ id, width, height }: MenuProps) => {
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
              text="À propos de moi"
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
            <Ligne text="Git/GitHub, WordPress" separation={true} />
            <Ligne text="Expérience :" />
            <Ligne text="Développeur Web Full Stack Stage - Cognossimo - 2026" />
            <Ligne text="Chargé d'assistance - Inter Mutuelle Assistance - 2019 à ce jour" />
            <Ligne text="Employé polyvalent de restauration - Mc Donald's - 2014 à 2016" />
            <Ligne
              text="Vendeur - Gamm Vert / Easy Cash - 2011 à 2013"
              separation={true}
            />
            <Ligne text="Formation :" />
            <Ligne text="TITRE PROFESSIONNEL DEVELOPPEUR WEB ET WEB MOBILES - CEPPIC" />
            <Ligne text="TITRE PROFESSIONNEL CONSEILLER RELATION CLIENT À DISTANCE - AFPA" />
            <Ligne text="BEPA CONSEIL VENTE EN ANIMALERIE - MFR" />
          </>
        )}
        {id === 2 && (
          <>
            {/* Menu Protfolio */}
            <Ligne
              text="À propos de Portfolio"
              icon={<ImInfo />}
              command={<BiCommand />}
              separation={true}
            />
            <Ligne text="D'autres améliorations sont à venir 🧑‍💻" />
          </>
        )}
        {id === 3 && (
          <>
          <Ligne text="Visit my github profile" icon={<ImGithub/>} separation={true}/>
          <Ligne text="Meteo - JS/Tailwind CSS" icon={<RxExternalLink/>} separation={true}/>
          <Ligne text="Shop - JS/Tailwind CSS" icon={<RxExternalLink/>} separation={true}/>
          <Ligne text="Signin - Next.js/TypeScript" icon={<RxExternalLink/>} separation={true}/>
          <Ligne text="Ceppix - PHP POO" icon={<RxExternalLink/>} separation={true}/>
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
