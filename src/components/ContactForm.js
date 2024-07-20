"use client";

import { useForm } from "react-hook-form";

export function ContactForm () {

    return (
        <form onSubmit={form.handleSubmit(handleSendData)}>
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />


        </div>
        </form>




    )
}