<template>
  <Layout>
    <h1>{{ $page.blogEntry.title }}</h1>
    <p class="intro">{{ $page.blogEntry.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query BlogEntry ($id: ID!) {
  blogEntry(id: $id) {
    title
  }
}
</page-query>
