import { ServiceLandingPage } from "@/components/service-landing-page";

export default function ServicePage() {
  return <ServiceLandingPage eyebrow={"AC INSTALLATION · SOUTH FLORIDA"} title={"New AC installation done with care."} description={"Professional central AC installation, equipment setup, connection work, and startup testing for South Florida properties."} image={"/images/home/ac-installation.svg"} imageAlt={"Top Notch AC Services AC installation service"} highlights={["New system installation","Airflow evaluation","Startup testing"]} processTitle={"Installation planned around your property."} process={["Evaluate equipment and airflow needs","Install and connect the system","Test cooling performance before completion"]} />;
}
