<template>
  <div id="faqs">
      <ul class="list-group" id="faqs-list" v-on:removeFaq="removeFaq">
          <faq v-for="(faq, index) in faqs"
              v-bind:key="faq.id"
              v-bind:id="faq.id"
              v-bind:question="faq.question"
              v-bind:answer="faq.answer"
              v-bind:index="index"
              v-bind:isUpdate="faq.isUpdate"
              >
              {{ faq }}
          </faq>
      </ul>

      <div class="add">
          <div class="form-group text">
              <input type="text" class="form-control" name="faq-question" id="faq-question" v-model="newFaq.question">
          </div>
          <div class="form-group textarea">
              <textarea name="faq-answer" id="faq-answer" class="form-control" v-model="newFaq.answer"></textarea>
          </div>
          <input type="submit" class="btn btn-default btn-block" value="Add" v-on:click="create">
      </div>
  </div>
</template>

<script>
import Faq from './faq.vue'

export default {
  data() {
      return {
          faqs: [
              { id: 5, question: "Why are things like stuff?", answer: "Because", isUpdate: false },
              { id: 9, question: "How many of the things?", answer: "Ooh lots", isUpdate: false },
              { id: 11, question: "What things begin with traffic?", answer: "Traffic cops and traffic cones", isUpdate: false },
              { id: 14, question: "Why are Trout the king of fish?", answer: "We'll they're not Koi about it", isUpdate: false }
          ],
          newFaq: {
              id: null,
              question: "",
              answer: "",
              isUpdate: false
          },
          sortorder: []
      }
  },
  methods: {
      create(event) {
          // -> Would ajax to remote data store to save

          // Clone the object instead of passing by reference
          let faq = JSON.parse(JSON.stringify(this.newFaq));
          this.faqs.push(faq);

          this.newFaq.question = "";
          this.newFaq.answer = "";
      },
      removeFaq(event) {
        console.log(event);
        this.faqs.splice(event.target.dataset.index, 1);
      }
  },
  mounted() {
      let component = this;

      Sortable.create(document.getElementById("faqs-list"), {
          onSort: function (event) {
              let result = [],
                  items = event.to.children;

              for (let i = 0; i < items.length; i++) {
                  result.push(items[i].dataset.id);
              }

              component.sortorder = result;
          }
      });
  },
  components: {
    Faq
  }
}
</script>

<style scoped>
#faqs-list .sortable-ghost {
    background-color: cornsilk;
}
#faqs-list li {
    cursor: move;
}
#faqs-list li span.glyphicon {
    margin: 0 5px;
    cursor: pointer;
}
</style>
