import { useParams } from "react-router-dom"
import { ServicePageTemplate } from "@/components/ServicePageTemplate"
import { HammamPageTemplate } from "@/components/HammamPageTemplate"
import { getServiceBySlug } from "@/data/servicesData"
import NotFound from "@/pages/NotFound"

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <NotFound />
  }

  if (service.slug === "hammam") {
    return <HammamPageTemplate service={service} />
  }

  return <ServicePageTemplate service={service} />
}