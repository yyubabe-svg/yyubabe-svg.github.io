import Link from "next/link";
export default function NotFound(){return <div className="not-found page-shell"><span>404 / ROUTE NOT FOUND</span><h1>这个节点还没有<br/>接入产品系统。</h1><p>链接可能已经变化，或者内容仍在实验阶段。</p><div><Link className="button button-primary" href="/">返回首页 ↗</Link><Link className="button button-secondary" href="/projects">浏览项目 ↗</Link></div></div>}
