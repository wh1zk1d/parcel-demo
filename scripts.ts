import User from './interfaces/user.interface'
import getBio from './getBio'
import renderBio from './renderBio'

const user: User = {
  name: 'Jannik',
  age: 23,
  role: 'fullstack dev',
}
const bio = getBio(user)

// Render stuff
renderBio(bio)
