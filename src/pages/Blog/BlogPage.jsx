import Breadcrumbs from '../../components/breadcrumbs'


const BlogPage = () => {
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
  )
}

export default BlogPage
