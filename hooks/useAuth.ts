import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export const useAuth = () => {
  const router = useRouter()
  const user = useSelector((state: any) => state.user.user) // Предположим, что состояние пользователя хранится здесь

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [router, user])
}
