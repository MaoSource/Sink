export default defineAppConfig({
  title: 'Tomatos',
  email: '',
  github: '',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: 'https://tomatos.cn',
  description: 'Tomatos',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
