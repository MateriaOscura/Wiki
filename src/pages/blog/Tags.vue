<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-5">
      Estos son los tags que hay
    </h1>
    <ul class="list-outside list-disc">
      <li
        v-for="edge in $page.tagEntry.edges"
        :key="edge.node.id"
        :set="currentPage = edge.node"
        class="mt-3"
      >
        <g-link :to="currentPage.path">
          {{ currentPage.id }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Tag {
  tagEntry: allTag {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>
