import Link from "next/link";
export default function NotFound(){return <div className="not-found"><span>404 / SIGNAL LOST</span><h1>这里没有<br/>收到信号。</h1><p>链接可能已经变化，或者记录尚未公开。</p><div><Link href="/">RETURN TO SIGNALS ↗</Link><br/><Link href="/work">OPEN WORK INDEX ↗</Link></div></div>}
