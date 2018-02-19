import Home from './modules/home/Home'
import Details from './modules/details/Details'

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/home/:number",
    component: Details
  }
]

export default routes