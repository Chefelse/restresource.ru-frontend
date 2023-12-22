<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 38" fill="none" width="53" height="58">
      <path
        d="M3.02505 3.77438C-2.49719 17.0014 5.02506 44.2743 5.02505 35.2742C5.02505 -24.2257 43.5262 8.77434 8.02586 23.2744"
        stroke="currentColor"
        stroke-width="1.2"
      />
      <path
        d="M22 12V19M22 37.5V19M22 19C25 14 28.9999 15 24 22.5C23.1354 23.7969 25 15.5 32 15"
        stroke="currentColor"
        stroke-width="1.2"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: rgb(var(--c-background));
  inset: 0;
  position: fixed;
}

svg {
  inset: 0;
  margin: auto;
  position: fixed;
}

svg {
  border: 3px solid;
  display: block;
  height: 72px;
  padding: 5px;
  width: 72px;

  path {
    animation: dash 5s linear infinite;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;

    &:last-child {
      animation-delay: 1.2s;
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
    }
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
