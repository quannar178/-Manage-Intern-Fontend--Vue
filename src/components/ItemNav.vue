<template>
  <div>
    <button
      class="btn btn-primary w-100"
      type="button"
      data-toggle="collapse"
      data-target="#collapseExample"
    >
      Button with data-target
    </button>

    <div class="collapse" id="id">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  
};
</script>

<style></style>
