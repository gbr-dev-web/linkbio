export default function SocialLink({ href, Icon, label }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="self-stretch px-3 py-2.5  bg-zinc-900 rounded-lg outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-start items-center gap-1 overflow-hidden holographic-hover transition-transform hover:scale-105 animate-glow "
      >
        <Icon className="w-7 h-7" />
        <p className="text-sm">{label}</p>
      </a>
    );
  }
  