<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-5">
      Bienvenido al tag
    </h1>
    <ul class="list-outside list-disc">
      <li
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :set="currentTag = edge.node"
        class="mt-3"
      >
        <g-link :to="currentTag.path">
          {{ currentTag.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    id
    belongsTo {
      edges {
        node {
          ... on BlogEntry {
            title
            id
            path
          }
        }
      }
    }
  }
}
</page-query>
