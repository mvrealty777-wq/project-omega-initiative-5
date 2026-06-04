import { useParams } from "react-router-dom"
import { SubServicePageTemplate } from "@/components/SubServicePageTemplate"
import { getSubService } from "@/data/servicesData"
import NotFound from "@/pages/NotFound"

export default function SubServicePage() {
  const { slug, subSlug } = useParams<{ slug: string; subSlug: string }>()
  const sub = slug && subSlug ? getSubService(slug, subSlug) : undefined

  if (!sub) {
    return <NotFound />
  }

  return <SubServicePageTemplate sub={sub} />
}
