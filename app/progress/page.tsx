import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const courses = [
  { id: 1, title: "Introduction to Web Development", progress: 75 },
  { id: 2, title: "Data Science Fundamentals", progress: 40 },
  { id: 3, title: "Mobile App Design", progress: 10 },
];

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Progress</h1>
      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={42} className="w-full" />
          <p className="text-center mt-2">42% Complete</p>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-semibold">Course Progress</h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={course.progress} className="w-full" />
              <p className="text-center mt-2">{course.progress}% Complete</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
