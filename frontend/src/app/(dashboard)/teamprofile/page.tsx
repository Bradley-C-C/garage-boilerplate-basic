import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { CreateTeamProfileForm } from '@/features/team-page/components/CreateTeamProfileForm'
import { TeamProfileList } from '@/features/team-page/components/TeamProfileList'

export const metadata: Metadata = { title: 'Notes' }

export default async function TeamProfilesPage() {
  await requireAuth()
  return (
    <div className="space-y-6">
      <PageHeader title="Team Profile" description="Our Team" />
      <CreateTeamProfileForm />
      <TeamProfileList />
    </div>
  )
}