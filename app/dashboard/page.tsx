import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default async function DashboardRoute() {

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Your Blog Articles</h2>

                <Link className={buttonVariants()} href="/dashboard/create">
                    Create Post
                </Link>
            </div>
        </div>
    );
}