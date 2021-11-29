<template>
  <Layout>
    <h1>Bienvenido al blog!</h1>
    <div class="entries">
      <div
        v-for="edge in $page.blogEntry.edges"
        :set="currentPage = edge.node"
        :key="edge.node.id"
        class="entry"
      >
        <g-link :to="currentPage.path">{{ currentPage.title }}</g-link>
      </div>
    </div>
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
