<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue"

useSeoMeta({
  title: "Accueil",
  description: "Doume20 — étudiant, passionné de reverse engineering, cybersécurité, programmation et électronique.",
  ogTitle: "Doume20's homepage",
  ogDescription: "'jour",
  ogType: "website",
  ogImage: 'https://www.doume.be/favicon.ico',

  twitterTitle: "Accueil",
  twitterImage: "https://www.doume.be/favicon.ico",
})
</script>

<template>
  <HeroSection first-name="Doume20" description="Étudiant / Juste un gars"/>
</template>
