<template>
  <li class="list-group-item" v-bind:data-id="id">
      <div class="read" v-if="!isUpdate">
          <span class="glyphicon glyphicon-remove pull-right" v-on:click="remove" v-bind:data-id="id" v-bind:data-index="index"></span>
          <span class="glyphicon glyphicon-pencil pull-right" v-on:click="update" v-bind:data-id="id" v-bind:data-index="index"></span>
          <h4 class="list-item-heading">{{question}}</h4>
          <p>{{answer}}</p>
      </div>

      <div class="update" v-if="isUpdate">
          <div class="form-group text">
              <input type="text" class="form-control" name="faq-question" id="faq-question" v-model="faqQuestion">
          </div>
          <div class="form-group textarea">
              <textarea name="faq-answer" id="faq-answer" class="form-control" v-model="faqAnswer"></textarea>
          </div>
          <input type="submit" class="btn btn-default btn-block" value="Update" v-on:click="save" v-bind:data-index="index">
      </div>
  </li>
</template>

<script>
export default {
  props: {
      id: {
          required: false
      },
      question: {
          required: true
      },
      answer: {
          required: true
      },
      index: {}
  },
  data() {
    return {
      isUpdate: this.isUpdate,
      faqQuestion: this.question,
      faqAnswer: this.answer
    }
  },
  methods: {
      remove(event) {
          // -> Would ajax to remote data store to delete
          this.$emit('removeFaq', this.index);
      },
      update(event) {
          this.isUpdate = true;
      },
      save(event) {
          // -> Would ajax to remote data store to save
          this.isUpdate = false;
      },
  }
}
</script>
