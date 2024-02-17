import React from "react";
import Breadcrumbs from "../../components/breadcrumbs";

export default function BlogPage() {
  const blogBreadcrumbs = [
    {
      to: "/blog",
      title: "Bài viết",
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={blogBreadcrumbs} />
    </div>
  );
}
