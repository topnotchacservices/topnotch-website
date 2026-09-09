import { ServiceLandingPage } from "@/components/service-landing-page";

export default function ServicePage() {
  return <ServiceLandingPage eyebrow={"AIR HANDLER SERVICE · SOUTH FLORIDA"} title={"Air handler service for airflow and drainage problems."} description={"Inspection, repair, cleaning, and service for indoor air handlers, blower components, coils, and condensate drainage."} image={"/images/home/ac-system-service.svg"} imageAlt={"Top Notch AC Services air handler service"} highlights={["Airflow inspection","Drainage service","Blower and coil checks"]} processTitle={"Indoor equipment service done carefully."} process={["Inspect the air handler condition","Check airflow, coil, and drain components","Review the needed repair or service"]} />;
}
