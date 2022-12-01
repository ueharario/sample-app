<script setup lang="ts">
// 旧実装
// const { fetchArticles, articles } = useArticles();
// fetchArticles();

// useFetch($fetch)利用
const { data: articles, refresh } = await useFetch('/api/blogs');
</script>

<template>
    <div>
        <p>新着記事！！</p>
        <ul>
            <li v-for="article in articles" :key="article.id">
                <NuxtLink :to="`/details/${article.id}`">
                    {{ article.title }}
                </NuxtLink>
            </li>
        </ul>
        <!-- データ更新処理-->
        <button @click="refresh">最新情報取得</button>
        <Advertisement />
    </div>
</template>