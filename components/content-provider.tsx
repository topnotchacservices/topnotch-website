"use client";

import { createContext, useContext } from "react";
import type { EditableContent } from "@/data/content-types";

const ContentContext = createContext<EditableContent | null>(null);
export function ContentProvider({ content, children }: { content: EditableContent; children: React.ReactNode }) { return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>; }
export function useSiteContent() { const content = useContext(ContentContext); if (!content) throw new Error("Site content is unavailable."); return content; }
