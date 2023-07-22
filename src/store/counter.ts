import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    // option store
    // state: () => {
    //     {
    //         count: 0,
    //     }
    // },
    // getters: {
    //     double:(state)=>state*2
    // },
    // actions: {
    //     increment: {
    //         this.state++
    //     }
    // }
    // setup store
    const count = ref(0);
    function increment() {
        count.value++;
    }

    return {
        count,
        increment,
    };
});
