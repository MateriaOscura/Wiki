<template>
  <Layout>
    <h1>Bienvenido a la Wiki</h1>
    <div class="entries">
      <div
        v-for="edge in $page.wikiEntry.edges"
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
query WikiEntry {
  wikiEntry: allWikiEntry {
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
