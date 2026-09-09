import { ServiceLandingPage } from "@/components/service-landing-page";

export default function ServicePage() {
  return <ServiceLandingPage eyebrow={"THERMOSTAT SERVICES · SOUTH FLORIDA"} title={"Thermostat installation and troubleshooting."} description={"Professional thermostat setup, replacement, calibration, and troubleshooting for compatible HVAC systems."} image={"/images/home/ac-maintenance.svg"} imageAlt={"Top Notch AC Services thermostat service"} highlights={["Thermostat replacement","Calibration","System compatibility check"]} processTitle={"Simple, accurate comfort control."} process={["Check system compatibility","Install or troubleshoot the thermostat","Test operation and explain settings"]} />;
}
