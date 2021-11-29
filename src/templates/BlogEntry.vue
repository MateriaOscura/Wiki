<template>
  <Layout>
    <div class="mb-16 prose dark:prose-light lg:prose-lg xl:prose-xl">
      <p class="mb-4 font-light text-gray-700 dark:text-gray-400">
        {{ $page.blogEntry.date }}
      </p>
      <h1 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-200">
        {{ $page.blogEntry.title }}
      </h1>
      <div class="flex flex-wrap mb-4 text-sm">
        <g-link
          v-for="tag in $page.blogEntry.tags"
          :key="tag.id"
          :to="tag.path"
          class="px-2 py-1 mb-4 mr-4 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-300 hover:bg-gray-700 dark:hover:text-gray-700 dark:hover:bg-gray-300"
        >
          {{ tag.id }}
        </g-link>
      </div>
      <figure
        v-if="$page.blogEntry.image"
        class="flex flex-col"
      >
        <g-image
          :alt="$page.blogEntry.image.alt"
          :src="$page.blogEntry.image.path"
          class="mb-2"
        />
        <figcaption
          class="self-center mb-10 image-caption"
          v-html="$page.blogEntry.image.caption"
        />
      </figure>
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<page-query>
query BlogEntry ($id: ID!) {
  blogEntry(id: $id) {
    title
    date (format: "dddd[,] D [de] MMMM [de] YYYY", locale: "es")
    tags {
      id
      path
    }
  }
}
</page-query>
