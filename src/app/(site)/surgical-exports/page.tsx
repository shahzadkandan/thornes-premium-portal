import { notFound } from "next/navigation";
import { ServiceDetailView } from "../../../components/next/service-detail-view";
import { getService } from "../../../lib/wordpress/queries";

export default async function SurgicalExportsPage() {
  const service = await getService("surgical-instruments");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
