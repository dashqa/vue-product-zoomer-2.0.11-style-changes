<script>
  import ProductZoomer from './components/ProductZoomer'
  export default {
    name: 'app',
    data () {
      return {
        images: {
          thumbs: [
            {
              id: 1,
              url:
                "https://cdn1.radikalno.ru/uploads/2019/7/31/3c33d327b4139c30a493f5d686b972fd-full.png"
            },
            {
              id: 2,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/2.jpeg"
            },
            {
              id: 3,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/3.jpeg"
            },
            {
              id: 4,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/4.jpeg"
            },
            {
              id: 5,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/5.jpeg"
            },
            {
              id: 6,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/6.jpeg"
            },
            {
              id: 7,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/7.jpeg"
            },
            {
              id: 8,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/8.jpeg"
            },
            {
              id: 9,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/9.jpeg"
            }
          ],
          normal_size: [
            {
              id: 1,
              url:
                "https://cdn1.radikalno.ru/uploads/2019/7/31/3c33d327b4139c30a493f5d686b972fd-full.png"
            },
            {
              id: 2,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"
            },
            {
              id: 3,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/3.jpeg"
            },
            {
              id: 4,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
            },
            {
              id: 5,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/5.jpeg"
            },
            {
              id: 6,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/6.jpeg"
            },
            {
              id: 7,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/7.jpeg"
            },
            {
              id: 8,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/8.jpeg"
            },
            {
              id: 9,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/9.jpeg"
            }
          ],
          large_size: [
            {
              id: 1,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/1.jpeg"
            },
            {
              id: 2,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/2.jpeg"
            },
            {
              id: 3,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/3.jpeg"
            },
            {
              id: 4,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/4.jpeg"
            },
            {
              id: 5,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/5.jpeg"
            },
            {
              id: 6,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/6.jpeg"
            },
            {
              id: 7,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/7.jpeg"
            },
            {
              id: 8,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/8.jpeg"
            },
            {
              id: 9,
              url:
                "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/9.jpeg"
            }
          ]
        },
        zoomerOptions: {
          zoomFactor: 3,
          pane: 'pane',
          hoverDelay: 300,
          namespace: 'zoomer',
          scroll_items: 4,
          move_by_click: false,
          move_button_style: 'chevron',
          move_button_color: '#000000',
          image_width: 350,
          preview_card_width: 70,
          column_gap: 10,
        },
      }
    },
    components: {
      ProductZoomer
    }
  }
</script>

<template>
<main>
  <div>
          <div style="padding: 100px;">
            <ProductZoomer
              :base-images="images"
              :base-zoomer-options="zoomerOptions"
            />
          </div>
          <div>
            <h3>With A Pane Container Zoomer</h3>
            <pre>
              zoomFactor: 3,
              pane: 'pane',
              hoverDelay: 300,
              namespace: 'zoomer',
              move_by_click: false,
              move_button_style: 'chevron',
              move_button_color: '#000000',
              image_width: 350,
              preview_card_width: 70,
              column_gap: 10,
            </pre>
          </div>
  </div>
</main>
</template>

