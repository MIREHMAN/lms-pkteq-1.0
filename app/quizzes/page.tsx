"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Clock, FileText } from "lucide-react";

const quizzes = [
  {
    id: 1,
    title: "HTML Basics Quiz",
    questions: 10,
    timeLimit: 15,
    completed: true,
    score: 8,
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    questions: 15,
    timeLimit: 20,
    completed: false,
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    questions: 20,
    timeLimit: 30,
    completed: false,
  },
];

const assignments = [
  {
    id: 1,
    title: "Create a Responsive Webpage",
    dueDate: "2024-03-15",
    completed: false,
    progress: 30,
  },
  {
    id: 2,
    title: "Build a Simple JavaScript Game",
    dueDate: "2024-03-22",
    completed: false,
    progress: 0,
  },
  {
    id: 3,
    title: "Develop a React Component",
    dueDate: "2024-03-29",
    completed: true,
    grade: "A",
  },
];

export default function QuizzesPage() {
  const [activeTab, setActiveTab] = useState("quizzes");

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Quizzes & Assignments</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="quizzes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <Card
                key={quiz.id}
                className="overflow-hidden transition-all hover:shadow-lg"
              >
                <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500">
                  <CardTitle className="text-white">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>{quiz.questions} Questions</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{quiz.timeLimit} Minutes</span>
                    </div>
                  </div>
                  {quiz.completed ? (
                    <div className="text-center">
                      <p className="text-2xl font-bold mb-2">
                        Score: {quiz.score}/{quiz.questions}
                      </p>
                      <Progress
                        value={(quiz.score! / quiz.questions) * 100}
                        className="mb-2"
                      />
                      <Button variant="outline">Review Quiz</Button>
                    </div>
                  ) : (
                    <Button className="w-full">Start Quiz</Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => (
              <Card
                key={assignment.id}
                className="overflow-hidden transition-all hover:shadow-lg"
              >
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500">
                  <CardTitle className="text-white">
                    {assignment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-4">Due: {assignment.dueDate}</p>
                  {assignment.completed ? (
                    <div className="text-center">
                      <p className="text-2xl font-bold mb-2">
                        Grade: {assignment.grade}
                      </p>
                      <Button variant="outline">View Feedback</Button>
                    </div>
                  ) : (
                    <div>
                      <Progress value={assignment.progress} className="mb-2" />
                      <p className="text-sm text-gray-500 mb-4">
                        {assignment.progress}% Complete
                      </p>
                      <Button className="w-full">
                        {assignment.progress! > 0 ? "Continue" : "Start"}{" "}
                        Assignment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
