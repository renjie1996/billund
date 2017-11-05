<template>
    <div>
        <h2 class="hello">Hello {{name}} {{ $attrs }}</h2>
        <ul>
            <li>
                <router-link to="/">/</router-link>
            </li>
            <li>
                <router-link to="/hello/you">/hello/you</router-link>
            </li>
            <li>
                <router-link to="/static">/static</router-link>
            </li>
            <li>
                <router-link to="/dynamic/1">/dynamic/1</router-link>
            </li>
            <li>
                <router-link to="/attrs">/attrs</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Vue!'
        }
    }
}
</script>