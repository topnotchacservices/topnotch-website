import { ServiceLandingPage } from "@/components/service-landing-page";

export default function ServicePage() {
  return <ServiceLandingPage eyebrow={"AC DIAGNOSTICS · SOUTH FLORIDA"} title={"Find the real reason your AC is not cooling."} description={"Careful AC diagnostics for cooling failures, water leaks, airflow concerns, electrical issues, and system performance problems."} image={"/images/home/ac-repair.svg"} imageAlt={"Top Notch AC Services AC diagnostic service"} highlights={["Cooling diagnosis","Electrical inspection","Clear recommendations"]} processTitle={"Diagnostics before recommendations."} process={["Inspect the system condition","Test key electrical and cooling components","Explain the next best step"]} />;
}
