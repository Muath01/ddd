"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function formPage() {
  const score = localStorage.getItem("qs4test");

  return (
    <div className="border-2 border-black-500 h-screen flex items-center justify-center ">
      <Card className="w-[350px] rounded-[10px] border border-black-500">
        <CardHeader>
          <CardTitle>Complete!</CardTitle>
          <CardDescription>
            Where would you like your results to be sent?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email:</Label>
                <Input
                  className="rounded-[5px]"
                  id="name"
                  placeholder="your-email@gmail.com"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            asChild
            className="bg-orange-500 rounded-[10px] hover:bg-orange-600"
          >
            <Link href={"/complete/payment"}>Finish</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default formPage;
