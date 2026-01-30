import React from "react";
import { BiCommand } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import Ligne from "./Ligne";

type MenuProps = {
  id: number;
  width?: string;
  height?: string;
};
const Menu = ({ id, width, height }: MenuProps) => {
  width = "min-w-72";
  //   height = "h-48";
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
            {/* Menu Protfolio */}
            <Ligne
              text="À propos de Protfolio"
              icon={<ImInfo />}
              command={<BiCommand />}
              separation={true}
            /> 

            <Ligne
              text="Bonjour visiteur ! Sur ce site vous saurez-tout de moi, ou presque ! Je vous laisse donc explorer 😉"
              separation={true}
            />
            <Ligne text="Cliques sur la pomme pour voir mon résumé 👀 ↖" />
          </>
        )}{" "}
        {id === 2 && (
          <>
            {/* Menu pomme */}
            <Ligne
              text="À propos de moi"
              icon={<ImInfo />}
              command={<BiCommand />}
              separation={true}
            />

            <Ligne text="Kévin Calixte, 31 ans" />
            <Ligne
              text="Développeur Full Stack Junior en devenir"
              separation={true}
            />
            <Ligne text="Compétences :"/>
            <Ligne text="HTML, CSS, JS, PHP POO" />
            <Ligne text="React.js, Next.js, Node.js" />
            <Ligne text="Symfony, Tailwind CSS" />
            <Ligne text="MySQL, PostgreSQL, Docker, Supabase" />
            <Ligne text="Git/GitHub, WordPress" separation={true} />
            <Ligne text="Expérience :" />
            <Ligne text="Chargé d'assistance - Inter Mutuelle Assistance - 2019 à ce jour" />
            <Ligne text="Employé polyvalent de restauration - Mc Donald's - 2014 à 2016" />
            <Ligne
              text="Vendeur - Gamm Vert / Easy Cash - 2011 à 2013"
              separation={true}
            />
            <Ligne text="Formation :" />
            <Ligne text="TITRE PROFESSIONNEL DEVELOPPEUR WEB ET WEB MOBILES, CEPPIC" />
            <Ligne text="TITRE PROFESSIONNEL CONSEILLER RELATION CLIENT À DISTANCE, AFPA" />
            <Ligne text="BEPA CONSEIL VENTE EN ANIMALERIE, MFR" />
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
