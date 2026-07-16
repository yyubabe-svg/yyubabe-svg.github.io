"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BuildNote } from "../../data/notes";

export function BuildNoteCard({ note, index }: { note: BuildNote; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `note-${note.slug}`;
  return (
    <article className={`build-note ${open ? "open" : ""}`}>
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div><small>{note.date}{note.relatedProject ? ` · ${note.relatedProject}` : ""}</small><h2>{note.title}</h2><p>{note.observation}</p></div>
        <ChevronDown aria-hidden="true" />
      </button>
      <div id={panelId} hidden={!open} className="build-note-body">
        <div><small>最初判断</small><p>{note.initialBelief}</p></div>
        <div><small>实际发生</small><p>{note.whatHappened}</p></div>
        <div><small>修改判断</small><p>{note.changedBelief}</p></div>
        <div><small>下一步</small><p>{note.nextAction}</p></div>
      </div>
    </article>
  );
}
