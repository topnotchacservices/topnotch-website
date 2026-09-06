import "server-only";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export type ContactRequest = {
  firstName: string; lastName: string; phone: string; email: string; address: string; city: string;
  serviceNeeded: string; preferredContact: string; message: string; consent: boolean; website?: string;
};

const requestsDirectory = path.join(process.cwd(), ".topnotch-content");
const requestsFile = path.join(requestsDirectory, "contact-requests.ndjson");

export async function saveContactRequest(request: ContactRequest) {
  await mkdir(requestsDirectory, { recursive: true });
  await appendFile(requestsFile, `${JSON.stringify({ ...request, website: undefined, receivedAt: new Date().toISOString() })}\n`, "utf8");
}