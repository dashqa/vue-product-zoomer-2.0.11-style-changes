import ProductZoomer from './components/ProductZoomer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft, faAngleDoubleRight, faAngleDoubleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const VueProductZoomer = {
  install(Vue, options) {
    Vue.component(ProductZoomer.name, ProductZoomer)
    library.add(faChevronRight, faChevronLeft, faAngleDoubleRight, faAngleDoubleLeft, faSearch)
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}

export default VueProductZoomer;
