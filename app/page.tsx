import Image from "next/image";
// import { Dashboard } from "../components/dashboard/Dashboard";
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      {/* <Dashboard /> */}
      <h1>Hello World</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
