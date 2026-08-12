'use client'

import { where } from 'firebase/firestore'
import { useCollection } from '@/hooks/useFirestore'
import { useAuth } from '@/hooks/useAuth'
import { getTeamProfilesCollection } from '@/lib/firebase/firestore'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { EmptyState } from '@/components/shared/EmptyState'

export function TeamProfileList() {
  const { user } = useAuth()

  if (!user) {
    return <LoadingSpinner />
  }

  return <TeamProfileListContent uid={user.uid} />
}

function TeamProfileListContent({ uid }: { uid: string }) {
  const { data: profiles, loading } = useCollection(
    getTeamProfilesCollection(),
    where('uid', '==', uid)
  )

  if (loading) return <LoadingSpinner />
  if (profiles.length === 0) {
    return <EmptyState title="No Team Profiles yet" />
  }

  return (
    <ul className="space-y-4">
      {profiles.map((profile) => (
        <li
          key={profile.id}
          className="flex items-center gap-4 rounded-lg border p-4"
        >
          {profile.photoURL && (
            <img
              src={profile.photoURL}
              alt={profile.displayName ?? 'Team member'}
              className="h-16 w-16 rounded-full object-cover"
            />
          )}

          <div>
            <h3 className="font-medium">
              {profile.displayName}
            </h3>

            <p className="text-xs font-medium text-zinc-400">
              {profile.role}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              {profile.blurb}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}