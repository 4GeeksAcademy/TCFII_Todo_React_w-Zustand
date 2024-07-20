"use client"

import Link from "next/link";
import { TodoList } from "@/components/TodoList";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {

    return (
        <div className="container mx-auto text-white text-xl">
            <TodoList value="user5"/>
            <ContactForm />
        </div>
    );
}