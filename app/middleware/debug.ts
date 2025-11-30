export default eventHandler((event) => {
  console.log('Global Debug Middleware hit:', event.path)
})
