export default defineNuxtRouteMiddleware((to) => {
  if (to.name === 'error') { // 检测是否是 error 相关路由
    return navigateTo('https://www.google.com', { external: true })
  }
})