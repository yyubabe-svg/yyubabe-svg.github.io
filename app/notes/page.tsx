import type { Metadata } from "next";
import { BuildNoteCard } from "../../components/notes/BuildNoteCard";
import { notes } from "../../data/notes";

export const metadata: Metadata = { title: "构建笔记", description: "记录产品构建中那些让我修改判断的具体时刻。" };

export default function NotesPage() {
  return <div className="page-shell inner-page">
    <header className="page-hero narrative-hero"><p className="eyebrow">BUILD NOTES / REVISIONS</p><h1>我怎样<br /><em>改变判断。</em></h1><p>这里不是教程合集，而是一些具体的修订记录：我最初怎么想，实际发生了什么，以及下一次准备怎样做。</p></header>
    <div className="notes-list">{notes.map((note, index) => <BuildNoteCard key={note.slug} note={note} index={index} />)}</div>
  </div>;
}
