import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://instagram.com/zosono.id"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/10 hover:bg-pink-500/20 rounded-lg border border-white/10 hover:border-pink-500/30 transition-colors group"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5 text-white group-hover:text-pink-400" />
      </a>
      <a
        href="https://linkedin.com/company/zosono"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/10 hover:bg-blue-500/20 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors group"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5 text-white group-hover:text-blue-400" />
      </a>
      <a
        href="https://facebook.com/zosonoid"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/10 hover:bg-blue-700/20 rounded-lg border border-white/10 hover:border-blue-700/30 transition-colors group"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5 text-white group-hover:text-blue-500" />
      </a>
      <a
        href="https://twitter.com/zosonoid"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/10 hover:bg-cyan-500/20 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-colors group"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5 text-white group-hover:text-cyan-400" />
      </a>
    </div>
  )
}
