import { UserInfo } from '@/models/UserInfo'
import { useStore } from '@/store'

export function authentication() {
  const store = useStore()

  function login(): void {
    window.location.href = '/.auth/login/aad'
  }

  function logout(): void {
    window.location.href = '/.auth/logout'
  }

  async function getUser(): Promise<UserInfo | null> {
    const response = await fetch('/.auth/me')
    const payload = await response.json()
    const { clientPrincipal } = payload
    if (!clientPrincipal) {
      return null
    }
    return new UserInfo(
      clientPrincipal.userId,
      clientPrincipal.userDetails,
      clientPrincipal.identityProvider,
      clientPrincipal.userRoles,
      clientPrincipal.claims
    )
  }

  function isAuthenticated(): boolean {
    return store.getters.getIsAuthenticated
  }

  function isAdmin(): boolean {
    return store.getters.getIsAdmin
  }

  return { login, logout, getUser, isAuthenticated, isAdmin }
}
