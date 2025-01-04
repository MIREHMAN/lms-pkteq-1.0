import Link from "next/link";
import { Home, BookOpen, Award, BarChart2, FileText } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-indigo-800 to-purple-800 text-white h-screen p-4 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">PAKTEQ Education</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded transition duration-150 ease-in-out"
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded transition duration-150 ease-in-out"
            >
              <BookOpen size={20} />
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link
              href="/progress"
              className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded transition duration-150 ease-in-out"
            >
              <BarChart2 size={20} />
              <span>Progress</span>
            </Link>
          </li>
          <li>
            <Link
              href="/certificates"
              className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded transition duration-150 ease-in-out"
            >
              <Award size={20} />
              <span>Certificates</span>
            </Link>
          </li>
          <li>
            <Link
              href="/quizzes"
              className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded transition duration-150 ease-in-out"
            >
              <FileText size={20} />
              <span>Quizzes & Assignments</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
