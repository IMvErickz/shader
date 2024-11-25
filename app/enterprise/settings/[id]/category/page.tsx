import { CategoryList } from '@/components/enterprise/settings/category/category-list'
import { CreateCategoryForm } from '@/components/enterprise/settings/category/create-category-form'

export default function CategoryPage() {
  return (
    <main className="size-full flex flex-col p-4 gap-y-4">
      <section>
        <CreateCategoryForm />
      </section>
      <section>
        <CategoryList />
      </section>
    </main>
  )
}
