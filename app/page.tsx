"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Award,
  BarChart2,
  FileText,
  Zap,
  Users,
  Target,
} from "lucide-react";

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      id: 1,
      title: "Enrolled Courses",
      value: 5,
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Completed Courses",
      value: 2,
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Overall Progress",
      value: 42,
      icon: BarChart2,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      title: "Pending Assignments",
      value: 3,
      icon: FileText,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 5,
      title: "Learning Streak",
      value: 7,
      icon: Zap,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 6,
      title: "Forum Posts",
      value: 12,
      icon: Users,
      color: "from-teal-500 to-green-500",
    },
    {
      id: 7,
      title: "Achievements",
      value: 8,
      icon: Target,
      color: "from-pink-500 to-rose-500",
    },
  ];

  const recentCourses = [
    { id: 1, title: "Introduction to Web Development", progress: 75 },
    { id: 2, title: "Data Science Fundamentals", progress: 40 },
    { id: 3, title: "Mobile App Design", progress: 10 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome to PAKTEQ Education LMS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.id}
            className={`overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 ${
              hoveredCard === stat.id
                ? "ring-2 ring-offset-2 ring-blue-500"
                : ""
            }`}
            onMouseEnter={() => setHoveredCard(stat.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className={`bg-gradient-to-r ${stat.color}`}>
              <CardTitle className="flex justify-between items-center text-white">
                {stat.title}
                <stat.icon className="w-8 h-8" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-4xl font-bold">
                {stat.id === 3 ? `${stat.value}%` : stat.value}
              </p>
              {stat.id === 3 && (
                <Progress value={stat.value} className="mt-2" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Recent Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentCourses.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg shadow-sm"
              >
                <div className="space-y-1 flex-1">
                  <p className="font-medium text-lg">{course.title}</p>
                  <Progress
                    value={course.progress}
                    className="w-full"
                    indicatorColor={`bg-gradient-to-r ${
                      course.progress < 30
                        ? "from-red-500 to-yellow-500"
                        : course.progress < 70
                        ? "from-yellow-500 to-green-500"
                        : "from-green-500 to-blue-500"
                    }`}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mx-4">
                  {course.progress}% Complete
                </p>
                <Button variant="outline" size="sm" asChild className="ml-4">
                  <Link href={`/courses/${course.id}/enrolled`}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
