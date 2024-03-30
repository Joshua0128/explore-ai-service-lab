import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUser } from '@clerk/nextjs'

const UserAvatar = () => {
  const { user } = useUser()

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
      <AvatarFallback>{user?.lastName?.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
