import { signOut } from "@/auth"

export default async function SettingsPage() {
  const handleSignout = async () => {
    "use server"
    await signOut()
  }

  return (
    <div className="h-full bg-app text-white">
      <form action={handleSignout}>
        <button type="submit">Signout</button>
      </form>
    </div>
  )
}
