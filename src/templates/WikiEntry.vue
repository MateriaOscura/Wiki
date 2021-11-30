<template>
  <Layout>
    <div class="mb-16 prose dark:prose-light lg:prose-lg xl:prose-xl">
      <h1>{{ $page.wikiEntry.title }}</h1>
      <p class="intro">
        {{ $page.wikiEntry.excerpt }}
      </p>
      <VueRemarkContent />
    </div>
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
