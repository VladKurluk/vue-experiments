<template>
  <div class="container mx-auto" :class="$style.standardLayout">
    <header :class="$style.header">
      <slot name="header" />
    </header>
    <aside :class="$style.aside">
      <slot name="aside" />
    </aside>
    <main :class="$style.content">
      <slot name="content" />
    </main>
    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.standardLayout {
  display: grid;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-columns: 1fr 4fr;
  height: 600px;
}
.header,
.aside,
.content,
.footer {
  display: grid;
  place-items: center;
}
.header {
  grid-column: span 2;
  background-color: green;
}
.aside {
  background-color: indigo;
}
.content {
  background-color: purple;
}
.footer {
  grid-column: span 2;
  background-color: gray;
}
</style>
