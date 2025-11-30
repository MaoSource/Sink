export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  if (to.name === 'error') {
    console.log('Redirecting to Google...')
    return navigateTo('https://www.google.com', { external: true })
  }

  if (to.path.startsWith('/dashboard') && to.path !== '/dashboard/login') {
    if (!window.localStorage.getItem('SinkSiteToken'))
      return navigateTo('/dashboard/login')
  }

  if (to.path === '/dashboard/login') {
    try {
      await useAPI('/api/verify')
      return navigateTo('/dashboard')
    }
    catch (e) {
      console.warn(e)
    }
  }
})