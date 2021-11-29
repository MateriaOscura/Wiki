<template>
  <Layout>
    <h1>{{ $page.blogEntry.title }}</h1>
    <p class="date">{{ $page.blogEntry.date }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query BlogEntry ($id: ID!) {
  blogEntry(id: $id) {
    title
    date
  }
}
</page-query>
