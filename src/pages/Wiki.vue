<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-5">Bienvenido a la Wiki</h1>
    <ul class="list-outside list-disc">
      <li
        v-for="edge in $page.wikiEntry.edges"
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
