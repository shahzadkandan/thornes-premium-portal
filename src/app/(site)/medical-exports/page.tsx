import { notFound } from "next/navigation";
import { ServiceDetailView } from "../../../components/next/service-detail-view";
import { getService } from "../../../lib/wordpress/queries";

export default async function MedicalExportsPage() {
  const service = await getService("medical-supplies");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
