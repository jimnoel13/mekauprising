<template>
  <div class="game bg-default">
    <h1 class="text-light text-center text-hv-center text-sofia">Coming Soon...</h1>
  </div>
</template>

<script>

export default {
  name: 'Game',
  components: {}
}
</script>

<style scoped>
	.game{
		position: relative;
		height: 600px;
	}

	.text-hv-center{
		margin: 0; 
        position: absolute; 
        top: 40%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
        padding: 15px 0;
        text-shadow: 2px 2px 4px #000000;
	}
</style>