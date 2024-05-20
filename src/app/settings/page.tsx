import { auth, signOut } from "@/auth"

export default async function SettingsPage() {
  const session = auth()
  const handleSignout = async () => {
    "use server"
    await signOut()
  }

  return (
    <div className="h-full bg-app text-white">
      {JSON.stringify(session, null, 2)}
      <form action={handleSignout}>
        <button type="submit">Signout</button>
      </form>
    </div>
  )
}
