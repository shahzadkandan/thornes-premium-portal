import { notFound } from "next/navigation";
import { ServiceDetailView } from "../../../components/next/service-detail-view";
import { getService } from "../../../lib/wordpress/queries";

export default async function MedicineExportsPage() {
  const service = await getService("medicine-export-coordination");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
