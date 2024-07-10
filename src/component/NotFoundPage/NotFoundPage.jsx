import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <section>
        <div className="flex flex-col gap-2 mt-10 ml-10">
          <div className="font-bold text-5xl">404 Hey Fellow User, Page Not Found</div>
          <Link to="/" className="underline">Go Back</Link>
        </div>
    </section>
  )
}
