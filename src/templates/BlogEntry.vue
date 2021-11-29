<template>
  <Layout>
    <h1>{{ $page.blogEntry.title }}</h1>
    <p class="date">
      {{ $page.blogEntry.date }}
    </p>
    <div class="mt-8 mb-16 prose lg:prose-lg xl:prose-xl">
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<page-query>
query BlogEntry ($id: ID!) {
  blogEntry(id: $id) {
    title
    date
  }
}
</page-query>
