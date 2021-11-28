<template>
  <Layout>
    <h1>{{ $page.wiki.title }}</h1>
    <p class="intro">{{ $page.wiki.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Wiki ($id: ID!) {
  wiki(id: $id) {
    title
  }
}
</page-query>
