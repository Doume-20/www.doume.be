import type { Component } from "vue"
import { Home, User, Mail, Globe } from "@lucide/vue"
import BrandIcons from "@/components/icons/BrandIcons.vue"

import { h } from "vue"
const GithubIcon = () => h(BrandIcons, { name: "github" })
const DiscordIcon = () => h(BrandIcons, { name: "discord" })

export const DISCORD_ID = "784483333149163540"
export const GITHUB_USERNAME = "Doume-20"
export const SUBDOMAIN = "www"
export const DOMAIN = "doume.be"
export const EMAIL = `20@${DOMAIN}`

export interface NavSection {
  path: string
  label: string
  icon: Component
}

export const NAV_SECTIONS: NavSection[] = [
  { path: "/", label: "Accueil", icon: Home },
  { path: "/me", label: "À propos", icon: User },
  { path: "/github", label: "GitHub", icon: GithubIcon },
]

export interface SocialLink {
  label: string
  href: string
  icon: Component
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}/${SUBDOMAIN}.${DOMAIN}`,
    icon: GithubIcon,
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "Site",
    href: `https://${SUBDOMAIN}.${DOMAIN}`,
    icon: Globe,
  },
  {
    label: "Discord",
    href: `https://discord.com/users/${DISCORD_ID}`,
    icon: DiscordIcon,
  }
]

export type SkillGroup = { titre?: string; items: string[] }

export type BiographyEntry =
  | { type: "presentation"; texte: string[] }
  | { type: "skills-vertical"; texte: SkillGroup[] }
  | { type: "skills-horizontal"; texte: SkillGroup[] }
  | { type: "devices"; texte: { nom: string; description?: string }[] }

export type Biography = BiographyEntry[]

export const BIOGRAPHY: Biography = [
  {
    type: "presentation",
    texte: ["'jour, ", "test", "..."],
  },
  {
    type: "skills-vertical",
    texte: [
      { titre: "IDE", items: ["VS Code", "Neovim", "Pycharm", ] },
      { titre: "Langages", items: ["Python", "C++", "Vue", "JS", ] },
      { titre: "Frameworks", items: ["Nuxt", "Tailwind CSS", ] },
    ],
  },
  {
    type: "devices",
    texte: [
      { nom: "Lenovo ThinkPad x13 gen4", description: "Ordinateur que j'utilise au quotidien" },
      { nom: "FairPhone Gen. 6", description: "Mon téléphone principal, dont je suis fier (FairPhone est très bien je trouve, en tout cas, pour mon usage)" },
    ],
  },
]

export const FEATURED_REPOS: string[] = [
  `${GITHUB_USERNAME}/${SUBDOMAIN}.${DOMAIN}`,
  `${GITHUB_USERNAME}/${DOMAIN}`,
  `${GITHUB_USERNAME}/RIDF`,
] 
/* 
    !   Il n'est pas recommandé d'avoir cet array vide ou d'avoir plus de 3 repos non plus
    !   pour un meilleur layout, 3 est le max (recommandé)
    !   mais si vous voulez en avoir plus, 6 est vraiment le max (visible) 
    !   parce que la page ne permet pas ce scroller, ce qui bloque la possibilité de voir plus de repos

    TODO: Régler le problème
*/