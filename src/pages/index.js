import Image from "next/image";
import perfil from "@/assets/perfil.webp";

import Email from "@/assets/icons/email.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Github from "@/assets/icons/github.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Portfolio from "@/assets/icons/portfolio.svg";
import Whatsapp from "@/assets/icons/whatsapp.svg";

import SocialLink from "@/components/SocialLink";

export default function Home() {
  return (
    <div className="w-full max-w-[400px] px-5 py-5 bg-black rounded-lg shadow-[0px_0px_8px_0px_rgba(255,115,0,0.50)] flex flex-col justify-start items-center gap-2.5 mx-auto">
        {/* perfil */}
      <div className="relative w-34 h-34">
        <Image
          src={perfil}
          alt="Foto de perfil"
          fill
          className="object-cover rounded-full shadow-[0px_0px_8px_0px_rgba(255,115,0,0.50)]"
        />
      </div>
      {/* nome */}
      <div className="flex flex-col justify-start items-center">
        <h1 className="justify-start text-white text-2xl font-normal">
          Gabriel Martins
        </h1>
        <h2 className="justify-start text-[#c4c4c4] text-sm font-normal">
          Desenvolvedor Fullstack
        </h2>
      </div>
      {/* links */}
      <div className="flex flex-col items-center w-full gap-3">
        <SocialLink
          href="https://gbr-dev-web.github.io/"
          Icon={Portfolio}
          label="Portfólio"
        />
        <SocialLink
          href="https://wa.me/5585996594003?text=Olá!%20Vim%20pelo%20site,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
          Icon={Whatsapp}
          label="WhatsApp"
        />
        <SocialLink
          href="mailto:gabrielsil20177@gmail.com"
          Icon={Email}
          label="E-mail"
        />
        <SocialLink
          href="https://www.linkedin.com/in/gabriel-martins-042900279/"
          Icon={Linkedin}
          label="LinkedIn"
        />
        <SocialLink
          href="https://github.com/gbr-dev-web"
          Icon={Github}
          label="GitHub"
        />
        <SocialLink
          href="https://instagram.com/gabriel.martins.dev"
          Icon={Instagram}
          label="Instagram"
        />
      </div>
      {/* copy */}
      <p className="text-[#c4c4c4] text-xs font-normal mt-2">
        @2025 - Desenvolvido por Gabriel Martins
      </p>
    </div>
  );
}
