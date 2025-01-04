import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    duration: "8 weeks",
    level: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    instructor: "Jane Doe",
    lectures: [
      { title: "HTML Basics", duration: "45 minutes" },
      { title: "CSS Fundamentals", duration: "60 minutes" },
      { title: "JavaScript Introduction", duration: "90 minutes" },
    ],
  },
  // ... other courses
];

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg mb-4">{course.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold">
              Duration: {course.duration}
            </span>
            <span className="text-sm font-semibold">Level: {course.level}</span>
          </div>
          <Button size="lg">Enroll Now</Button>
        </div>
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="lectures" className="w-full">
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
              {course.lectures.map((lecture, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b last:border-b-0"
                >
                  <span>{lecture.title}</span>
                  <span className="text-sm text-gray-500">
                    {lecture.duration}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Course resources will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="discussions">
          <Card>
            <CardHeader>
              <CardTitle>Course Discussions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Course discussions will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
