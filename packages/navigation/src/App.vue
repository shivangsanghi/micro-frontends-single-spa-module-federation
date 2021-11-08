@@ -1,26 +0,0 @@
<template>
  <div class="header">
    <div class="inner">
      Header
    </div>
  </div>
</template>

<style scoped lang="scss">
  .header {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: orange;
    color: black;
    padding-left: 1em;
  }
</style>