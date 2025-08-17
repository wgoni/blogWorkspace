const BASE_DOMAIN='goni-lab.xyz/'

const DOMAIN_NAME = {
  BLOG: `https://blog.${BASE_DOMAIN}`
}




const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  BLOG: DOMAIN_NAME.BLOG,
  PROFILE: '/profile/:id',
  NOT_FOUND: '*'
}

export default ROUTES