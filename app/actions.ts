"use server";

import {prisma} from "@/app/util/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export async function handleSubmission(formData: FormData) {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    const title = formData.get('title')
    const content = formData.get('content')
    const url = formData.get('url')

    const data = await prisma.blogPost.create({
        data: {
            title: title as string,
            content: content as string,
            imageUrl: url as string,
            authorId: user.id,
            authorImage: user.picture as string,
            authorName: user.given_name as string,
        },
    });

    return redirect("/dashboard");
}