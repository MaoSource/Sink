export default defineAppConfig({
  title: 'Google',
  email: '',
  github: '',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: 'https://google.com',
  description: '',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
