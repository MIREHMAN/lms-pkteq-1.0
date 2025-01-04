"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, CheckCircle, Clock, Download } from "lucide-react";

const course = {
  id: 1,
  title: "Introduction to Web Development",
  description:
    "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
  instructor: "Jane Doe",
  totalLectures: 20,
  completedLectures: 8,
  image:
    "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  lectures: [
    {
      id: 1,
      title: "Introduction to HTML",
      duration: "45:00",
      completed: true,
      progress: 100,
    },
    {
      id: 2,
      title: "HTML Structure and Elements",
      duration: "55:00",
      completed: true,
      progress: 100,
    },
    {
      id: 3,
      title: "Introduction to CSS",
      duration: "50:00",
      completed: true,
      progress: 100,
    },
    {
      id: 4,
      title: "CSS Styling and Selectors",
      duration: "60:00",
      completed: true,
      progress: 100,
    },
    {
      id: 5,
      title: "CSS Layout and Positioning",
      duration: "65:00",
      completed: true,
      progress: 100,
    },
    {
      id: 6,
      title: "Introduction to JavaScript",
      duration: "55:00",
      completed: true,
      progress: 100,
    },
    {
      id: 7,
      title: "JavaScript Basics: Variables and Data Types",
      duration: "50:00",
      completed: true,
      progress: 100,
    },
    {
      id: 8,
      title: "JavaScript Functions and Objects",
      duration: "60:00",
      completed: true,
      progress: 100,
    },
    {
      id: 9,
      title: "DOM Manipulation with JavaScript",
      duration: "70:00",
      completed: false,
      progress: 35,
    },
    {
      id: 10,
      title: "Event Handling in JavaScript",
      duration: "55:00",
      completed: false,
      progress: 0,
    },
  ],
};

export default function EnrolledCoursePage() {
  const [activeTab, setActiveTab] = useState("lectures");
  const [currentLecture, setCurrentLecture] = useState(course.lectures[8]); // The first incomplete lecture

  const overallProgress =
    (course.completedLectures / course.totalLectures) * 100;

  const handleStartLecture = (lecture: (typeof course.lectures)[0]) => {
    setCurrentLecture(lecture);
    // We're not using toast here anymore as we're navigating to the lecture page
  };

  const handleDownloadResources = () => {
    // We're not using toast here anymore as we're downloading
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <div className="relative h-64 md:h-96 mb-4">
            <Image
              src={course.image}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold">
              Instructor: {course.instructor}
            </span>
            <span className="text-sm font-semibold">
              {course.completedLectures}/{course.totalLectures} Lectures
              Completed
            </span>
          </div>
          <Progress value={overallProgress} className="mb-4" />
          <p className="text-lg mb-4">{course.description}</p>
        </div>
        <Card className="md:w-1/3">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardTitle>Current Lecture</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">
              {currentLecture.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Duration: {currentLecture.duration}
            </p>
            <Progress value={currentLecture.progress} className="mb-4" />
            <Button
              className="w-full"
              onClick={() => handleStartLecture(currentLecture)}
            >
              <Play className="mr-2 h-4 w-4" />{" "}
              {currentLecture.progress > 0 ? "Continue" : "Start"} Lecture
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="lectures">Lectures</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>
        <TabsContent value="lectures">
          <Card>
            <CardHeader>
              <CardTitle>Course Lectures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.lectures.map((lecture) => (
                  <Card key={lecture.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {lecture.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Play className="h-5 w-5 text-blue-500" />
                          )}
                          <h3 className="font-semibold">{lecture.title}</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            {lecture.duration}
                          </span>
                        </div>
                      </div>
                      <Progress
                        value={lecture.progress}
                        className="mt-2"
                        indicatorColor={`bg-gradient-to-r ${
                          lecture.progress < 30
                            ? "from-red-500 to-yellow-500"
                            : lecture.progress < 70
                            ? "from-yellow-500 to-green-500"
                            : "from-green-500 to-blue-500"
                        }`}
                      />
                      <div className="flex justify-end mt-2">
                        <Button  size="sm" asChild>
                          <Link
                            href={`/lectures/${lecture.id}`}
                          >
                            {lecture.completed ? "Review" : "Start"}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Course Syllabus</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownloadResources}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Lecture Slides</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownloadResources}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Code Examples</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownloadResources}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="discussions">
          <Card>
            <CardHeader>
              <CardTitle>Course Discussions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join the conversation with your peers and instructors.</p>
              {/* In a real application, we would implement a discussion forum here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
