import { supabase } from "@/lib/initSupabase";
import { ProjectRow } from "@/lib/schema";

let cache = new Map();

export function fetchData(timestamp: string) {
    if (!cache.has(timestamp)) {
        cache.set(timestamp, fetchProjects());
    }
    return cache.get(timestamp);
}

export const fetchProjects = async (): Promise<ProjectRow[]> => {
    let { data: projects_v0, error } = await supabase
        .from("projects_v0")
        .select("*")
        .order("year", { ascending: false });
    if (error) {
        console.log("error", error);
        throw new Error(error.message)
    } else {
        return projects_v0 || []
    }
};
