import Link from "next/link";

interface IappProps {
    data: {
        id: string
        title: string
        content: string
        imageUrl: string
        authorId: string
        authorName: string
        authorImage: string
        createdAt: Date
        updatedAt: Date
    }
}

export function BlogPostCard({data}: IappProps) {
    return (
        <div
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
            <Link href={`/post/${data.id}`} className="block w-full h-full">

            </Link>
        </div>
    )
}