<template>
  <Layout>
    <h1>{{ $page.wikiEntry.title }}</h1>
    <p class="intro">{{ $page.wikiEntry.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query WikiEntry ($id: ID!) {
  wikiEntry(id: $id) {
    title
  }
}
</page-query>
