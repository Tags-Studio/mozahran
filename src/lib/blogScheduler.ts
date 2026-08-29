import { blogPosts, type BlogPost } from "./blogData.rewritten";

// Launch date of the blog: August 29, 2026
const LAUNCH_DATE = new Date("2026-08-29T00:00:00");

export function getPublishedPosts(): BlogPost[] {
  const now = new Date();
  
  // Calculate weeks elapsed since launch date
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const timeDiff = now.getTime() - LAUNCH_DATE.getTime();
  
  // If we haven't reached the launch date yet, default to showing the first 10 posts
  const weeksElapsed = timeDiff > 0 ? Math.floor(timeDiff / msPerWeek) : 0;
  
  // Rule: Start with 10 posts, then release 2 more posts per week
  const allowedCount = 10 + weeksElapsed * 2;
  
  // Return the allowed posts sliced from the full list
  return blogPosts.slice(0, Math.min(allowedCount, blogPosts.length));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const published = getPublishedPosts();
  return published.find((post) => post.slug === slug);
}
