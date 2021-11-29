<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-5">Bienvenido al blog!</h1>
    <ul class="list-outside list-disc">
      <li
        v-for="edge in $page.blogEntry.edges"
        :set="currentPage = edge.node"
        :key="edge.node.id"
        class="mt-3"
      >
        <g-link :to="currentPage.path">{{ currentPage.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query BlogEntry {
  blogEntry: allBlogEntry {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>
