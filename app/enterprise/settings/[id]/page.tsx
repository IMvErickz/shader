import { ChangeEnterpriseNameForm } from '@/components/enterprise/settings/change-enterprise-name-form'

export default function SettingEnterprisePage() {
  return (
    <div className="flex flex-col pt-2">
      <h1 className="text-white text-2xl text-semibold">
        Configurações da empresa
      </h1>
      <ChangeEnterpriseNameForm />
    </div>
  )
}
