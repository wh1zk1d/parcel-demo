import User from './interfaces/user.interface'

export default function (user: User): string {
  return `${user.name} is a ${user.age} years old ${user.role} and a really nice person ✨`
}
