import Signup from "@/app/components/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Create an account",
};

export default function SignupPage() {
  return <Signup />;
}